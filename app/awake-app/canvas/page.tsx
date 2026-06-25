"use client";

import { useEffect, useRef, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { AWAKE_CONFIG, TOTAL_TRAINING_MS } from '@/lib/config';
import { v4 as uuidv4 } from 'uuid';

export interface SessionContext {
  participantId: string;
  condition: 'A' | 'B';
  sessionNumber: number;
  daysSinceFirst: number;
  daysSincePrevious: number | null;
}

export interface AwakeEvent {
  event_id: string;
  session_id: string;   // <--- Add this line
  event_type: string;
  cycle_number: number | null;
  phase_type: string;
  session_time_ms: number;
  phase_time_ms: number;
  metadata: any;
}

const WORD_BANK = ["THE", "QUICK", "BROWN", "FOX", "JUMPS", "OVER", "THE", "LAZY", "DOG", "SYSTEM", "AWARENESS", "DRIFT", "RECOGNITION", "STILLNESS", "MIND", "THOUGHT", "FOCUS", "ATTENTION", "COGNITIVE", "MONITOR"];

function getPivotIndex(word: string): number {
  const len = word.length;
  if (len === 1) return 0;
  if (len >= 2 && len <= 5) return 1;
  if (len >= 6 && len <= 9) return 2;
  if (len >= 10 && len <= 13) return 3;
  return 4;
}

export default function AwakeCanvas() {
  const router = useRouter();
  const [sessionState, setSessionState] = useState<'INIT' | 'RUNNING' | 'PAUSED' | 'ESTIMATION' | 'PROBE' | 'FINISHED'>('INIT');
  
  // We use a ref for sessionState to prevent the loop from re-rendering
  const sessionStateRef = useRef(sessionState);
  useEffect(() => { sessionStateRef.current = sessionState; }, [sessionState]);

  const [currentWord, setCurrentWord] = useState<string>("");
  const [isStillness, setIsStillness] = useState<boolean>(true);
  
  const ctxRef = useRef<SessionContext | null>(null);
  const sessionIdRef = useRef<string>(`training_${Date.now()}`);
  const eventsRef = useRef<AwakeEvent[]>([]);
  
  // Timing Refs (These never trigger component re-renders to ensure high performance)
  const activeTimeMsRef = useRef<number>(0); 
  const phaseStartTimeMsRef = useRef<number>(0);
  const lastPerfNowRef = useRef<number>(0);
  const lastDateNowRef = useRef<number>(0);
  const animationFrameId = useRef<number>(0);
  
  const currentCycleRef = useRef<number>(1);
  const currentPhaseTypeRef = useRef<string>('stillness');
  const isSpaceDown = useRef<boolean>(false);
  const lastSpaceTimeRef = useRef<number>(0);
  
  const sleepDetectedRef = useRef<boolean>(false);
  const totalFocusBleedMsRef = useRef<number>(0);
  const focusLossStartRef = useRef<number>(0);
  
  const scheduledProbes = useRef<number[]>([]);
  const probeTimerRef = useRef<NodeJS.Timeout | null>(null);

  const currentWpmRef = useRef<number>(AWAKE_CONFIG.RSVP_START_WPM); 
  const nextWordTimeRef = useRef<number>(0);
  const wordIndexRef = useRef<number>(0);

  useEffect(() => {
    const rawCtx = localStorage.getItem("awake_session_context");
    if (!rawCtx) return router.push("/awake-app");
    
    ctxRef.current = JSON.parse(rawCtx);
    const ctx = ctxRef.current!;

    const probes = [];
    for (let i = 0; i < AWAKE_CONFIG.PROBES; i++) {
      const minMs = 60000;
      const maxMs = TOTAL_TRAINING_MS - 60000;
      probes.push(Math.floor(Math.random() * (maxMs - minMs + 1) + minMs));
    }
    scheduledProbes.current = probes.sort((a, b) => a - b);

    const initDatabaseSession = async () => {
      await supabase.from('awake_sessions').insert({
        session_id: sessionIdRef.current,
        participant_id: ctx.participantId,
        session_type: 'training',
        session_number: ctx.sessionNumber,
        days_since_first: ctx.daysSinceFirst,
        days_since_previous: ctx.daysSincePrevious,
        status: 'training_started',
        protocol_version: AWAKE_CONFIG.PROTOCOL_VERSION,
        engine_version: AWAKE_CONFIG.ENGINE_VERSION,
        config_snapshot: AWAKE_CONFIG,
        viewport_width: window.innerWidth,
        viewport_height: window.innerHeight,
        device_category: /Mobi|Android/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop'
      });

      lastPerfNowRef.current = performance.now();
      lastDateNowRef.current = Date.now();
      setSessionState('RUNNING');
    };

    initDatabaseSession();
  }, [router]);

  // THE SINGLETON ENGINE LOOP (Immune to multiplication bugs)
  const engineLoop = useCallback((timestamp: number) => {
    // Only accumulate time if we are actively running
    if (sessionStateRef.current === 'RUNNING') {
      const perfDelta = timestamp - lastPerfNowRef.current;
      const dateDelta = Date.now() - lastDateNowRef.current;
      
      if (dateDelta > perfDelta + 2000) {
        sleepDetectedRef.current = true;
        logEvent('sleep_event_detected');
      }

      activeTimeMsRef.current += perfDelta;
      const elapsedMs = activeTimeMsRef.current;

      if (elapsedMs >= TOTAL_TRAINING_MS) {
        finalizeSession();
        return; // Kill the loop
      }

      if (ctxRef.current?.condition === 'A') {
        if (!isStillness) setIsStillness(true);
      } else {
        const currentCycleElapsed = elapsedMs % (AWAKE_CONFIG.RSVP_DURATION_MS + AWAKE_CONFIG.STILLNESS_DURATION_MS);
        const inStillnessPhase = currentCycleElapsed >= AWAKE_CONFIG.RSVP_DURATION_MS;
        
        if (inStillnessPhase !== isStillness) {
          setIsStillness(inStillnessPhase);
          currentPhaseTypeRef.current = inStillnessPhase ? 'stillness' : 'rsvp';
          phaseStartTimeMsRef.current = activeTimeMsRef.current;
          currentCycleRef.current = Math.floor(elapsedMs / (AWAKE_CONFIG.RSVP_DURATION_MS + AWAKE_CONFIG.STILLNESS_DURATION_MS)) + 1;
          
          logEvent('phase_start');
          
          if (!inStillnessPhase) {
             currentWpmRef.current = AWAKE_CONFIG.RSVP_START_WPM;
             nextWordTimeRef.current = currentCycleElapsed;
          }
        }

        if (!inStillnessPhase) {
          // Deterministic Acceleration Logic
          if (currentCycleElapsed < AWAKE_CONFIG.RSVP_ACCELERATION_TIME_MS) {
              const progress = currentCycleElapsed / AWAKE_CONFIG.RSVP_ACCELERATION_TIME_MS;
              currentWpmRef.current = AWAKE_CONFIG.RSVP_START_WPM + (progress * (AWAKE_CONFIG.RSVP_TARGET_WPM - AWAKE_CONFIG.RSVP_START_WPM));
          } else {
              currentWpmRef.current = AWAKE_CONFIG.RSVP_TARGET_WPM;
          }

          if (currentCycleElapsed >= nextWordTimeRef.current) {
             const word = WORD_BANK[wordIndexRef.current % WORD_BANK.length];
             setCurrentWord(word);
             wordIndexRef.current++;
             const delay = 60000 / currentWpmRef.current;
             nextWordTimeRef.current = currentCycleElapsed + delay;
          }
        }
      }

      if (scheduledProbes.current.length > 0 && elapsedMs >= scheduledProbes.current[0]) {
        scheduledProbes.current.shift(); 
        triggerProbe();
      }
    }

    lastPerfNowRef.current = timestamp;
    lastDateNowRef.current = Date.now();
    animationFrameId.current = requestAnimationFrame(engineLoop);
  }, [isStillness]); // Minimal dependencies

  // Boot the loop exactly once
  useEffect(() => {
    animationFrameId.current = requestAnimationFrame(engineLoop);
    return () => cancelAnimationFrame(animationFrameId.current);
  }, [engineLoop]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden && sessionStateRef.current === 'RUNNING') {
        focusLossStartRef.current = performance.now();
        setSessionState('PAUSED');
      } else if (!document.hidden && sessionStateRef.current === 'PAUSED') {
        const lossDuration = performance.now() - focusLossStartRef.current;
        totalFocusBleedMsRef.current += lossDuration;
        logEvent('focus_loss', { duration_ms: lossDuration });
        lastPerfNowRef.current = performance.now();
        lastDateNowRef.current = Date.now();
        setSessionState('RUNNING');
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code !== 'Space') return;
      e.preventDefault(); 
      if (sessionStateRef.current !== 'RUNNING' || isSpaceDown.current) return;
      isSpaceDown.current = true;

      const now = activeTimeMsRef.current;
      const timeSincePrev = lastSpaceTimeRef.current === 0 ? 0 : now - lastSpaceTimeRef.current;
      const isRapid = timeSincePrev > 0 && timeSincePrev < AWAKE_CONFIG.RAPID_REPEAT_THRESHOLD_MS;

      logEvent('scre', { time_since_previous_ms: Math.floor(timeSincePrev), rapid_repeat: isRapid });
      lastSpaceTimeRef.current = now;
      setSessionState('ESTIMATION');
    };

    const handleKeyUp = (e: KeyboardEvent) => { if (e.code === 'Space') isSpaceDown.current = false; };
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => { window.removeEventListener('keydown', handleKeyDown); window.removeEventListener('keyup', handleKeyUp); };
  }, []);

  const logEvent = (type: string, extraData: any = {}) => {
    eventsRef.current.push({
      event_id: uuidv4(),
      session_id: sessionIdRef.current,
      event_type: type,
      cycle_number: ctxRef.current?.condition === 'A' ? 1 : currentCycleRef.current,
      phase_type: currentPhaseTypeRef.current,
      session_time_ms: Math.floor(activeTimeMsRef.current),
      phase_time_ms: Math.floor(activeTimeMsRef.current - phaseStartTimeMsRef.current),
      metadata: extraData
    });
  };

  const triggerProbe = () => {
    setSessionState('PROBE');
    probeTimerRef.current = setTimeout(() => {
      handleProbeResponse('timeout');
    }, 3000);
  };

  const handleEstimation = (estimate: string) => {
    const lastScre = [...eventsRef.current].reverse().find(e => e.event_type === 'scre');
    if (lastScre) lastScre.metadata.scre_estimate = estimate;
    lastPerfNowRef.current = performance.now();
    lastDateNowRef.current = Date.now();
    setSessionState('RUNNING');
  };

  const handleProbeResponse = (response: string) => {
    if (probeTimerRef.current) clearTimeout(probeTimerRef.current);
    logEvent('probe', { probe_response: response });
    lastPerfNowRef.current = performance.now();
    lastDateNowRef.current = Date.now();
    setSessionState('RUNNING');
  };

  const finalizeSession = async () => {
    setSessionState('FINISHED');
    cancelAnimationFrame(animationFrameId.current);
    
    // Automated Objective QC Calculation
    let qcFlag = null;
    const screEvents = eventsRef.current.filter(e => e.event_type === 'scre');
    const rapidRepeats = screEvents.filter(e => e.metadata.rapid_repeat).length;
    
    if (sleepDetectedRef.current) qcFlag = 'QC_SLEEP_EVENT';
    else if (window.innerWidth < 768) qcFlag = 'QC_RESOLUTION_WARN';
    else if (totalFocusBleedMsRef.current > (TOTAL_TRAINING_MS * 0.05)) qcFlag = 'QC_FOCUS_BLEED';
    else if (screEvents.length > 5 && (rapidRepeats / screEvents.length) > 0.15) qcFlag = 'QC_SPAM';

    try {
      // 1. Update Session Ledger
      const { error: sessionError } = await supabase.from('awake_sessions').update({
        duration_ms: Math.floor(activeTimeMsRef.current),
        status: 'training_completed',
        qc_flag: qcFlag,
        completed_at: new Date().toISOString()
      }).eq('session_id', sessionIdRef.current);

      if (sessionError) console.error("Database Error (Session Update):", sessionError.message);

      // 2. Batch Insert Events (This is where your focus_loss is saved)
      if (eventsRef.current.length > 0) {
        const { error: eventsError } = await supabase.from('awake_events').insert(
          eventsRef.current.map(e => ({
            ...e,
            session_id: sessionIdRef.current
          }))
        );
        if (eventsError) console.error("Database Error (Events Insert):", eventsError.message);
      }

      // 3. Update Participant Longitudinal State (Replaced broken RPC call)
      if (ctxRef.current?.participantId) {
        const { data: participant } = await supabase
          .from('awake_participants')
          .select('total_sessions_completed')
          .eq('participant_id', ctxRef.current.participantId)
          .single();

        if (participant) {
          await supabase.from('awake_participants').update({
            total_sessions_completed: participant.total_sessions_completed + 1,
            last_session_date: new Date().toISOString()
          }).eq('participant_id', ctxRef.current.participantId);
        }
      }
    } catch (err) {
      console.error("Critical Save Failure:", err);
    }

    // Pass Parent ID to Transfer module
    localStorage.setItem("awake_parent_session", sessionIdRef.current);
  };

  const renderRSVPWord = () => {
    if (!currentWord) return null;
    const pivot = getPivotIndex(currentWord);
    return (
      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex w-full max-w-2xl mx-auto items-center justify-center font-mono text-4xl md:text-5xl font-bold uppercase tracking-tighter relative right-4 md:right-8">
          <div className="flex-1 text-right text-white pr-[1px]">{currentWord.substring(0, pivot)}</div>
          <div className="w-[1ch] text-center text-red-500">{currentWord[pivot]}</div>
          <div className="flex-1 text-left text-white pl-[1px]">{currentWord.substring(pivot + 1)}</div>
        </div>
      </div>
    );
  };

  if (sessionState === 'INIT') return <div className="bg-black h-screen flex items-center justify-center text-zinc-500 font-mono tracking-widest text-xs">INITIALIZING ENGINE...</div>;
  if (sessionState === 'PAUSED') return <div className="bg-black h-screen flex flex-col items-center justify-center text-center p-8"><h2 className="text-zinc-500 text-xl font-bold uppercase tracking-widest">Session Paused</h2><p className="text-zinc-700">Please return focus to the window.</p></div>;
  if (sessionState === 'FINISHED') return (
    <div className="bg-black h-screen flex flex-col items-center justify-center text-center">
      <h2 className="text-white text-xl font-bold uppercase tracking-widest mb-8">Training Phase Complete</h2>
      <button onClick={() => AWAKE_CONFIG.TRANSFER_ENABLED ? router.push('/awake-app/transfer') : router.push('/')} className="px-6 py-3 bg-white text-black rounded-full text-xs font-bold uppercase tracking-widest hover:bg-zinc-200">
        {AWAKE_CONFIG.TRANSFER_ENABLED ? "Begin Transfer Test" : "Exit Protocol"}
      </button>
    </div>
  );

  return (
    <div className="bg-black h-screen w-full flex flex-col items-center justify-center overflow-hidden select-none cursor-none relative">
      {sessionState === 'RUNNING' && (
        <>
          {ctxRef.current?.condition === 'A' || isStillness ? <div className="w-1 h-1 bg-white rounded-full opacity-50" /> : renderRSVPWord() }
        </>
      )}
      {sessionState === 'ESTIMATION' && (
        <div className="flex flex-col items-center justify-center z-50 cursor-default">
          <p className="text-zinc-400 text-lg mb-8">Estimate how long you were mentally absent:</p>
          <div className="flex flex-col gap-3 w-64">
            {['0-10 seconds', '10-30 seconds', '30-60 seconds', '1-2 minutes', '2+ minutes'].map((opt) => (
              <button key={opt} onClick={() => handleEstimation(opt)} className="bg-zinc-900 text-white py-4 rounded-md border border-zinc-700 text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-black">{opt}</button>
            ))}
          </div>
        </div>
      )}
      {sessionState === 'PROBE' && (
        <div className="flex flex-col items-center justify-center z-50 cursor-default">
          <p className="text-zinc-300 text-xl mb-12 max-w-md text-center">Just before this prompt appeared, were you mentally absent?</p>
          <div className="flex gap-6">
            <button onClick={() => handleProbeResponse('yes')} className="bg-zinc-900 text-white px-12 py-4 rounded-md border border-zinc-700 font-bold tracking-widest uppercase hover:bg-white hover:text-black">YES</button>
            <button onClick={() => handleProbeResponse('no')} className="bg-zinc-900 text-white px-12 py-4 rounded-md border border-zinc-700 font-bold tracking-widest uppercase hover:bg-white hover:text-black">NO</button>
          </div>
        </div>
      )}
    </div>
  );
}
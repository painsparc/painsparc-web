"use client";

import { useEffect, useRef, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { AWAKE_CONFIG } from '@/lib/config';
import { SessionContext, AwakeEvent } from '../canvas/page';
import { v4 as uuidv4 } from 'uuid';

export default function TransferCanvas() {
  const router = useRouter();
  const [sessionState, setSessionState] = useState<'INIT' | 'RUNNING' | 'ESTIMATION' | 'FINISHED'>('INIT');
  
  const ctxRef = useRef<SessionContext | null>(null);
  const sessionIdRef = useRef<string>(`transfer_${Date.now()}`);
  const parentIdRef = useRef<string | null>(null);
  const eventsRef = useRef<AwakeEvent[]>([]);
  
  const activeTimeMsRef = useRef<number>(0); 
  const lastPerfNowRef = useRef<number>(0);
  const animationFrameId = useRef<number>(0);
  
  const isSpaceDown = useRef<boolean>(false);
  const lastSpaceTimeRef = useRef<number>(0);

  useEffect(() => {
    const rawCtx = localStorage.getItem("awake_session_context");
    parentIdRef.current = localStorage.getItem("awake_parent_session");
    
    if (!rawCtx) return router.push("/awake-app");
    ctxRef.current = JSON.parse(rawCtx);

    const initDatabaseSession = async () => {
      await supabase.from('awake_sessions').insert({
        session_id: sessionIdRef.current,
        participant_id: ctxRef.current!.participantId,
        session_type: 'transfer',
        parent_session_id: parentIdRef.current,
        session_number: ctxRef.current!.sessionNumber,
        days_since_first: ctxRef.current!.daysSinceFirst,
        days_since_previous: ctxRef.current!.daysSincePrevious,
        status: 'transfer_started',
        protocol_version: AWAKE_CONFIG.PROTOCOL_VERSION,
        engine_version: AWAKE_CONFIG.ENGINE_VERSION,
        config_snapshot: AWAKE_CONFIG,
        viewport_width: window.innerWidth,
        viewport_height: window.innerHeight
      });

      lastPerfNowRef.current = performance.now();
      setSessionState('RUNNING');
      runEngineLoop();
    };

    initDatabaseSession();
    return () => cancelAnimationFrame(animationFrameId.current);
  }, [router]);

  const runEngineLoop = useCallback(() => {
    const loop = (timestamp: number) => {
      if (sessionState === 'RUNNING') {
        activeTimeMsRef.current += timestamp - lastPerfNowRef.current;
        
        if (activeTimeMsRef.current >= AWAKE_CONFIG.TRANSFER_DURATION_MS) {
          finalizeSession();
          return;
        }
      }
      lastPerfNowRef.current = timestamp;
      animationFrameId.current = requestAnimationFrame(loop);
    };
    animationFrameId.current = requestAnimationFrame(loop);
  }, [sessionState]);

  useEffect(() => {
    if (sessionState === 'RUNNING') {
      animationFrameId.current = requestAnimationFrame(runEngineLoop);
    }
    return () => cancelAnimationFrame(animationFrameId.current);
  }, [sessionState, runEngineLoop]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code !== 'Space') return;
      e.preventDefault(); 
      if (sessionState !== 'RUNNING' || isSpaceDown.current) return;
      isSpaceDown.current = true;

      const now = activeTimeMsRef.current;
      eventsRef.current.push({
        event_id: uuidv4(),
        session_id: sessionIdRef.current,
        event_type: 'scre',
        cycle_number: null,
        phase_type: 'transfer_stillness',
        session_time_ms: Math.floor(now),
        phase_time_ms: Math.floor(now),
        metadata: { time_since_previous_ms: lastSpaceTimeRef.current === 0 ? 0 : Math.floor(now - lastSpaceTimeRef.current) }
      });

      lastSpaceTimeRef.current = now;
      setSessionState('ESTIMATION');
    };

    const handleKeyUp = (e: KeyboardEvent) => { if (e.code === 'Space') isSpaceDown.current = false; };
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => { window.removeEventListener('keydown', handleKeyDown); window.removeEventListener('keyup', handleKeyUp); };
  }, [sessionState]);

  const handleEstimation = (estimate: string) => {
    const lastScre = [...eventsRef.current].reverse().find(e => e.event_type === 'scre');
    if (lastScre) lastScre.metadata.scre_estimate = estimate;
    lastPerfNowRef.current = performance.now();
    setSessionState('RUNNING');
  };

  const finalizeSession = async () => {
    setSessionState('FINISHED');
    
    await supabase.from('awake_sessions').update({
      duration_ms: Math.floor(activeTimeMsRef.current),
      status: 'transfer_completed',
      completed_at: new Date().toISOString()
    }).eq('session_id', sessionIdRef.current);

    if (eventsRef.current.length > 0) {
      await supabase.from('awake_events').insert(eventsRef.current);
    }
    
    // Update participant last active date
    await supabase.from('awake_participants').update({
      last_session_date: new Date().toISOString()
    }).eq('participant_id', ctxRef.current?.participantId);
  };

  if (sessionState === 'INIT') return <div className="bg-black h-screen flex items-center justify-center text-zinc-500 font-mono tracking-widest text-xs">INITIALIZING TRANSFER PROTOCOL...</div>;
  if (sessionState === 'FINISHED') return (
    <div className="bg-black h-screen flex flex-col items-center justify-center text-center">
      <h2 className="text-white text-2xl font-bold uppercase tracking-widest mb-4">Project A.W.A.K.E. Concluded</h2>
      <p className="text-zinc-500 font-mono text-xs mb-12">Your data has been secured in the longitudinal database.</p>
      <button onClick={() => router.push('/')} className="px-8 py-4 bg-white text-black rounded-full text-xs font-bold uppercase tracking-widest hover:bg-zinc-200">Return to Hub</button>
    </div>
  );

  return (
    <div className="bg-black h-screen w-full flex flex-col items-center justify-center overflow-hidden select-none cursor-none relative">
      {sessionState === 'RUNNING' && <div className="w-1 h-1 bg-white rounded-full opacity-50" />}
      {sessionState === 'ESTIMATION' && (
        <div className="flex flex-col items-center justify-center z-50 cursor-default">
          <p className="text-zinc-400 text-lg mb-8">Estimate how long you were mentally absent:</p>
          <div className="flex flex-col gap-3 w-64">
            {['0-10 seconds', '10-30 seconds', '30-60 seconds', '1-2 minutes', '2+ minutes'].map((opt) => (
              <button key={opt} onClick={() => handleEstimation(opt)} className="bg-zinc-900 text-white py-4 rounded-md border border-zinc-700 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black">{opt}</button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
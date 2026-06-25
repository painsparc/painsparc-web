"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { supabase } from "@/lib/supabase";

type AppState = 'HOME' | 'NEW_PARTICIPANT' | 'RETURNING_PARTICIPANT';

export default function AwakeHub() {
  const router = useRouter();
  const [appState, setAppState] = useState<AppState>('HOME');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [meditationExp, setMeditationExp] = useState<string>("");
  const [newId, setNewId] = useState<string | null>(null);
  const [returnId, setReturnId] = useState<string>("");

  const handleCreateParticipant = async () => {
    if (!meditationExp) return setError("Please select your experience level.");
    setIsLoading(true);
    setError(null);

    const randomChars = Math.random().toString(36).substring(2, 10).toUpperCase();
    const participantId = `AWK-${randomChars.substring(0,4)}-${randomChars.substring(4)}`;
    
    let condition = 'A'; 
    try {
      const { data } = await supabase.from('awake_participants').select('condition');
      if (data) {
        const countA = data.filter(p => p.condition === 'A').length;
        const countB = data.filter(p => p.condition === 'B').length;
        condition = countB < countA ? 'B' : 'A';
      }
    } catch (err) {}

    // STRICT DATABASE INSERTION CHECK
    const { error: insertError } = await supabase.from('awake_participants').insert({
      participant_id: participantId,
      condition: condition,
      meditation_experience: meditationExp,
      total_sessions_completed: 0
    });

    if (insertError) {
      console.error("Supabase Error:", insertError);
      setError(`Database Error: ${insertError.message}`);
      setIsLoading(false);
      return; // Halt the process. Do not proceed.
    }

    setNewId(participantId);
    setIsLoading(false);
  };

  const startSession = (id: string, condition: string, sessionNum: number, daysFirst: number, daysPrev: number | null) => {
    localStorage.setItem("awake_session_context", JSON.stringify({
      participantId: id,
      condition,
      sessionNumber: sessionNum,
      daysSinceFirst: daysFirst,
      daysSincePrevious: daysPrev
    }));
    router.push("/awake-app/canvas");
  };

  const handleReturnParticipant = async () => {
    if (!returnId || returnId.length < 8) return setError("Invalid Participant ID.");
    setIsLoading(true);
    setError(null);

    const { data: participant, error: fetchError } = await supabase
      .from('awake_participants')
      .select('*')
      .eq('participant_id', returnId.toUpperCase())
      .single();

    if (fetchError || !participant) {
      setIsLoading(false);
      return setError(`Error: ${fetchError?.message || "Participant ID not found in database."}`);
    }

    const now = new Date();
    const firstDate = new Date(participant.first_session_date);
    const lastDate = participant.last_session_date ? new Date(participant.last_session_date) : null;
    
    const daysSinceFirst = Math.floor((now.getTime() - firstDate.getTime()) / 86400000);
    const daysSincePrev = lastDate ? Math.floor((now.getTime() - lastDate.getTime()) / 86400000) : null;
    const nextSessionNum = participant.total_sessions_completed + 1;

    startSession(participant.participant_id, participant.condition, nextSessionNum, daysSinceFirst, daysSincePrev);
  };

  return (
    <div className="bg-black min-h-screen w-full flex flex-col items-center justify-center p-6 text-center text-white">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="max-w-md w-full">
        
        {appState === 'HOME' && (
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tighter mb-4">Project A.W.A.K.E.</h1>
              <p className="text-zinc-400 text-sm">Longitudinal Protocol V1.0</p>
            </div>
            <div className="flex flex-col gap-4">
              <button onClick={() => setAppState('NEW_PARTICIPANT')} className="w-full bg-white text-black py-4 rounded-md font-bold text-xs uppercase tracking-widest hover:bg-zinc-200 transition-colors">
                New Participant
              </button>
              <button onClick={() => setAppState('RETURNING_PARTICIPANT')} className="w-full bg-zinc-900 text-white py-4 rounded-md border border-zinc-700 font-bold text-xs uppercase tracking-widest hover:bg-zinc-800 transition-colors">
                Returning Participant
              </button>
            </div>
          </div>
        )}

        {appState === 'NEW_PARTICIPANT' && !newId && (
          <div className="space-y-8">
            <button onClick={() => setAppState('HOME')} className="flex items-center gap-2 text-zinc-500 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors"><ArrowLeft size={14}/> Back</button>
            <h2 className="text-xl font-bold">Initial Registration</h2>
            <div className="text-left space-y-4">
              <p className="text-sm text-zinc-400">Have you practiced meditation regularly before?</p>
              {['Never', 'Occasionally', 'Regularly'].map(opt => (
                <button key={opt} onClick={() => setMeditationExp(opt)} className={`w-full py-3 border rounded-md text-sm font-bold tracking-widest uppercase transition-colors ${meditationExp === opt ? 'bg-white text-black border-white' : 'border-zinc-700 text-zinc-400 hover:border-zinc-500'}`}>
                  {opt}
                </button>
              ))}
            </div>
            {error && <p className="text-red-500 text-xs font-mono p-4 bg-red-950/50 rounded border border-red-900">{error}</p>}
            <button onClick={handleCreateParticipant} disabled={isLoading} className="w-full bg-white text-black py-4 rounded-md font-bold text-xs uppercase tracking-widest hover:bg-zinc-200 transition-colors disabled:opacity-50 mt-8">
              {isLoading ? "Generating Secure Profile..." : "I Consent — Generate ID"}
            </button>
          </div>
        )}

        {appState === 'NEW_PARTICIPANT' && newId && (
          <div className="space-y-8">
            <h2 className="text-xl font-bold text-green-400">Identity Generated</h2>
            <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-800">
              <p className="text-3xl font-mono tracking-widest font-bold mb-4">{newId}</p>
              <p className="text-xs text-zinc-400 uppercase tracking-widest leading-relaxed">Save this ID.<br/>You will need it for all future sessions.</p>
            </div>
            <button onClick={() => startSession(newId, 'UNKNOWN', 1, 0, null)} className="w-full flex items-center justify-center gap-3 bg-white text-black py-4 rounded-md font-bold text-xs uppercase tracking-widest hover:bg-zinc-200 transition-colors">
              Begin Session 1 <ArrowRight size={16} />
            </button>
          </div>
        )}

        {appState === 'RETURNING_PARTICIPANT' && (
          <div className="space-y-8">
            <button onClick={() => setAppState('HOME')} className="flex items-center gap-2 text-zinc-500 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors"><ArrowLeft size={14}/> Back</button>
            <h2 className="text-xl font-bold">Resume Protocol</h2>
            <input 
              type="text" 
              placeholder="Enter Participant ID (e.g., AWK-...)" 
              value={returnId}
              onChange={(e) => setReturnId(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-700 p-4 rounded-md text-center font-mono text-lg uppercase focus:outline-none focus:border-white transition-colors"
            />
            {error && <p className="text-red-500 text-xs font-mono p-4 bg-red-950/50 rounded border border-red-900">{error}</p>}
            <button onClick={handleReturnParticipant} disabled={isLoading} className="w-full flex items-center justify-center gap-3 bg-white text-black py-4 rounded-md font-bold text-xs uppercase tracking-widest hover:bg-zinc-200 transition-colors disabled:opacity-50">
              {isLoading ? "Authenticating..." : "Resume Tracking"} <ArrowRight size={16} />
            </button>
          </div>
        )}

      </motion.div>
    </div>
  );
}
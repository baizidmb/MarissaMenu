import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BellRing, CreditCard, Smartphone, CheckCircle, Clock, Sparkles } from 'lucide-react';
import { TableRequest } from '../types/database';

interface RequestCardProps {
  request: TableRequest;
  onResolve: (id: string) => void;
}

export const RequestCard: React.FC<RequestCardProps> = ({ request, onResolve }) => {
  const [elapsedMinutes, setElapsedMinutes] = useState<number>(0);
  const [isResolving, setIsResolving] = useState<boolean>(false);
  const [isDone, setIsDone] = useState<boolean>(request.status === 'resolved');

  // Compute live elapsed time
  useEffect(() => {
    const updateElapsed = () => {
      const created = new Date(request.created_at).getTime();
      const now = Date.now();
      const diffMins = Math.max(0, Math.floor((now - created) / 60000));
      setElapsedMinutes(diffMins);
    };

    updateElapsed();
    const timer = setInterval(updateElapsed, 30000);
    return () => clearInterval(timer);
  }, [request.created_at]);

  const handleResolveClick = async () => {
    setIsResolving(true);
    setIsDone(true);
    // Slight pause to allow check animation before removal
    setTimeout(async () => {
      await onResolve(request.id);
    }, 280);
  };

  const isPending = request.status === 'pending';
  const isUrgent = elapsedMinutes >= 3 && isPending;

  // Format created time (HH:MM)
  const createdTime = new Date(request.created_at).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: -20, scale: 0.92 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ 
        opacity: 0, 
        scale: 0.85, 
        x: 40, 
        transition: { duration: 0.3, ease: 'easeInOut' } 
      }}
      transition={{ type: 'spring', damping: 26, stiffness: 300 }}
      className={`rounded-3xl p-4 sm:p-5 border transition-all duration-300 shadow-md font-jakarta relative overflow-hidden ${
        !isPending || isDone
          ? 'bg-emerald-50/90 border-emerald-300/80 shadow-emerald-500/10'
          : isUrgent
          ? 'bg-amber-50/95 border-amber-400 shadow-amber-500/20'
          : 'bg-white border-slate-200/90 shadow-slate-900/5 hover:border-[#C19B77]/40'
      }`}
    >
      {/* Top Status & Urgency Header */}
      <div className="flex items-center justify-between gap-2 pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2.5">
          {request.type === 'bill_request' ? (
            <div className="w-11 h-11 rounded-2xl bg-amber-100/90 text-amber-800 flex items-center justify-center font-bold shadow-xs">
              <CreditCard className="w-5 h-5 text-amber-700" />
            </div>
          ) : (
            <div className="w-11 h-11 rounded-2xl bg-sky-100/90 text-sky-800 flex items-center justify-center font-bold shadow-xs">
              <BellRing className="w-5 h-5 text-[#C19B77] animate-bounce" />
            </div>
          )}

          <div>
            <div className="flex items-center gap-1.5">
              <h3 className="font-black text-base sm:text-lg text-slate-900 leading-tight tracking-tight">
                Masa {request.table_number}
              </h3>
            </div>
            <p className="text-[11px] text-slate-500 font-medium">
              {createdTime}
            </p>
          </div>
        </div>

        {/* Urgency Badge */}
        {isPending && !isDone && (
          <div
            className={`px-3 py-1 rounded-full text-[11px] font-extrabold flex items-center gap-1 shadow-xs ${
              isUrgent
                ? 'bg-amber-500 text-white animate-pulse'
                : 'bg-emerald-500 text-white'
            }`}
          >
            <Clock className="w-3 h-3" />
            <span>
              {elapsedMinutes === 0 ? 'Acum' : `${elapsedMinutes} min`}
            </span>
          </div>
        )}
      </div>

      {/* Request Details */}
      <div className="py-3.5 space-y-2 text-xs font-inter">
        <div className="flex items-center justify-between text-slate-700">
          <span className="font-bold text-slate-500">Tip Solicitare:</span>
          <span className="font-extrabold text-xs sm:text-sm text-slate-900">
            {request.type === 'bill_request' ? '🧾 Notă de Plată' : '🛎️ Chemare Ospătar'}
          </span>
        </div>

        {request.type === 'bill_request' && (
          <div className="flex items-center justify-between text-slate-700">
            <span className="font-bold text-slate-500">Metodă Plată:</span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-amber-50 border border-amber-200 text-[#C19B77] font-bold text-xs">
              {request.payment_method === 'cash' ? (
                <>
                  <Smartphone className="w-3 h-3" />
                  <span>Numerar / Cash</span>
                </>
              ) : (
                <>
                  <CreditCard className="w-3 h-3" />
                  <span>Card Bancar</span>
                </>
              )}
            </span>
          </div>
        )}
      </div>

      {/* Resolution Action Button with Smooth State Animation */}
      {isPending && !isDone ? (
        <motion.button
          whileTap={{ scale: 0.96 }}
          whileHover={{ scale: 1.02 }}
          disabled={isResolving}
          onClick={handleResolveClick}
          className="w-full py-3 rounded-2xl bg-[#C19B77] hover:bg-[#A8805B] text-white font-extrabold text-xs shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 border border-white/20"
        >
          <CheckCircle className="w-4 h-4" />
          <span>Marchează ca Rezolvat</span>
        </motion.button>
      ) : (
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center py-2.5 text-xs font-black text-emerald-700 bg-emerald-100/80 rounded-2xl flex items-center justify-center gap-1.5 shadow-xs border border-emerald-200"
        >
          <CheckCircle className="w-4 h-4 text-emerald-600" />
          <span>Rezolvat {request.resolved_at ? `la ${new Date(request.resolved_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}` : 'Acum'}</span>
        </motion.div>
      )}
    </motion.div>
  );
};
export default RequestCard;

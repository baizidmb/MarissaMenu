import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BellRing, CreditCard, Smartphone, CheckCircle, Clock, UtensilsCrossed } from 'lucide-react';
import { TableRequest } from '../types/database';

interface RequestCardProps {
  request: TableRequest;
  onResolve: (id: string) => void;
}

export const RequestCard: React.FC<RequestCardProps> = ({ request, onResolve }) => {
  const [elapsedMinutes, setElapsedMinutes] = useState<number>(0);
  const [isResolving, setIsResolving] = useState<boolean>(false);

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
    await onResolve(request.id);
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
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9, y: -20, transition: { duration: 0.25 } }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className={`rounded-3xl p-4 sm:p-5 border transition-all duration-300 shadow-md font-jakarta relative overflow-hidden ${
        !isPending
          ? 'bg-slate-50 border-slate-200 opacity-75'
          : isUrgent
          ? 'bg-amber-50/90 border-amber-400/80 shadow-amber-500/10'
          : 'bg-white border-slate-200/90 shadow-slate-900/5'
      }`}
    >
      {/* Top Status & Urgency Header */}
      <div className="flex items-center justify-between gap-2 pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2">
          {request.type === 'bill_request' ? (
            <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
              <CreditCard className="w-5 h-5 text-amber-700" />
            </div>
          ) : (
            <div className="w-10 h-10 rounded-2xl bg-sky-100 text-sky-800 flex items-center justify-center font-bold">
              <BellRing className="w-5 h-5 text-[#C19B77] animate-pulse" />
            </div>
          )}

          <div>
            <div className="flex items-center gap-1.5">
              <h3 className="font-extrabold text-base sm:text-lg text-slate-900 leading-tight">
                Masa {request.table_number}
              </h3>
            </div>
            <p className="text-[11px] text-slate-500 font-medium">
              {createdTime}
            </p>
          </div>
        </div>

        {/* Urgency Badge */}
        {isPending && (
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
          <span className="font-bold text-slate-900">Tip Solicitare:</span>
          <span className="font-extrabold text-sm text-slate-900">
            {request.type === 'bill_request' ? '🧾 Notă de Plată' : '🛎️ Chemare Ospătar'}
          </span>
        </div>

        {request.type === 'bill_request' && (
          <div className="flex items-center justify-between text-slate-700">
            <span className="font-bold text-slate-900">Metodă Plată:</span>
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

      {/* Resolution Action Button */}
      {isPending ? (
        <motion.button
          whileTap={{ scale: 0.96 }}
          disabled={isResolving}
          onClick={handleResolveClick}
          className="w-full py-3 rounded-2xl bg-[#C19B77] hover:bg-[#A8805B] text-white font-extrabold text-xs shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 border border-white/20"
        >
          <CheckCircle className="w-4 h-4" />
          <span>Marchează ca Rezolvat</span>
        </motion.button>
      ) : (
        <div className="text-center py-2 text-[11px] font-bold text-emerald-600 bg-emerald-50 rounded-xl flex items-center justify-center gap-1">
          <CheckCircle className="w-3.5 h-3.5" />
          <span>Rezolvat {request.resolved_at ? `la ${new Date(request.resolved_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}` : ''}</span>
        </div>
      )}
    </motion.div>
  );
};
export default RequestCard;

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BellRing,
  CreditCard,
  Volume2,
  VolumeX,
  Sun,
  LogOut,
  RefreshCw,
  Printer,
  History,
  Activity,
  CheckCircle2,
  Filter,
  ShieldCheck,
} from 'lucide-react';
import { HOTEL_INFO } from '../data/menuData';
import { useTableRequests } from '../hooks/useTableRequests';
import RequestCard from '../components/RequestCard';
import { soundService } from '../lib/audio';

interface StaffDashboardProps {
  onLogout: () => void;
  onOpenQrGenerator: () => void;
}

export const StaffDashboard: React.FC<StaffDashboardProps> = ({
  onLogout,
  onOpenQrGenerator,
}) => {
  const [audioEnabled, setAudioEnabled] = useState<boolean>(true);
  const [wakeLockActive, setWakeLockActive] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'active' | 'history'>('active');
  const [tableFilter, setTableFilter] = useState<'all' | 'interior' | 'terasa' | 'bar'>('all');

  const {
    requests,
    pendingRequests,
    resolvedRequests,
    loading,
    refresh,
    resolveRequest,
  } = useTableRequests(audioEnabled);

  // Screen Wake Lock API implementation for permanent tablet display
  useEffect(() => {
    let wakeLockSentinel: any = null;

    const requestWakeLock = async () => {
      if ('wakeLock' in navigator) {
        try {
          wakeLockSentinel = await (navigator as any).wakeLock.request('screen');
          setWakeLockActive(true);
          wakeLockSentinel.addEventListener('release', () => {
            setWakeLockActive(false);
          });
        } catch (err) {
          console.warn('Wake Lock error:', err);
          setWakeLockActive(false);
        }
      }
    };

    requestWakeLock();

    // Re-acquire lock on visibility change (e.g. tablet unlocked)
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        requestWakeLock();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      if (wakeLockSentinel) {
        wakeLockSentinel.release();
      }
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  const handleToggleAudio = () => {
    const next = !audioEnabled;
    setAudioEnabled(next);
    soundService.setMuted(!next);
    if (next) {
      soundService.playChime('waiter');
    }
  };

  const handleTestChime = () => {
    soundService.playChime('bill');
  };

  // Filter requests by table location
  const filterList = (list: typeof requests) => {
    if (tableFilter === 'all') return list;
    if (tableFilter === 'terasa') {
      return list.filter((r) => r.table_number.toLowerCase().includes('ter'));
    }
    if (tableFilter === 'bar') {
      return list.filter((r) => r.table_number.toLowerCase().includes('bar'));
    }
    // Interior (numeric tables)
    return list.filter((r) => !r.table_number.toLowerCase().includes('ter') && !r.table_number.toLowerCase().includes('bar'));
  };

  const filteredPending = filterList(pendingRequests);
  const filteredResolved = filterList(resolvedRequests);

  return (
    <div className="min-h-screen bg-[#F8F6F2] font-jakarta text-slate-900 flex flex-col selection:bg-[#C19B77] selection:text-white">
      {/* Top Header Bar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 sm:px-6 py-3 shadow-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 flex-wrap">
          {/* Brand & Live Counter */}
          <div className="flex items-center gap-3">
            <img
              src={HOTEL_INFO.logoUrl}
              alt="Logo"
              className="h-10 w-auto object-contain"
            />
            <div className="border-l border-slate-200 pl-3">
              <h1 className="font-extrabold text-sm sm:text-base text-slate-900 tracking-tight leading-none uppercase">
                {HOTEL_INFO.name}
              </h1>
              <div className="flex items-center gap-2 mt-1">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[11px] font-bold text-slate-500">
                  Live Dashboard • {pendingRequests.length} Solicitări Active
                </span>
              </div>
            </div>
          </div>

          {/* Action Toolbar */}
          <div className="flex items-center gap-2 sm:gap-2.5 flex-wrap">
            {/* Audio Toggle */}
            <button
              onClick={handleToggleAudio}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                audioEnabled
                  ? 'bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100'
                  : 'bg-rose-50 text-rose-700 border-rose-200 hover:bg-rose-100'
              }`}
              title={audioEnabled ? 'Sunet Activat' : 'Sunet Oprit'}
            >
              {audioEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
              <span className="hidden sm:inline">{audioEnabled ? 'Sonor ON' : 'Mute'}</span>
            </button>

            {/* Test Chime Trigger */}
            <button
              onClick={handleTestChime}
              className="px-2.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all cursor-pointer hidden md:flex items-center gap-1"
              title="Test Sunet Sonerie"
            >
              <BellRing className="w-3.5 h-3.5 text-[#C19B77]" />
              <span>Test Sonerie</span>
            </button>

            {/* Wake Lock Status Badge */}
            <div
              className={`px-3 py-1.5 rounded-xl text-xs font-bold border hidden lg:flex items-center gap-1.5 ${
                wakeLockActive
                  ? 'bg-amber-50 text-amber-700 border-amber-200'
                  : 'bg-slate-100 text-slate-500 border-slate-200'
              }`}
              title="Ecran Permanent Activ (Wake Lock)"
            >
              <Sun className={`w-3.5 h-3.5 ${wakeLockActive ? 'animate-spin' : ''}`} style={{ animationDuration: '12s' }} />
              <span>{wakeLockActive ? 'Ecran Activ' : 'Auto-Sleep'}</span>
            </div>

            {/* QR Stand Print Button */}
            <button
              onClick={onOpenQrGenerator}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#C19B77] hover:bg-[#A8805B] text-white text-xs font-extrabold shadow-sm transition-all cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Printează QR Mese</span>
            </button>

            {/* Manual Refresh */}
            <button
              onClick={refresh}
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
              title="Actualizează"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            </button>

            {/* Logout */}
            <button
              onClick={onLogout}
              className="p-2 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 transition-colors cursor-pointer"
              title="Deconectare"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex-1 w-full space-y-6">
        {/* Navigation Tabs & Filter Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
          {/* Main Feed Tabs */}
          <div className="flex items-center p-1 bg-white rounded-2xl border border-slate-200 shadow-2xs">
            <button
              onClick={() => setActiveTab('active')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                activeTab === 'active'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <Activity className="w-4 h-4 text-emerald-400" />
              <span>Solicitări Active</span>
              {pendingRequests.length > 0 && (
                <span className="px-2 py-0.5 rounded-full bg-amber-500 text-white text-[10px] font-black">
                  {pendingRequests.length}
                </span>
              )}
            </button>

            <button
              onClick={() => setActiveTab('history')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                activeTab === 'history'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <History className="w-4 h-4 text-slate-400" />
              <span>Istoric Rezolvate Azi</span>
              <span className="px-2 py-0.5 rounded-full bg-slate-200 text-slate-700 text-[10px] font-black">
                {resolvedRequests.length}
              </span>
            </button>
          </div>

          {/* Table Area Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto">
            <span className="text-xs font-bold text-slate-400 flex items-center gap-1 mr-1 shrink-0">
              <Filter className="w-3.5 h-3.5 text-[#C19B77]" />
              <span>Zonă:</span>
            </span>
            {[
              { id: 'all', label: 'Toate Mesele' },
              { id: 'interior', label: 'Restaurant Interior' },
              { id: 'terasa', label: 'Terasă' },
              { id: 'bar', label: 'Bar' },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setTableFilter(f.id as any)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                  tableFilter === f.id
                    ? 'bg-[#C19B77] text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Requests Feed Grid */}
        {activeTab === 'active' ? (
          filteredPending.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5"
            >
              <AnimatePresence>
                {filteredPending.map((req) => (
                  <RequestCard
                    key={req.id}
                    request={req}
                    onResolve={resolveRequest}
                  />
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <div className="bg-white rounded-3xl p-12 text-center space-y-3 border border-slate-200 max-w-md mx-auto my-12 shadow-xs">
              <CheckCircle2 className="w-14 h-14 text-emerald-500 mx-auto" />
              <h3 className="font-extrabold text-lg text-slate-900">
                Toate mesele sunt servite!
              </h3>
              <p className="text-xs text-slate-500 font-inter leading-relaxed">
                Nu există solicitări în așteptare în acest moment. Când un client apasă pe codul QR, notificarea va apărea instantaneu aici cu semnal sonor.
              </p>
            </div>
          )
        ) : (
          /* History Feed */
          filteredResolved.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
              {filteredResolved.map((req) => (
                <RequestCard
                  key={req.id}
                  request={req}
                  onResolve={resolveRequest}
                />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-3xl p-10 text-center space-y-2 border border-slate-200 max-w-md mx-auto my-12 shadow-xs">
              <History className="w-12 h-12 text-slate-400 mx-auto" />
              <h3 className="font-extrabold text-base text-slate-900">
                Nicio solicitare încheiată astăzi
              </h3>
              <p className="text-xs text-slate-500 font-inter">
                Solicitările marcate ca rezolvate vor fi arhivate aici.
              </p>
            </div>
          )
        )}
      </main>
    </div>
  );
};
export default StaffDashboard;

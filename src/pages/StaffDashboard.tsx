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
  Radio,
  Sparkles,
  Users,
  Timer,
  Award,
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
    connectionStatus,
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
    return list.filter((r) => !r.table_number.toLowerCase().includes('ter') && !r.table_number.toLowerCase().includes('bar'));
  };

  const filteredPending = filterList(pendingRequests);
  const filteredResolved = filterList(resolvedRequests);

  return (
    <div className="min-h-screen bg-[#F8F6F2] font-jakarta text-slate-900 flex flex-col selection:bg-[#C19B77] selection:text-white">
      {/* Top Luxury Header Bar */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-xl border-b border-slate-200/80 px-4 sm:px-6 py-3.5 shadow-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 flex-wrap">
          {/* Brand & Live Counter */}
          <div className="flex items-center gap-3">
            <img
              src={HOTEL_INFO.logoUrl}
              alt="Logo"
              className="h-10 w-auto object-contain drop-shadow-xs"
            />
            <div className="border-l border-slate-200 pl-3">
              <div className="flex items-center gap-2">
                <h1 className="font-black text-sm sm:text-base text-slate-900 tracking-tight leading-none uppercase">
                  {HOTEL_INFO.name}
                </h1>
                <span className="px-2 py-0.5 rounded-full bg-slate-900 text-amber-400 text-[10px] font-black uppercase tracking-wider">
                  Staff OS
                </span>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[11px] font-bold text-slate-500">
                  {pendingRequests.length} În Așteptare • {resolvedRequests.length} Rezolvate Azi
                </span>
              </div>
            </div>
          </div>

          {/* Action Toolbar */}
          <div className="flex items-center gap-2 sm:gap-2.5 flex-wrap">
            {/* Realtime Status Indicator Badge */}
            <div
              className={`px-3 py-1.5 rounded-xl text-xs font-extrabold border flex items-center gap-1.5 backdrop-blur-md shadow-2xs ${
                connectionStatus === 'SUBSCRIBED'
                  ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                  : connectionStatus === 'CONNECTING'
                  ? 'bg-amber-50 text-amber-700 border-amber-200'
                  : 'bg-rose-50 text-rose-700 border-rose-200'
              }`}
              title="Stare Conexiune Supabase Realtime"
            >
              <Radio className={`w-3.5 h-3.5 ${connectionStatus === 'SUBSCRIBED' ? 'animate-pulse text-emerald-600' : ''}`} />
              <span className="hidden md:inline">
                {connectionStatus === 'SUBSCRIBED' ? 'Realtime Conectat' : connectionStatus === 'CONNECTING' ? 'Sincronizare Live' : 'Conectat (Polling)'}
              </span>
            </div>

            {/* Audio Toggle */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={handleToggleAudio}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-extrabold transition-all cursor-pointer shadow-2xs ${
                audioEnabled
                  ? 'bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100'
                  : 'bg-rose-50 text-rose-700 border-rose-200 hover:bg-rose-100'
              }`}
              title={audioEnabled ? 'Sonor Activat' : 'Sonor Oprit'}
            >
              {audioEnabled ? <Volume2 className="w-4 h-4 text-emerald-600" /> : <VolumeX className="w-4 h-4 text-rose-600" />}
              <span className="hidden sm:inline">{audioEnabled ? 'Sonor ON' : 'Mute'}</span>
            </motion.button>

            {/* Test Chime Trigger */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={handleTestChime}
              className="px-2.5 py-1.5 rounded-xl bg-white hover:bg-amber-50 text-slate-700 border border-slate-200 hover:border-[#C19B77]/50 text-xs font-bold transition-all cursor-pointer hidden md:flex items-center gap-1 shadow-2xs"
              title="Test Sunet Sonerie"
            >
              <BellRing className="w-3.5 h-3.5 text-[#C19B77]" />
              <span>Test Sonerie</span>
            </motion.button>

            {/* Wake Lock Status Badge */}
            <div
              className={`px-3 py-1.5 rounded-xl text-xs font-bold border hidden lg:flex items-center gap-1.5 shadow-2xs ${
                wakeLockActive
                  ? 'bg-amber-50 text-amber-800 border-amber-200'
                  : 'bg-slate-100 text-slate-500 border-slate-200'
              }`}
              title="Ecran Permanent Activ (Wake Lock)"
            >
              <Sun className={`w-3.5 h-3.5 ${wakeLockActive ? 'animate-spin text-amber-600' : ''}`} style={{ animationDuration: '12s' }} />
              <span>{wakeLockActive ? 'Ecran Activ' : 'Auto-Sleep'}</span>
            </div>

            {/* QR Stand Print Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.02 }}
              onClick={onOpenQrGenerator}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#C19B77] hover:bg-[#A8805B] text-white text-xs font-extrabold shadow-sm transition-all cursor-pointer border border-white/20"
            >
              <Printer className="w-4 h-4" />
              <span>Printează QR</span>
            </motion.button>

            {/* Manual Refresh */}
            <button
              onClick={refresh}
              className="p-2 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 transition-colors cursor-pointer shadow-2xs"
              title="Actualizează"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin text-[#C19B77]' : ''}`} />
            </button>

            {/* Logout */}
            <button
              onClick={onLogout}
              className="p-2 rounded-xl bg-rose-50 hover:bg-rose-100 border border-rose-200 text-rose-700 transition-colors cursor-pointer shadow-2xs"
              title="Deconectare"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex-1 w-full space-y-6">
        {/* Statistics Metric Overview Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-3.5 border border-slate-200/80 shadow-2xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200/60 flex items-center justify-center text-[#C19B77]">
              <BellRing className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">În Așteptare</div>
              <div className="text-lg font-black text-slate-900 leading-tight">{pendingRequests.length}</div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-3.5 border border-slate-200/80 shadow-2xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200/60 flex items-center justify-center text-emerald-600">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Servite Azi</div>
              <div className="text-lg font-black text-emerald-700 leading-tight">{resolvedRequests.length}</div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-3.5 border border-slate-200/80 shadow-2xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200/60 flex items-center justify-center text-sky-600">
              <Timer className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Timp Mediu</div>
              <div className="text-lg font-black text-slate-900 leading-tight">&lt; 2 min</div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-3.5 border border-slate-200/80 shadow-2xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200/60 flex items-center justify-center text-purple-600">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Total Flux</div>
              <div className="text-lg font-black text-slate-900 leading-tight">{requests.length}</div>
            </div>
          </div>
        </div>

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
                <span className="px-2 py-0.5 rounded-full bg-amber-500 text-white text-[10px] font-black animate-pulse">
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

        {/* Requests Feed Grid with Spring Animations */}
        {activeTab === 'active' ? (
          filteredPending.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5"
            >
              <AnimatePresence mode="popLayout">
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
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white/90 backdrop-blur-md rounded-3xl p-12 text-center space-y-3 border border-slate-200 max-w-md mx-auto my-12 shadow-sm"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto text-emerald-500 shadow-inner">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-black text-lg text-slate-900 tracking-tight">
                Toate mesele sunt servite!
              </h3>
              <p className="text-xs text-slate-500 font-inter leading-relaxed">
                Nu există solicitări în așteptare în acest moment. Când un client apasă pe codul QR, notificarea va apărea instantaneu aici cu semnal sonor.
              </p>
            </motion.div>
          )
        ) : (
          /* History Feed */
          filteredResolved.length > 0 ? (
            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
              <AnimatePresence mode="popLayout">
                {filteredResolved.map((req) => (
                  <RequestCard
                    key={req.id}
                    request={req}
                    onResolve={resolveRequest}
                  />
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-10 text-center space-y-2 border border-slate-200 max-w-md mx-auto my-12 shadow-sm">
              <History className="w-12 h-12 text-slate-400 mx-auto" />
              <h3 className="font-black text-base text-slate-900">
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

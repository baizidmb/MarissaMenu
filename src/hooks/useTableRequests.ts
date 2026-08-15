import { useState, useEffect, useCallback, useRef } from 'react';
import { TableRequest } from '../types/database';
import { supabase, fetchTableRequests, resolveTableRequest } from '../lib/supabase';
import { soundService } from '../lib/audio';

export type RealtimeConnectionStatus = 'SUBSCRIBED' | 'CONNECTING' | 'CLOSED' | 'ERROR';

export function useTableRequests(audioEnabled: boolean = true) {
  const [requests, setRequests] = useState<TableRequest[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [connectionStatus, setConnectionStatus] = useState<RealtimeConnectionStatus>('CONNECTING');
  const audioEnabledRef = useRef(audioEnabled);
  audioEnabledRef.current = audioEnabled;

  const loadRequests = useCallback(async () => {
    try {
      const data = await fetchTableRequests();
      setRequests((prev) => {
        // Detect newly arrived pending requests
        const prevIds = new Set(prev.map((r) => r.id));
        const newPendings = data.filter((r) => !prevIds.has(r.id) && r.status === 'pending');

        if (newPendings.length > 0 && prev.length > 0 && audioEnabledRef.current) {
          const latest = newPendings[0];
          console.log('🔔 Triggering chime for newly polled request:', latest);
          soundService.playChime(latest.type === 'bill_request' ? 'bill' : 'waiter');
        }

        return data;
      });
    } catch (e) {
      console.error('Failed to load table requests:', e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadRequests();

    // 1. Supabase Realtime Subscription Channel
    const channelName = `table_requests_${Date.now()}`;
    console.log('📡 Subscribing to Supabase Realtime channel:', channelName);

    const supabaseChannel = supabase
      .channel(channelName)
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'table_requests',
        },
        (payload) => {
          console.log('⚡ Realtime postgres_changes event received:', payload);
          const { eventType, new: newRow, old: oldRow } = payload;

          if (eventType === 'INSERT' && newRow) {
            const req = newRow as TableRequest;
            setRequests((prev) => {
              if (prev.some((r) => r.id === req.id)) return prev;
              return [req, ...prev];
            });

            if (audioEnabledRef.current && req.status === 'pending') {
              console.log('🔔 Playing audio chime for new Realtime INSERT:', req);
              soundService.playChime(req.type === 'bill_request' ? 'bill' : 'waiter');
            }
          } else if (eventType === 'UPDATE' && newRow) {
            const req = newRow as TableRequest;
            setRequests((prev) =>
              prev.map((item) => (item.id === req.id ? req : item))
            );
          } else if (eventType === 'DELETE' && oldRow) {
            setRequests((prev) => prev.filter((r) => r.id !== (oldRow as any).id));
          }
        }
      )
      .subscribe((status, err) => {
        console.log(`📡 Supabase channel status: ${status}`, err || '');
        if (status === 'SUBSCRIBED') {
          setConnectionStatus('SUBSCRIBED');
        } else if (status === 'CLOSED') {
          setConnectionStatus('CLOSED');
        } else if (status === 'TIMED_OUT' || status === 'CHANNEL_ERROR') {
          setConnectionStatus('ERROR');
        }
      });

    // 2. BroadcastChannel (for instant same-browser multi-tab sync)
    const broadcastChannel = typeof window !== 'undefined' && 'BroadcastChannel' in window
      ? new BroadcastChannel('marissa_requests_channel')
      : null;

    const handleBroadcastMessage = (event: MessageEvent) => {
      const { type, payload } = event.data || {};
      console.log('📻 BroadcastChannel message:', type, payload);
      if (type === 'INSERT' && payload) {
        setRequests((prev) => {
          if (prev.some((r) => r.id === payload.id)) return prev;
          return [payload, ...prev];
        });
        if (audioEnabledRef.current && payload.status === 'pending') {
          soundService.playChime(payload.type === 'bill_request' ? 'bill' : 'waiter');
        }
      } else if (type === 'UPDATE' && payload) {
        setRequests((prev) =>
          prev.map((item) => (item.id === payload.id ? payload : item))
        );
      }
    };

    if (broadcastChannel) {
      broadcastChannel.addEventListener('message', handleBroadcastMessage);
    }

    // 3. Custom Local Window Events
    const handleCustomUpdate = (event: Event) => {
      const customEvent = event as CustomEvent;
      const { type, request } = customEvent.detail || {};
      if (type === 'INSERT' && request) {
        setRequests((prev) => {
          if (prev.some((r) => r.id === request.id)) return prev;
          return [request, ...prev];
        });
        if (audioEnabledRef.current && request.status === 'pending') {
          soundService.playChime(request.type === 'bill_request' ? 'bill' : 'waiter');
        }
      } else if (type === 'UPDATE' && request) {
        setRequests((prev) =>
          prev.map((item) => (item.id === request.id ? request : item))
        );
      }
    };

    window.addEventListener('marissa_request_update', handleCustomUpdate);

    // 4. Background Fallback Polling (every 4 seconds for bulletproof real-time sync)
    const pollInterval = setInterval(() => {
      loadRequests();
    }, 4000);

    return () => {
      supabase.removeChannel(supabaseChannel);
      if (broadcastChannel) {
        broadcastChannel.removeEventListener('message', handleBroadcastMessage);
        broadcastChannel.close();
      }
      window.removeEventListener('marissa_request_update', handleCustomUpdate);
      clearInterval(pollInterval);
    };
  }, [loadRequests]);

  const handleResolve = async (id: string) => {
    // Optimistic UI update
    setRequests((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, status: 'resolved' as const, resolved_at: new Date().toISOString() }
          : item
      )
    );
    await resolveTableRequest(id);
  };

  const pendingRequests = requests.filter((r) => r.status === 'pending');
  const resolvedRequests = requests.filter((r) => r.status === 'resolved');

  return {
    requests,
    pendingRequests,
    resolvedRequests,
    loading,
    connectionStatus,
    refresh: loadRequests,
    resolveRequest: handleResolve,
  };
}

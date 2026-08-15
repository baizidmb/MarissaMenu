import { useState, useEffect, useCallback, useRef } from 'react';
import { TableRequest } from '../types/database';
import { supabase, fetchTableRequests, resolveTableRequest } from '../lib/supabase';
import { soundService } from '../lib/audio';

export function useTableRequests(audioEnabled: boolean = true) {
  const [requests, setRequests] = useState<TableRequest[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const audioEnabledRef = useRef(audioEnabled);
  audioEnabledRef.current = audioEnabled;

  const loadRequests = useCallback(async () => {
    try {
      setLoading(true);
      const data = await fetchTableRequests();
      setRequests(data);
    } catch (e) {
      console.error('Failed to load table requests:', e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadRequests();

    // 1. Supabase Realtime Subscription (if Supabase is active)
    let supabaseChannel: ReturnType<typeof supabase.channel> | null = null;
    if (supabase) {
      supabaseChannel = supabase
        .channel('table_requests_realtime')
        .on(
          'postgres_changes',
          { event: 'INSERT', schema: 'public', table: 'table_requests' },
          (payload) => {
            const newReq = payload.new as TableRequest;
            setRequests((prev) => {
              // Avoid duplicates
              if (prev.some((r) => r.id === newReq.id)) return prev;
              return [newReq, ...prev];
            });

            if (audioEnabledRef.current && newReq.status === 'pending') {
              soundService.playChime(newReq.type === 'bill_request' ? 'bill' : 'waiter');
            }
          }
        )
        .on(
          'postgres_changes',
          { event: 'UPDATE', schema: 'public', table: 'table_requests' },
          (payload) => {
            const updated = payload.new as TableRequest;
            setRequests((prev) =>
              prev.map((item) => (item.id === updated.id ? updated : item))
            );
          }
        )
        .subscribe();
    }

    // 2. BroadcastChannel & Custom Events (for local tabs/devices sync)
    const channel = typeof window !== 'undefined' && 'BroadcastChannel' in window
      ? new BroadcastChannel('marissa_requests_channel')
      : null;

    const handleBroadcastMessage = (event: MessageEvent) => {
      const { type, payload } = event.data || {};
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

    if (channel) {
      channel.addEventListener('message', handleBroadcastMessage);
    }

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

    return () => {
      if (supabase && supabaseChannel) {
        supabase.removeChannel(supabaseChannel);
      }
      if (channel) {
        channel.removeEventListener('message', handleBroadcastMessage);
        channel.close();
      }
      window.removeEventListener('marissa_request_update', handleCustomUpdate);
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
    refresh: loadRequests,
    resolveRequest: handleResolve,
  };
}

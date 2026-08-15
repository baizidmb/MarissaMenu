import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { TableRequest, InsertTableRequestPayload } from '../types/database';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const isSupabaseConfigured = Boolean(
  supabaseUrl && 
  supabaseAnonKey && 
  !supabaseUrl.includes('placeholder') &&
  supabaseUrl.startsWith('http')
);

// Instantiate client if keys are present
export const supabase: SupabaseClient | null = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey, {
      realtime: {
        params: {
          eventsPerSecond: 10,
        },
      },
    })
  : null;

// Local Fallback Storage & Broadcast Channel (for offline / instant zero-config testing)
const STORAGE_KEY = 'marissa_table_requests_store';
const broadcastChannel = typeof window !== 'undefined' && 'BroadcastChannel' in window
  ? new BroadcastChannel('marissa_requests_channel')
  : null;

export const getLocalRequests = (): TableRequest[] => {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

export const saveLocalRequests = (requests: TableRequest[]): void => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(requests));
  } catch (e) {
    console.error('Failed to save to localStorage', e);
  }
};

// Insert a new table request
export async function createTableRequest(payload: InsertTableRequestPayload): Promise<TableRequest> {
  const newRequest: TableRequest = {
    id: typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : `req_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    table_number: payload.table_number,
    type: payload.type,
    payment_method: payload.payment_method || null,
    status: 'pending',
    created_at: new Date().toISOString(),
    resolved_at: null,
    notes: payload.notes || null,
  };

  if (supabase) {
    const { data, error } = await supabase
      .from('table_requests')
      .insert([
        {
          table_number: payload.table_number,
          type: payload.type,
          payment_method: payload.payment_method || null,
          notes: payload.notes || null,
        },
      ])
      .select()
      .single();

    if (error) {
      console.warn('Supabase insert failed, falling back to local sync:', error.message);
    } else if (data) {
      return data as TableRequest;
    }
  }

  // Fallback / Local sync
  const current = getLocalRequests();
  const updated = [newRequest, ...current];
  saveLocalRequests(updated);

  if (broadcastChannel) {
    broadcastChannel.postMessage({ type: 'INSERT', payload: newRequest });
  }
  window.dispatchEvent(new CustomEvent('marissa_request_update', { detail: { type: 'INSERT', request: newRequest } }));

  return newRequest;
}

// Mark a table request as resolved
export async function resolveTableRequest(id: string): Promise<boolean> {
  const resolvedAt = new Date().toISOString();

  if (supabase) {
    const { error } = await supabase
      .from('table_requests')
      .update({ status: 'resolved', resolved_at: resolvedAt })
      .eq('id', id);

    if (error) {
      console.warn('Supabase update failed, falling back to local sync:', error.message);
    }
  }

  // Fallback / Local sync
  const current = getLocalRequests();
  const updated = current.map((item) =>
    item.id === id ? { ...item, status: 'resolved' as const, resolved_at: resolvedAt } : item
  );
  saveLocalRequests(updated);

  const modified = updated.find((r) => r.id === id);
  if (broadcastChannel && modified) {
    broadcastChannel.postMessage({ type: 'UPDATE', payload: modified });
  }
  window.dispatchEvent(new CustomEvent('marissa_request_update', { detail: { type: 'UPDATE', request: modified } }));

  return true;
}

// Fetch requests
export async function fetchTableRequests(): Promise<TableRequest[]> {
  if (supabase) {
    const { data, error } = await supabase
      .from('table_requests')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(100);

    if (!error && data) {
      return data as TableRequest[];
    }
  }

  return getLocalRequests();
}

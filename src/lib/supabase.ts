import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { TableRequest, InsertTableRequestPayload } from '../types/database';

const DEFAULT_SUPABASE_URL = 'https://lvmcmcimucjjeusdtfwh.supabase.co';
const DEFAULT_SUPABASE_ANON_KEY = 'sb_publishable_aga4gh1fqnCRwngznozuIg_bszMn5c0';

export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || DEFAULT_SUPABASE_URL;
export const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || DEFAULT_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(
  supabaseUrl && 
  supabaseAnonKey && 
  !supabaseUrl.includes('placeholder') &&
  supabaseUrl.startsWith('http')
);

// Instantiate client with high reliability Realtime config
export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey, {
  realtime: {
    params: {
      eventsPerSecond: 10,
    },
  },
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
});

console.log('🔗 Supabase client initialized with endpoint:', supabaseUrl);

// Local Fallback Storage & Broadcast Channel (for cross-tab offline sync)
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

// Insert a new table request with Supabase and fallback
export async function createTableRequest(payload: InsertTableRequestPayload): Promise<TableRequest> {
  const localFallbackReq: TableRequest = {
    id: typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : `req_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    table_number: payload.table_number,
    type: payload.type,
    payment_method: payload.payment_method || null,
    status: 'pending',
    created_at: new Date().toISOString(),
    resolved_at: null,
    notes: payload.notes || null,
  };

  try {
    console.log('📤 Inserting table request to Supabase:', payload);
    const { data, error } = await supabase
      .from('table_requests')
      .insert([
        {
          table_number: payload.table_number,
          type: payload.type,
          payment_method: payload.payment_method || null,
          status: 'pending',
          notes: payload.notes || null,
        },
      ])
      .select()
      .single();

    if (error) {
      console.warn('⚠️ Supabase insert returned error:', error.message, error);
    } else if (data) {
      console.log('✅ Supabase insert success:', data);
      
      // Also update local cache & broadcast
      const current = getLocalRequests();
      saveLocalRequests([data as TableRequest, ...current.filter((r) => r.id !== data.id)]);
      
      if (broadcastChannel) {
        broadcastChannel.postMessage({ type: 'INSERT', payload: data });
      }
      window.dispatchEvent(new CustomEvent('marissa_request_update', { detail: { type: 'INSERT', request: data } }));
      
      return data as TableRequest;
    }
  } catch (err) {
    console.error('❌ Exception during Supabase insert:', err);
  }

  // Fallback if Supabase request failed or table not yet created
  const current = getLocalRequests();
  const updated = [localFallbackReq, ...current];
  saveLocalRequests(updated);

  if (broadcastChannel) {
    broadcastChannel.postMessage({ type: 'INSERT', payload: localFallbackReq });
  }
  window.dispatchEvent(new CustomEvent('marissa_request_update', { detail: { type: 'INSERT', request: localFallbackReq } }));

  return localFallbackReq;
}

// Mark a table request as resolved
export async function resolveTableRequest(id: string): Promise<boolean> {
  const resolvedAt = new Date().toISOString();

  try {
    console.log(`📝 Resolving request ${id} in Supabase...`);
    const { error } = await supabase
      .from('table_requests')
      .update({ status: 'resolved', resolved_at: resolvedAt })
      .eq('id', id);

    if (error) {
      console.warn('⚠️ Supabase resolve update error:', error.message);
    } else {
      console.log(`✅ Supabase resolve success for request ${id}`);
    }
  } catch (err) {
    console.error('❌ Exception during Supabase resolve:', err);
  }

  // Update local cache & broadcast
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
  try {
    const { data, error } = await supabase
      .from('table_requests')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(100);

    if (!error && data && data.length > 0) {
      // Merge with local requests to ensure nothing is missed
      const local = getLocalRequests();
      const map = new Map<string, TableRequest>();
      data.forEach((r) => map.set(r.id, r as TableRequest));
      local.forEach((r) => {
        if (!map.has(r.id)) map.set(r.id, r);
      });
      const merged = Array.from(map.values()).sort(
        (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );
      saveLocalRequests(merged);
      return merged;
    }
  } catch (err) {
    console.error('❌ Failed to fetch from Supabase:', err);
  }

  return getLocalRequests();
}

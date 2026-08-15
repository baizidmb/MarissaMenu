-- ==============================================================================
-- HOTEL & RESTAURANT MARISSA - REAL-TIME STAFF TABLE REQUESTS SCHEMA
-- Table: table_requests
-- ==============================================================================

-- 1. Create table_requests table
CREATE TABLE IF NOT EXISTS public.table_requests (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    table_number TEXT NOT NULL,
    type TEXT NOT NULL CHECK (type IN ('waiter_call', 'bill_request')),
    payment_method TEXT CHECK (payment_method IN ('card', 'cash') OR payment_method IS NULL),
    status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'in_progress', 'resolved')),
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    resolved_at TIMESTAMPTZ,
    notes TEXT
);

-- 2. Indexes for fast real-time ordering and filtering
CREATE INDEX IF NOT EXISTS idx_table_requests_status ON public.table_requests (status);
CREATE INDEX IF NOT EXISTS idx_table_requests_created_at ON public.table_requests (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_table_requests_table ON public.table_requests (table_number);

-- 3. Enable Row Level Security (RLS)
ALTER TABLE public.table_requests ENABLE ROW LEVEL SECURITY;

-- 4. Policies:
-- Allow anyone (guests with QR codes) to insert new requests
CREATE POLICY "Allow public insert table_requests" 
ON public.table_requests 
FOR INSERT 
TO public 
WITH CHECK (true);

-- Allow public read of requests (for customer feedback and staff tablets)
CREATE POLICY "Allow public select table_requests" 
ON public.table_requests 
FOR SELECT 
TO public 
USING (true);

-- Allow staff/public update of request status (e.g. resolve request)
CREATE POLICY "Allow public update table_requests" 
ON public.table_requests 
FOR UPDATE 
TO public 
USING (true)
WITH CHECK (true);

-- 5. Enable Supabase Realtime Publication
ALTER PUBLICATION supabase_realtime ADD TABLE public.table_requests;

export type RequestType = 'waiter_call' | 'bill_request';
export type PaymentMethod = 'card' | 'cash' | null;
export type RequestStatus = 'pending' | 'in_progress' | 'resolved';

export interface TableRequest {
  id: string;
  table_number: string;
  type: RequestType;
  payment_method: PaymentMethod;
  status: RequestStatus;
  created_at: string;
  resolved_at: string | null;
  notes?: string | null;
}

export interface InsertTableRequestPayload {
  table_number: string;
  type: RequestType;
  payment_method?: PaymentMethod;
  notes?: string | null;
}

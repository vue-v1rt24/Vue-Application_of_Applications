export enum EnumStatusRequest {
  DONE = 'done',
  CANCELLED = 'cancelled',
  ACTIVE = 'active',
  PENDING = 'pending',
}

export interface IRequest {
  id?: number;
  fio: string;
  phone: string;
  amount: string;
  status: EnumStatusRequest;
}

/*  */
export interface IRequestFilter {
  name: string;
  status: string;
}

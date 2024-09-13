import {Action, Dispatch} from 'redux';

export interface CoreState {
  user: UserData | null;
}

interface UserData {
  id?: number | null;
  fullname?: string | null;
  dob?: string | null;
  gender?: string | null;
  email?: string | null;
  phone?: string | null;
  height?: number | null;
  weight?: number | null;
  avatar?: string | null;
  avatarUrl?: string | null;
  role?: Role | null;
  clinic?: Clinic | null;
  doctor?:  Doctor;
}

interface Role {
  id?: number;
  name?: string;
}

interface Clinic {
  id?: number;
  name?: string;
  address?: string;
  user?: UserData | null;
}

interface Doctor {
  id?: number;
  userId?: number;
  price?: number | null;
  disc?: number | null;
  ratingPercent?: number | string | null;
  feedbackCount?: number | string | null;
  specialization?: string | null;
  clinicId?: number | null;
  clinic?: Clinic | null;
}

export interface CoreAction extends Action<string> {
  payload?: UserData | null;
}

export type CoreDispatch = Dispatch<CoreAction>;

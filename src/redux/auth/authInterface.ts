import {Action, Dispatch} from 'redux';

export interface AuthState {
  loading: boolean;
  message?: string | object | null;
}

export interface AuthAction extends Action<string> {
  payload?: AuthLoginResponse | AuthLoginPayload | UserData | RefreshPayload;
}

export interface RefreshAction extends Action<string> {
  payload?: RefreshPayload;
}

export interface RefreshPayload {
  refreshToken: string;
}

export interface LoginAction extends Action<string> {
  payload?: AuthLoginPayload;
}

export interface AuthLoginPayload {
  email: string;
  password: string;
}

export interface AuthLoginResponse {
  statusCode?: number;
  message?: string;
  data?: DataAuthLoginResponse | null
}

export interface DataAuthLoginResponse {
  access_token?: string;
  refresh_token?: string;
}

export interface UserResponse {
  statusCode?: number;
  message?: string;
  data?: UserData;
}

export interface UserData {
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
  doctor?: Doctor | null;
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

export type AuthDispatch = Dispatch<AuthAction>;
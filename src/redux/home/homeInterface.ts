import {Action, Dispatch} from 'redux';

export interface HomeState {
  loading: boolean;
  message?: string | object | null;
  count?: DashboardCount | null;
  order?: DashboardOrder[] | null;
  chat?: DashboardChat[] | null;
}

interface DashboardCount {
  homecare_count?: number | null;
  healthchat_count?: number | null;
}

export interface DashboardOrder {
  id?: number;
  complain?: string | null;
  status?: string | null;
  userId?: number | null;
  clinicId?: number | null;
  price?: number | null;
  discount?: number | null;
  doctor?: number | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  user?: User | null;
  clinic?: Clinic | null;
}

export interface DashboardChat {
  id?: number;
  createdDate: string | null;
  updatedDate: string | null;
  userId?: number | null;
  doctorId?: number | null;
  statusChat?: string | null;
  lastMessage: string | null;
  user?: User | null;
  doctor?: Doctor | null;
  messages?: Message[] | null;
  isClosed?: boolean | null;
  endChat?: string | null;
  topic?: string | null;
}

interface Clinic {
  id?: number;
  name?: string | null;
  address?: string | null;
  user?: User | null;
  doctors?: Doctor[] | null;
}

interface Doctor {
  id?: number;
  userId?: number | null;
  price?: number | null;
  disc?: number | null;
  ratingPercent?: number | null;
  feedbackCount?: number | null;
  specialization?: string | null;
  clinicId?: number | null;
  user?: User;
}

interface User {
  id?: number;
  fullname?: string | null;
  dob?: string | null;
  gender?: string | null;
  email?: string | null;
  phone?: string | null;
  height?: number | null;
  weight?: number | null;
  roleId?: number | null;
  doctorId?: number | null;
  avatar?: string | null;
  avatarUrl?: string | null;
  clinicId?: number | null;
}

interface Message {
  id?: number;
  sentAt?: string | null;
  healthChatId: number | null;
  content?: string | null;
  isFromDoctor?: boolean;
  userId?: number | null;
  doctorId?: number | null;
}

export interface DashboardAction extends Action<string> {
  payload?: DashboardData | null;
}

export interface DashboardResponse {
  statusCode?: number | null;
  message?: string | null;
  data?: DashboardData | null;
}

export interface DashboardData {
  count?: DashboardCount | null;
  order?: DashboardOrder[] | null;
  chat?: DashboardChat[] | null;
}

export type DashboardDispatch = Dispatch<DashboardAction>;

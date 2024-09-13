import { Doctor, Pagination, User } from '@utils/globalInterface';
import {Action, Dispatch} from 'redux';

export interface HchatState {
  loading: boolean;
  message?: string | object | null;
  chats?: HchatData[] | null;
  listHChat?: HCData[] | null;
  page?: number | null;
  totalPages?: number | null;
}

export interface HchatAction extends Action<string> {
  payload?: GetHChatPayload | HchatData[] | ReplyPayload | EndChatPayload | GetListHChatPayload | ListHChatData | string | null;
}

export interface HchatResponse {
  statusCode?: number | null;
  message?: string | null;
  data?: HchatData[] | ReplyData | HCData | ListHChatData | null;
}

export interface GetHChatPayload {
  id?: number;
}

export interface ReplyPayload {
  idChat?: number;
  content?: string;
  image?: any;
}

export interface EndChatPayload {
  idChat?: number;
}

export interface GetListHChatPayload {
  status?: string | null;
  page?: number | null;
  limit?: number | null;
}

export interface HchatData {
  id?: number;
  sentAt?: string | null;
  healthChatId?: number | null;
  content?: string | null;
  isFromDoctor?: boolean;
  userId?: number | null;
  doctorId?: number | null;
  imageUrl?: string | null;
}

export interface ReplyData {
  id?: number;
  healthChatId?: number | null;
  content?: string | null;
  isFromDoctor?: boolean;
  userId?: number | null;
  doctorId?: number | null;
  healthChat?: HCData | null;
  sentAt?: string | null;
}

export interface HCData {
  id?: number;
  createdDate?: string | null;
  updatedDate?: string | null;
  userId?: number | null;
  doctorId?: number | null;
  statusChat?: string | null;
  lastMessage?: string | null;
  topic?: string | null;
  endChat?: string | null;
  isClosed?: boolean | null;
  user?: User | null;
  doctor?: Doctor | null;
  messages?: HchatData[] | null;
}

export interface ListHChatData {
  data?: HCData[] | null;
  pagination?: Pagination | null;
}

export type HchatDispatch = Dispatch<HchatAction>;
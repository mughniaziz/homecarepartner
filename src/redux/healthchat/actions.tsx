import * as CONST from './constant';
import {
  EndChatPayload,
  GetHChatPayload,
  GetListHChatPayload,
  HchatAction,
  HchatData,
  ListHChatData,
  ReplyPayload,
} from './hchatInterface';

export const resetHChat = (): HchatAction => ({
  type: CONST.RESET_HCHAT,
});

export const getHChats = (value: GetHChatPayload): HchatAction => ({
  type: CONST.GET_CHATS,
  payload: value,
});

export const getHChatSuccess = (data: HchatData[]): HchatAction => ({
  type: CONST.GET_CHATS_SUCCESS,
  payload: data,
});

export const getHChatFailure = (error: any): HchatAction => ({
  type: CONST.GET_CHATS_FAILURE,
  payload: error,
});

export const replyChat = (value: ReplyPayload): HchatAction => ({
  type: CONST.REPLY_CHAT,
  payload: value,
});

export const replyChatSuccess = (): HchatAction => ({
  type: CONST.REPLY_CHAT_SUCCESS,
});

export const replyChatFailure = (error: any): HchatAction => ({
  type: CONST.REPLY_CHAT_FAILURE,
  payload: error,
});

export const endedChat = (value: EndChatPayload): HchatAction => ({
  type: CONST.ENDED_CHAT,
  payload: value,
});

export const endedChatSuccess = (): HchatAction => ({
  type: CONST.ENDED_CHAT_SUCCESS,
});

export const endedChatFailure = (error: any): HchatAction => ({
  type: CONST.ENDED_CHAT_FAILURE,
  payload: error,
});

export const getListHChat = (value: GetListHChatPayload): HchatAction => ({
  type: CONST.GET_LIST_HCHAT,
  payload: value,
});

export const getListHChatSuccess = (data: ListHChatData): HchatAction => ({
  type: CONST.GET_LIST_HCHAT_SUCCESS,
  payload: data,
});

export const getListHChatFailure = (error: any): HchatAction => ({
  type: CONST.GET_LIST_HCHAT_FAILURE,
  payload: error,
});

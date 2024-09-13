import {Reducer} from 'redux';
import * as CONST from './constant';
import {HchatAction, HchatData, HchatState, ListHChatData} from './hchatInterface';

const initalState: HchatState = {
  loading: false,
  message: null,
  chats: null,
  listHChat: null,
  page: 1,
  totalPages: 0,
};

const hchatReducer: Reducer<HchatState, HchatAction> = (
  state = initalState,
  action,
) => {
  switch (action.type) {
    case CONST.RESET_HCHAT:
      return {
        ...state,
        loading: false,
        message: null,
      };
    case CONST.GET_CHATS:
      return {
        ...state,
        loading: true,
      };
    case CONST.GET_CHATS_SUCCESS:
      const chat = action.payload as HchatData[]
      return {
        ...state,
        loading: false,
        message: 'get_messages',
        chats: chat,
      };
    case CONST.GET_CHATS_FAILURE:
      return {
        ...state,
        loading: false,
        message: action.payload,
      };
    case CONST.REPLY_CHAT:
      return {
        ...state,
        loading: true,
      };
    case CONST.REPLY_CHAT_SUCCESS:
      return {
        ...state,
        loading: false,
        message: 'replied',
      };
    case CONST.REPLY_CHAT_FAILURE:
      return {
        ...state,
        loading: false,
        message: action.payload,
      };
    case CONST.ENDED_CHAT:
      return {
        ...state,
        loading: true,
      };
    case CONST.ENDED_CHAT_SUCCESS:
      return {
        ...state,
        loading: false,
        message: 'chat_ended',
      };
    case CONST.ENDED_CHAT_FAILURE:
      return {
        ...state,
        loading: false,
        message: action.payload,
      };
    case CONST.GET_LIST_HCHAT:
      return {
        ...state,
        loading: true,
      };
    case CONST.GET_LIST_HCHAT_SUCCESS:
      const res = action.payload as ListHChatData;
      return {
        ...state,
        loading: false,
        message: 'fetched_list',
        listHChat: res?.data,
        totalPages: res?.pagination?.totalPages,
      };
    case CONST.GET_LIST_HCHAT_FAILURE:
      return {
        ...state,
        loading: false,
        message: action.payload,
      };
    default:
      return state;
  }
};

export default hchatReducer;

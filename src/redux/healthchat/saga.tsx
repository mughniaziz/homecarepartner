import {all, call, fork, put, takeLatest} from 'redux-saga/effects';
import api from '@helpers/apiHelper';
import {
  GET_MESSAGES,
  REPLY_MESSAGE,
  END_CHAT,
  GET_HCLIST,
} from '@config/endpoint';
import {refreshCurrentToken} from '@redux/auth/saga';
import {
  HchatResponse,
  HchatAction,
  GetHChatPayload,
  HchatData,
  ReplyPayload,
  EndChatPayload,
  GetListHChatPayload,
  ListHChatData,
} from './hchatInterface';
import * as CONST from './constant';
import * as actions from './actions';

const messagesAsync = async (id: string): Promise<HchatResponse> => {
  const req = await api.get(GET_MESSAGES.replace(':id', id));
  return req;
};

const replyAsync = async (id: string, body: any): Promise<HchatResponse> => {
  const req = await api.post(REPLY_MESSAGE.replace(':id', id), body, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return req;
};

const endAsync = async (id: string): Promise<HchatResponse> => {
  const req = await api.post(END_CHAT.replace(':id', id), {});
  return req;
};

const listHCAsync = async (params: any): Promise<HchatResponse> => {
  const req = await api.get(GET_HCLIST, {
    params,
  });
  return req;
};

function* getHChats({
  payload,
  type,
}: HchatAction): Generator<any, void, HchatResponse> {
  const {id} = payload as GetHChatPayload;

  try {
    const response = yield call(messagesAsync, id?.toString() ?? '0');
    if (response.data) {
      const data = response.data as HchatData[];
      yield put(actions.getHChatSuccess(data));
    }
  } catch (error: any) {
    if (error?.response?.data?.statusCode === 401) {
      yield call(refreshCurrentToken);
      yield getHChats({type, payload});
    } else {
      yield put(actions.getHChatFailure(error?.response?.data?.message));
    }
  }
}

function* replyChat({
  payload,
  type,
}: HchatAction): Generator<any, void, HchatResponse> {
  const {idChat, content, image} = payload as ReplyPayload;
  const body = new FormData();
  content !== undefined && body.append('content', content);
  image !== undefined && body.append('image', image);
  try {
    yield call(replyAsync, idChat?.toString() ?? '0', body);
    yield put(actions.replyChatSuccess());
  } catch (error: any) {
    if (error?.response?.data?.statusCode === 401) {
      yield call(refreshCurrentToken);
      yield replyChat({type, payload});
    } else {
      yield put(actions.replyChatFailure(error?.response?.data?.message));
    }
  }
}

function* endedChat({
  payload,
  type,
}: HchatAction): Generator<any, void, HchatResponse> {
  const {idChat} = payload as EndChatPayload;
  try {
    yield call(endAsync, idChat?.toString() ?? '0');
    yield put(actions.endedChatSuccess());
  } catch (error: any) {
    if (error?.response?.data?.statusCode === 401) {
      yield call(refreshCurrentToken);
      yield endedChat({type, payload});
    } else {
      yield put(actions.endedChatFailure(error?.response?.data?.message));
    }
  }
}

function* getListHChat({
  payload,
  type,
}: HchatAction): Generator<any, void, HchatResponse> {
  const params = payload as GetListHChatPayload;
  try {
    const response = yield call(listHCAsync, params);
    if (response.data) {
      const data = response.data as ListHChatData;
      yield put(actions.getListHChatSuccess(data));
    }
  } catch (error: any) {
    if (error?.response?.data?.statusCode === 401) {
      yield call(refreshCurrentToken);
      yield getListHChat({type, payload});
    } else {
      yield put(actions.getListHChatFailure(error?.response?.data?.message));
    }
  }
}

function* watchGetHChats() {
  yield takeLatest(CONST.GET_CHATS, getHChats);
}

function* watchReplyChat() {
  yield takeLatest(CONST.REPLY_CHAT, replyChat);
}

function* watchEndedChat() {
  yield takeLatest(CONST.ENDED_CHAT, endedChat);
}

function* watchGetListHChat() {
  yield takeLatest(CONST.GET_LIST_HCHAT, getListHChat);
}

export default function* rootSaga() {
  yield all([
    fork(watchGetHChats),
    fork(watchReplyChat),
    fork(watchEndedChat),
    fork(watchGetListHChat),
  ]);
}

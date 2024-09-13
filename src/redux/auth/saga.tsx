import {all, call, fork, put, takeLatest} from 'redux-saga/effects';
import api from '@helpers/apiHelper';
import {LOGIN, ME, REFRESH} from '@config/endpoint';
import Snackbar from 'react-native-snackbar';
import * as CONST from './constant';
import * as actions from './actions';
import {
  AuthLoginResponse,
  AuthAction,
  AuthLoginPayload,
  LoginAction,
  UserResponse,
  UserData,
} from './authInterface';
import {
  getRefreshToken,
  setAccessToken,
  setRefreshToken,
} from '@helpers/storage';

const loginAsync = async (body: LoginAction): Promise<AuthLoginResponse> => {
  const req = await api.post(LOGIN, {
    email: body.payload?.email,
    password: body.payload?.password,
  });
  return req;
};

const meAsync = async (): Promise<UserResponse> => {
  const req = await api.get(ME);
  return req;
};

const refreshAsync = async (): Promise<AuthLoginResponse> => {
  const refreshToken = await getRefreshToken();
  const req = await api.post(REFRESH, {refreshToken});
  return req;
};

function* loginAction(
  action: LoginAction,
): Generator<any, void, AuthLoginResponse> {
  try {
    const response = yield call(loginAsync, action);
    setAccessToken(response?.data?.access_token || '');
    setRefreshToken(response?.data?.refresh_token || '');
    if (response.statusCode === 200) {
      yield call(loadCurrentUser);
    }
    yield put(actions.loginSuccessAction());
  } catch (error: any) {
    console.log('ERROR -> ', error.response.data);
    yield put(actions.loginFailureAction(error?.response?.data?.message));
  }
}

function* loadCurrentUser(): Generator<any, void, UserResponse> {
  try {
    const response = yield call(meAsync);
    yield put(actions.loadCurrentUserSuccess(response?.data || {}));
  } catch (error: any) {
    yield put(actions.loadCurrentUserFailure(error?.response?.data?.message));
  }
}

export function* refreshCurrentToken(): Generator<
  any,
  void,
  AuthLoginResponse
> {
  try {
    const response = yield call(refreshAsync);
    setAccessToken(response?.data?.access_token || '');
    yield put(actions.refreshCurrentTokenSuccess());
  } catch (error: any) {
    yield put(
      actions.refreshCurrentTokenFailure(error?.response?.data?.message),
    );
  }
}

function* watchLoginAction() {
  yield takeLatest(CONST.LOGIN, loginAction);
}

function* watchLoadCurrentUser() {
  yield takeLatest(CONST.LOAD_CURRENT_USER, loadCurrentUser);
}

function* watchRefreshCurrentToken() {
  yield takeLatest(CONST.REFRESH_CURRENT_TOKEN, refreshCurrentToken);
}

export default function* rootSaga() {
  yield all([
    fork(watchLoginAction),
    fork(watchLoadCurrentUser),
    fork(watchRefreshCurrentToken),
  ]);
}

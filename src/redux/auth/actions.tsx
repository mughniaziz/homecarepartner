import { AuthAction, AuthLoginPayload, AuthLoginResponse, DataAuthLoginResponse, LoginAction, RefreshAction, RefreshPayload, UserData, UserResponse } from './authInterface';
import * as CONST from './constant';

export const resetDefault = (): AuthAction => ({
  type: CONST.RESET_DEFAULT
});

export const loginAction = (value: AuthLoginPayload): LoginAction => ({
  type: CONST.LOGIN,
  payload: value,
});

export const loginSuccessAction = (): AuthAction => ({
  type: CONST.LOGIN_SUCCESS,
});

export const loginFailureAction = (error: any): AuthAction => ({
  type: CONST.LOGIN_FAILURE,
  payload: error,
});

export const loadCurrentUser = (): AuthAction => ({
  type: CONST.LOAD_CURRENT_USER,
});

export const loadCurrentUserSuccess = (data: UserData): AuthAction => ({
  type: CONST.LOAD_CURRENT_USER_SUCCESS,
  payload: data,
});

export const loadCurrentUserFailure = (error: any): AuthAction => ({
  type: CONST.LOAD_CURRENT_USER_FAILURE,
  payload: error,
});

export const refreshCurrentToken = (value: RefreshPayload): RefreshAction => ({
  type: CONST.REFRESH_CURRENT_TOKEN,
  payload: value,
});

export const refreshCurrentTokenSuccess = (): AuthAction => ({
  type: CONST.REFRESH_CURRENT_TOKEN_SUCCESS,
});

export const refreshCurrentTokenFailure = (error: any): AuthAction => ({
  type: CONST.REFRESH_CURRENT_TOKEN_FAILURE,
  payload: error,
});
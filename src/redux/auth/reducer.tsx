import * as CONST from './constant';
import { AuthAction, AuthState } from './authInterface';
import { Reducer } from 'redux';

const initialState: AuthState = {
  loading: false,
  message: null,
}

const authReducer: Reducer<AuthState, AuthAction> = (state = initialState, action) => {
  switch (action.type) {
    case CONST.RESET_DEFAULT:
      return {
        ...state,
        loading: false,
        message: null,
      };
    case CONST.LOGIN:
      return {
        ...state,
        loading: true,
      };
    case CONST.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        message: 'success_login',
      };
    case CONST.LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        message: action.payload
      };
    case CONST.REFRESH_CURRENT_TOKEN:
      return {
        ...state,
        loading: true,
      };
    case CONST.REFRESH_CURRENT_TOKEN_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case CONST.REFRESH_CURRENT_TOKEN_FAILURE:
      return {
        ...state,
        loading: false,
        message: action.payload,
      };
    default:
      return state;
  }
}

export default authReducer;

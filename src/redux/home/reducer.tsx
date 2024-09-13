import {Reducer} from 'redux';
import * as CONST from './constant';
import {DashboardAction, HomeState} from './homeInterface';

const initalState: HomeState = {
  loading: false,
  message: null,
  count: null,
  order: null,
  chat: null,
};

const homeReducer: Reducer<HomeState, DashboardAction> = (
  state = initalState,
  action,
) => {
  switch (action.type) {
    case CONST.RESET_DASHBOARD_DEFAULT:
      return {
        ...state,
        loading: false,
        message: null,
      };
    case CONST.GET_DASHBOARD:
      return {
        ...state,
        loading: true,
      };
    case CONST.GET_DASHBOARD_SUCCESS:
      return {
        ...state,
        loading: false,
        message: 'dashboard_fetched',
        count: action.payload?.count,
        order: action.payload?.order,
        chat: action.payload?.chat,
      };
    case CONST.GET_DASHBOARD_FAILURE:
      return {
        ...state,
        loading: false,
        message: action.payload,
      };
    default:
      return state;
  }
};

export default homeReducer;

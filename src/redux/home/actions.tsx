import * as CONST from './constant';
import { DashboardAction, DashboardData } from './homeInterface';

export const resetDashboardDefault = (): DashboardAction => ({
  type: CONST.RESET_DASHBOARD_DEFAULT,
});

export const getDashboard = (): DashboardAction => ({
  type: CONST.GET_DASHBOARD,
});

export const getDashboardSuccess = (data: DashboardData): DashboardAction => ({
  type: CONST.GET_DASHBOARD_SUCCESS,
  payload: data,
});

export const getDashboardFailure = (error: any): DashboardAction => ({
  type: CONST.GET_DASHBOARD_FAILURE,
  payload: error,
});
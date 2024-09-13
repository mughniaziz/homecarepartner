import {all, call, put, fork, takeLatest} from 'redux-saga/effects';
import api from '@helpers/apiHelper';
import {DASHBOARD} from '@config/endpoint';
import * as CONST from './constant';
import * as actions from './actions';
import {DashboardResponse} from './homeInterface';
import {refreshCurrentToken} from '@redux/auth/saga';

const dashboardAsync = async (): Promise<DashboardResponse> => {
  const req: DashboardResponse = await api.get(DASHBOARD);
  return req;
};

function* getDashboard(): Generator<any, void, DashboardResponse> {
  try {
    const response = yield call(dashboardAsync);
    yield put(actions.getDashboardSuccess(response?.data ?? {}));
  } catch (error: any) {
    if (error?.response?.data?.statusCode === 401) {
      yield call(refreshCurrentToken);
      yield call(getDashboard);
    } else {
      yield put(actions.getDashboardFailure(error?.response?.data?.message));
    }
  }
}

function* watchGetDashboard() {
  yield takeLatest(CONST.GET_DASHBOARD, getDashboard);
}

export default function* rootSaga() {
  yield all([fork(watchGetDashboard)]);
}

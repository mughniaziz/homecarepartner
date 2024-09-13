import {all} from 'redux-saga/effects';
import authSaga from './auth/saga';
import coreSaga from './core/saga';
import homeSaga from './home/saga';
import hchatSaga from './healthchat/saga';

export default function* rootSaga() {
  yield all([authSaga(), coreSaga(), homeSaga(), hchatSaga()]);
}

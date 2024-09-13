import {Reducer} from 'redux';
import * as CONST from './constant';
import {CoreState, CoreAction} from './coreInterface';

const initialState: CoreState = {
  user: null,
};

const coreReducer: Reducer<CoreState, CoreAction> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case CONST.LOAD_CURRENT_USER_SUCCESS:
      return {
        ...state,
        user: action.payload || null,
      };
    default:
      return state;
  }
};

export default coreReducer;

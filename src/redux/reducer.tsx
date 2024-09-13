import {combineReducers} from 'redux';
import auth from './auth/reducer';
import core from './core/reducer';
import home from './home/reducer';
import hchat from './healthchat/reducer';

const rootReducer = combineReducers({
  auth,
  core,
  home,
  hchat,
});

export default rootReducer;

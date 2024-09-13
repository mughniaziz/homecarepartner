import {AuthState} from './auth/authInterface';
import {CoreState} from './core/coreInterface';
import {HchatState} from './healthchat/hchatInterface';
import {HomeState} from './home/homeInterface';

export interface RootState {
  auth: AuthState;
  core: CoreState;
  home: HomeState;
  hchat: HchatState;
}

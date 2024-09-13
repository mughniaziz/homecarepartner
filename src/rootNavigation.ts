import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import { User } from '@utils/globalInterface';

export type RootStackParamList = {
  splash: undefined;
  login: undefined;
  home: undefined;
  main: undefined;
  activity: {initial?: string};
  profile: undefined;
  chat: {user?: User, id: number, isClose?: boolean, endChat?: string}
  "Health Chat": undefined;
  "Home Care": undefined;
}

export type RootProps<RouteName extends keyof RootStackParamList> = {
  navigation: StackNavigationProp<RootStackParamList, RouteName>;
  route: RouteProp<RootStackParamList, RouteName>;
}

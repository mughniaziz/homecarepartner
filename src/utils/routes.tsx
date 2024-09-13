import React from 'react';
import {RootProps, RootStackParamList} from 'rootNavigation';
import Main from '@screens/index';
import Splash from '@screens/splash';
import Login from '@screens/login';
import Home from '@screens/home';
import Activity from '@screens/activity';
import Profile from '@screens/profile';
import Chat from '@screens/chat';
import HChatTab from '@screens/activity/tab/hchatTab';
import HCareTab from '@screens/activity/tab/hcareTab';
import RenderIcons from '@components/render-bottom-icon';
import IcHomeOn from '@icons/bottom_menu/ic_home_on.svg';
import IcHomeOff from '@icons/bottom_menu/ic_home_off.svg';
import IcActivityOn from '@icons/bottom_menu/ic_activity_on.svg';
import IcActivityOff from '@icons/bottom_menu/ic_activity_off.svg';
import IcProfileOn from '@icons/bottom_menu/ic_profile_on.svg';
import IcProfileOff from '@icons/bottom_menu/ic_profile_off.svg';
import RenderLabel from '@components/render-top-label';

interface RouteConfig {
  key: string;
  name: keyof RootStackParamList;
  component: React.ComponentType<any>;
  options?: object;
}

export const routes: RouteConfig[] = [
  {key: 'splash', name: 'splash', component: Splash},
  {key: 'login', name: 'login', component: Login},
  {key: 'main', name: 'main', component: Main},
  {key: 'chat', name: 'chat', component: Chat},
];

export const activityTab: RouteConfig[] = [
  {
    key: 'Health Chat',
    name: 'Health Chat',
    component: HChatTab,
    options: {
      tabBarLabel: ({focused}: {focused: boolean}) =>
        RenderLabel({
          focused,
          title: 'Health Chat',
        }),
    },
  },
  {
    key: 'Home Care',
    name: 'Home Care',
    component: HCareTab,
    options: {
      tabBarLabel: ({focused}: {focused: boolean}) =>
        RenderLabel({
          focused,
          title: 'Home Care',
        }),
    },
  },
];

export const bottomNavigation: RouteConfig[] = [
  {
    key: 'home',
    name: 'home',
    component: Home,
    options: {
      tabBarIcon: ({focused}: {focused: boolean}) =>
        RenderIcons({
          focused,
          iconOff: <IcHomeOff />,
          iconOn: <IcHomeOn />,
          label: 'Home',
        }),
    },
  },
  {
    key: 'activity',
    name: 'activity',
    component: Activity,
    options: {
      tabBarIcon: ({focused}: {focused: boolean}) =>
        RenderIcons({
          focused,
          iconOff: <IcActivityOff />,
          iconOn: <IcActivityOn />,
          label: 'Activity',
        }),
    },
  },
  {
    key: 'profile',
    name: 'profile',
    component: Profile,
    options: {
      tabBarIcon: ({focused}: {focused: boolean}) =>
        RenderIcons({
          focused,
          iconOff: <IcProfileOff />,
          iconOn: <IcProfileOn />,
          label: 'Profile',
        }),
    },
  },
];

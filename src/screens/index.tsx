import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTheme} from '@react-navigation/native';
import Home from '@screens/home';
// import Activity from '@screens/activity';
// import Profile from '@screens/profile';
import IcHomeOn from '@icons/bottom_menu/ic_home_on.svg';
import IcHomeOff from '@icons/bottom_menu/ic_home_off.svg';
import IcActivityOn from '@icons/bottom_menu/ic_activity_on.svg';
import IcActivityOff from '@icons/bottom_menu/ic_activity_off.svg';
import IcProfileOn from '@icons/bottom_menu/ic_profile_on.svg';
import IcProfileOff from '@icons/bottom_menu/ic_profile_off.svg';
import useStyles from './styles';
import {Theme} from 'theme';
import {RootProps, RootStackParamList} from 'rootNavigation';
import {bottomNavigation} from '@utils/routes';

const Tab = createBottomTabNavigator();

function MainScreen({navigation}: RootProps<'main'>) {
  const {colors} = useTheme() as Theme;
  const styles = useStyles(colors);

  const renderTabBar = () => {
    return <View style={styles.tabBarBg} />;
  };

  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarBackground: () => renderTabBar(),
        tabBarStyle: styles.tabBarStyle,
      }}>
      {bottomNavigation.map(route => (
        <Tab.Screen
          name={route.name}
          key={route.key}
          component={route.component}
          options={route.options}
        />
      ))}
    </Tab.Navigator>
  );
}

export default MainScreen;

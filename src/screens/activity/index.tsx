import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Header from '@components/header';
import {RootProps} from 'rootNavigation';
import {Theme} from 'theme';
import useStyles from './styles';
import {activityTab} from '@utils/routes';

const Tab = createMaterialTopTabNavigator();

function ActivityScreen({navigation, route}: RootProps<'activity'>) {
  const {initial} = route.params ?? {};
  const {colors} = useTheme() as Theme;
  const styles = useStyles(colors);

  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      navigation.setParams({initial: undefined});
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Header title="Activity" fromBottom />
      <Tab.Navigator
        initialRouteName={
          activityTab.some(route => route.name === initial)
            ? initial
            : 'Health Chat'
        }
        screenOptions={({}) => ({
          tabBarStyle: styles.tabBarStyle,
          tabBarIndicatorStyle: {
            backgroundColor: 'transparent',
          },
          tabBarPressColor: 'transparent',
        })}>
        {activityTab.map(routing => (
          <Tab.Screen
            key={routing.key}
            name={routing.name}
            component={routing.component}
            options={routing.options}
          />
        ))}
      </Tab.Navigator>
    </View>
  );
}

export default ActivityScreen;

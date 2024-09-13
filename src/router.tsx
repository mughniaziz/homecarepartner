import React from 'react';
import {useColorScheme, StatusBar} from 'react-native';
import {NavigationContainer, useTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {routes} from '@utils/routes';
import {themes} from '@utils/theme';
import {Theme} from 'theme';

const Stack = createNativeStackNavigator();

function Router() {
  const schema = useColorScheme();
  const {colors} = useTheme() as Theme;
  return (
    <SafeAreaProvider>
      <StatusBar
        backgroundColor={schema === 'dark' ? '#1B1C22' : '#FFFFFF'}
        barStyle={schema === 'dark' ? 'light-content' : 'dark-content'}
      />
      <NavigationContainer
        theme={
          schema === 'dark' ? (themes.dark as Theme) : (themes.default as Theme)
        }>
        <Stack.Navigator
          initialRouteName="splash"
          screenOptions={{
            headerShown: false,
          }}>
          {routes.map(route => (
            <Stack.Screen
              key={route.key}
              name={route.name}
              component={route.component}
            />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default Router;

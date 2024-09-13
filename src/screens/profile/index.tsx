import React from 'react';
import {View, Text} from 'react-native';
import {RootProps} from 'rootNavigation';

function ProfileScreen({navigation}: RootProps<'profile'>) {
  return (
    <View>
      <Text>HOME SCREEN</Text>
    </View>
  );
}

export default ProfileScreen;

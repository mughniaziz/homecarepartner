import React, {memo, useEffect} from 'react';
import {View, Text} from 'react-native';
import {RootProps} from 'rootNavigation';

function HCareTab({}: RootProps<'Home Care'>) {

  return (
    <View>
      <Text>Home Care Tab</Text>
    </View>
  );
}

export default memo(HCareTab);

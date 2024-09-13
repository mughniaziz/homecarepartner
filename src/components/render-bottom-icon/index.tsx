import React from 'react';
import {View, Text} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {Theme} from 'theme';
import useStyles from './styles';

interface RenderIconProps {
  iconOn: React.ReactNode;
  iconOff: React.ReactNode;
  label: string;
  focused: boolean;
}

function RenderIcons({focused, iconOff, iconOn, label}: RenderIconProps) {
  const {colors} = useTheme() as Theme;
  const styles = useStyles(colors);
  return (
    <View style={styles.tabBarIcon}>
      {focused ? iconOn : iconOff}
      <Text style={focused ? styles.labelFocused : styles.labelUnfocused}>
        {label}
      </Text>
    </View>
  );
}

export default RenderIcons;

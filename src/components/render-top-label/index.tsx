import React from 'react';
import {View, Text} from 'react-native';
import {useTheme} from '@react-navigation/native';
import useStyles from './styles';
import {Theme} from 'theme';

interface RenderLabelProps {
  focused: boolean;
  title: string;
}

function RenderLabel({focused, title}: RenderLabelProps) {
  const {colors} = useTheme() as Theme;
  const styles = useStyles(colors);

  return (
    <View style={focused ? styles.tabActive : styles.tabInactive}>
      <Text style={focused ? styles.textActive : styles.textInactive}>
        {title}
      </Text>
    </View>
  );
}

export default RenderLabel;

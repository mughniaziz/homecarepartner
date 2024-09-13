import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import IcBack from '@icons/ic_back.svg';
import {useStyles} from './styles';

interface ActionHeaderItem {
  icon?: React.ReactNode;
  onPress?: TouchableOpacityProps['onPress'];
}

interface HeaderProps {
  title: string;
  backPress?: TouchableOpacityProps['onPress'];
  actions?: ActionHeaderItem[];
  fromBottom?: boolean;
  customIcon?: React.ReactNode;
}

function Header({title, backPress, actions, fromBottom = false, customIcon}: HeaderProps) {
  const {colors} = useTheme();
  const styles = useStyles(colors);

  return (
    <View style={styles.container}>
      <View style={styles.navSection}>
        {!fromBottom && (
          <TouchableOpacity onPress={backPress}>
            <View style={styles.btnBack}>
              {customIcon ? customIcon : <IcBack />}
            </View>
          </TouchableOpacity>
        )}
        <Text style={styles.navTitle}>{title}</Text>
      </View>
      <View style={styles.navSection}>
        {actions?.map((item, index) => (
          <TouchableOpacity onPress={item.onPress} key={index}>
            <View style={actions.length > 1 && styles.btnBack}>
              {item.icon}
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

export default Header;

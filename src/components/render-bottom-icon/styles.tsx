import {StyleSheet} from 'react-native';
import {ThemeColors} from 'theme';

const useStyles = (color: ThemeColors) =>
  StyleSheet.create({
    tabBarIcon: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    tabBarStyle: {
      height: 65,
      paddingTop: 8,
    },
    labelFocused: {
      fontFamily: 'HelveticaNeueMedium',
      fontSize: 12,
      lineHeight: 14.4,
      letterSpacing: 0.5,
      color: color.text,
      marginTop: 8,
    },
    labelUnfocused: {
      fontFamily: 'HelveticaNeueRoman',
      fontSize: 12,
      lineHeight: 14.4,
      letterSpacing: 0.5,
      color: color.tertiaryDarker60,
      marginTop: 8,
    },
  });

export default useStyles;

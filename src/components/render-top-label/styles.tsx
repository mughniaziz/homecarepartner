import {StyleSheet} from 'react-native';
import {ThemeColors} from 'theme';

const useStyles = (color: ThemeColors) =>
  StyleSheet.create({
    tabActive: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 200,
      height: 50,
      borderRadius: 12,
      backgroundColor: color.primary,
    },
    tabInactive: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 200,
      height: 50,
      borderRadius: 12,
      backgroundColor: color.tertiary,
    },
    textActive: {
      fontFamily: 'HelveticaNeueMedium',
      fontSize: 14,
      lineHeight: 16.8,
      letterSpacing: 0.5,
      color: color.netralWhite,
    },
    textInactive: {
      fontFamily: 'HelveticaNeueRoman',
      fontSize: 14,
      lineHeight: 19.2,
      letterSpacing: 0.5,
      color: color.tertiaryDarker60,
    },
  });

export default useStyles;

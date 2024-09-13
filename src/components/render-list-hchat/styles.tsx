import {StyleSheet} from 'react-native';
import {ThemeColors} from 'theme';

const useStyles = (color: ThemeColors) =>
  StyleSheet.create({
    listItemWrapper: {
      borderWidth: 1,
      borderColor: color.tertiary,
      borderRadius: 12,
      marginBottom: 16,
    },
    listItemWrap: {
      padding: 12,
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
    },
    statusWrap: {
      padding: 12,
      justifyContent: 'center',
    },
    itemWrapper: {
      flex: 1,
      marginHorizontal: 10,
    },
    itemAva: {
      height: 48,
      width: 48,
      borderRadius: 12,
      resizeMode: 'contain',
    },
    itemLine: {
      height: 1,
      backgroundColor: color.tertiary,
    },
    textSmall: {
      fontFamily: 'HelveticaNeueRoman',
      fontSize: 12,
      lineHeight: 14.4,
      letterSpacing: 0.6,
      color: color.tertiaryDarker60,
    },
    textMedium: {
      fontFamily: 'HelveticaNeueMedium',
      fontSize: 14,
      lineHeight: 16.8,
      letterSpacing: 0.6,
      color: color.text,
    },
    mabot6: {
      marginBottom: 6,
    },
    mabot8: {
      marginBottom: 8,
    },
  });

export default useStyles;

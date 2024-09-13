import {StyleSheet} from 'react-native';
import {ThemeColors} from 'theme';

const useStyles = (color: ThemeColors) =>
  StyleSheet.create({
    ballonChat: {
      marginVertical: 8,
      backgroundColor: 'red',
      padding: 12,
    },
    ballonDoctor: {
      backgroundColor: color.primary,
      alignSelf: 'flex-end',
      borderTopLeftRadius: 12,
      borderTopRightRadius: 12,
      borderBottomLeftRadius: 12,
      paddingHorizontal: 12,
      paddingVertical: 8,
    },
    ballonUser: {
      backgroundColor: color.tertiary,
      alignSelf: 'flex-start',
      borderTopLeftRadius: 12,
      borderTopRightRadius: 12,
      borderBottomRightRadius: 12,
      paddingHorizontal: 12,
      paddingVertical: 8,
    },
    convDoctor: {
      fontFamily: 'HelveticaNeueRoman',
      fontSize: 14,
      lineHeight: 19.2,
      letterSpacing: 0.6,
      color: color.netralWhite,
      // textAlign: 'right',
    },
    convUser: {
      fontFamily: 'HelveticaNeueRoman',
      fontSize: 14,
      lineHeight: 19.2,
      letterSpacing: 0.6,
      color: color.text,
      textAlign: 'left',
    },
    timeStampDoctor: {
      fontFamily: 'HelveticaNeueRoman',
      fontSize: 14,
      lineHeight: 19.2,
      letterSpacing: 0.6,
      color: color.tertiaryDarker50,
      textAlign: 'right',
    },
    timeStampUser: {
      fontFamily: 'HelveticaNeueRoman',
      fontSize: 14,
      lineHeight: 19.2,
      letterSpacing: 0.6,
      color: color.tertiaryDarker50,
      textAlign: 'left',
    },
    imageChat: {
      height: 120,
      width: 120,
      resizeMode: 'contain',
      // marginBottom: 12,
    },
    imageChatDoctor: {
      height: 120,
      width: 120,
      resizeMode: 'contain',
      // marginBottom: 12,
      alignSelf: 'flex-end',
    },
    mt12: {
      marginBottom: 12,
    },
  });

export default useStyles;

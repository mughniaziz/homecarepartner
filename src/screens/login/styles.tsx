import {StyleSheet} from 'react-native';
import {ThemeColors} from 'theme';

const useStyles = (color: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    textTitle: {
      fontFamily: 'HelveticaNeueMedium',
      fontSize: 24,
      lineHeight: 32,
      letterSpacing: 1,
      color: color.text,
    },
    formWrapper: {
      marginTop: 32,
    },
    errorMessage: {
      fontFamily: 'HelveticaNeueRoman',
      fontSize: 12,
      lineHeight: 14.4,
      letterSpacing: 0.5,
      color: color.danger,
      marginTop: 8,
    },
    formInput: {
      marginTop: 20,
    },
    forgotWrapper: {
      marginTop: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    forgotText: {
      fontFamily: 'HelveticaNeueMedium',
      fontSize: 14,
      lineHeight: 16.8,
      letterSpacing: 0.5,
      textAlign: 'center',
      color: color.tertiaryDarker60,
    },
    btnSignin: {
      marginTop: 32,
      backgroundColor: color.primary,
      borderRadius: 12,
      padding: 16,
    },
    btnText: {
      fontFamily: 'HelveticaNeueMedium',
      fontSize: 16,
      lineHeight: 19.2,
      letterSpacing: 0.5,
      textAlign: 'center',
      color: color.netralWhite,
    },
    focused: {
      borderColor: color.primary,
    },
    error: {
      borderColor: color.danger,
    },
  });

export default useStyles;

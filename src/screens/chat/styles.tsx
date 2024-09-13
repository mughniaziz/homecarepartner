import {StyleSheet} from 'react-native';
import {ThemeColors} from 'theme';

const useStyles = (color: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      padding: 20,
      borderBottomWidth: 1,
      borderBottomColor: color.tertiary,
      flexDirection: 'row',
      alignItems: 'center',
    },
    headAva: {
      height: 48,
      width: 48,
      borderRadius: 12,
      resizeMode: 'contain',
      marginHorizontal: 10,
    },
    containerList: {
      flexGrow: 1,
      justifyContent: 'flex-end',
      padding: 20,
    },
    inputTextWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 12,
    },
    inputTextWrap: {
      flex: 1,
      borderWidth: 1,
      borderColor: color.tertiary,
      borderRadius: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 12,
    },
    inputText: {
      flex: 1,
      paddingVertical: 10,
      paddingHorizontal: 10,
      fontFamily: 'HelveticaNeueRoman',
      fontSize: 14,
      lineHeight: 19.6,
      letterSpacing: 0.5,
      color: color.text,
    },
    headName: {
      fontFamily: 'HelveticaNeueBold',
      fontSize: 18,
      lineHeight: 19.6,
      letterSpacing: 0.6,
      color: color.text,
    },
    headDesc: {
      fontFamily: 'HelveticaNeueRoman',
      fontSize: 14,
      lineHeight: 19.6,
      letterSpacing: 0.5,
      color: color.tertiaryDarker60,
    },
    btnEndWrap: {
      padding: 12,
    },
    btnEnd: {
      padding: 12,
      backgroundColor: color.primary,
      borderRadius: 12,
      alignItems: 'center',
      justifyContent: 'center',
    },
    btnEndText: {
      fontFamily: 'HelveticaNeueMedium',
      fontSize: 16,
      lineHeight: 18.6,
      letterSpacing: 0.6,
      color: color.netralWhite,
    },
    imgMiniPreview: {
      height: 40,
      width: 40,
      resizeMode: 'contain',
      borderWidth: 2,
      borderColor: '#FFFFFF035',
    },
    imgMiniWrapper: {
      paddingHorizontal: 12,
    },
    closedNotificationWrapper: {
      padding: 12,
    },
    closedNotificationWrap: {
      padding: 12,
      backgroundColor: color.tertiaryDarker60,
      borderRadius: 12,
    },
    closedNotificationText: {
      fontFamily: 'HelveticaNeueMedium',
      fontSize: 14,
      lineHeight: 18.6,
      letterSpacing: 0.6,
      color: color.netralWhite,
    },
  });

export default useStyles;

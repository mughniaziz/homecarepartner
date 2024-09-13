import {StyleSheet, Dimensions} from 'react-native';
import {ThemeColors} from 'theme';

const {width} = Dimensions.get('screen');

const useStyles = (color: ThemeColors) =>
  StyleSheet.create({
    listItemWrapper: {
      marginTop: 12,
      width: width / 1.1,
      marginRight: 24,
      borderWidth: 1,
      borderColor: color.tertiary,
      borderRadius: 12,
    },
    listItemWrap: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 12,
    },
    listItem: {
      flex: 1,
      marginHorizontal: 12,
    },
    listImgAva: {
      height: 48,
      width: 48,
      borderRadius: 12,
      resizeMode: 'contain',
    },
    itemLine: {
      height: 1,
      backgroundColor: color.tertiary,
      marginTop: 12,
    },
    itemPad12: {
      padding: 12,
    },
    nameText: {
      fontFamily: 'HelveticaNeueMedium',
      fontSize: 14,
      lineHeight: 15.6,
      letterSpacing: 0.6,
      color: color.text,
    },
    genderText: {
      fontFamily: 'HelveticaNeueRoman',
      fontSize: 12,
      lineHeight: 14.4,
      marginTop: 5,
      letterSpacing: 0.6,
      color: color.tertiaryDarker60,
    },
    topicText: {
      fontFamily: 'HelveticaNeueRoman',
      fontSize: 12,
      lineHeight: 14.4,
      letterSpacing: 0.6,
      color: color.tertiaryDarker60,
      marginTop: 4,
    },
    statusText: {
      fontFamily: 'HelveticaNeueRoman',
      fontSize: 12,
      letterSpacing: 0.6,
      color: color.tertiaryDarker60,
    },
  });

export default useStyles;

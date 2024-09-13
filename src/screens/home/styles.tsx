import {StyleSheet, Dimensions} from 'react-native';
import {ThemeColors} from 'theme';

const {width} = Dimensions.get('screen');

const useStyles = (color: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    head: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    imgAva: {
      height: 48,
      width: 48,
      borderRadius: 12,
      resizeMode: 'contain',
    },
    header: {
      flex: 1,
      marginHorizontal: 10,
    },
    nameText: {
      fontFamily: 'HelveticaNeueMedium',
      fontSize: 16,
      lineHeight: 18.2,
      letterSpacing: 0.6,
      color: color.text,
    },
    btnCategory: {
      borderWidth: 1,
      borderColor: color.tertiary,
      borderRadius: 12,
      padding: 12,
      height: 80,
      width: width / 2.25,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    catWrap: {
      marginTop: 24,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    catNameText: {
      fontFamily: 'HelveticaNeueRegular',
      fontSize: 14,
      lineHeight: 19.6,
      letterSpacing: 0.6,
      color: color.text,
      marginBottom: 6,
    },
    catCountText: {
      fontFamily: 'HelveticaNeueMedium',
      fontSize: 14,
      lineHeight: 16.8,
      letterSpacing: 0.6,
      color: color.text,
    },
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
      resizeMode: 'contain'
    },
    itemLine: {
      height: 1,
      backgroundColor: color.tertiary,
      marginTop: 12
    },
    itemPad12: {
      padding: 12
    },
  });

export default useStyles;

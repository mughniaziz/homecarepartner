import {StyleSheet} from 'react-native';
import {ThemeColors} from 'theme';

const useStyles = (color: ThemeColors) =>
  StyleSheet.create({
    body: {
      marginTop: 20,
    },
    listItemWrapper: {
      borderWidth: 1,
      borderColor: color.tertiary,
      borderRadius: 12,
      marginBottom: 16,
    },
    listItemWrap: {
      padding: 12,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
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
  });

export default useStyles;

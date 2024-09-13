import {StyleSheet} from 'react-native';
import {ThemeColors} from 'theme';

const useStyles = (color: ThemeColors) => StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgLogo: {
    height: 100,
    width: 100,
  },
  logoWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  textLogo: {
    fontFamily: 'HelveticaNeueBold',
    fontSize: 60,
    // lineHeight: 24,
    letterSpacing: 1,
    color: color.text,
  },
  textContainer: {
    flexDirection: 'row',
    marginLeft: 10,
  },
});

export default useStyles;

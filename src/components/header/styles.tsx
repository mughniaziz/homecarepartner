import {StyleSheet} from 'react-native';

export const useStyles = (color: any) => StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  navSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnBack: {
    marginRight: 12,
  },
  navTitle: {
    fontFamily: 'HelveticaNeueMedium',
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: 0.5,
    color: color.text,
  },
});

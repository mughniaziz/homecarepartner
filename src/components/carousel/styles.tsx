import {StyleSheet} from 'react-native';

export const useStyles = (color: any) => StyleSheet.create({
  container: {
    marginTop: 24,
  },
  navigationActive: {
    height: 6,
    width: 16,
    backgroundColor: color.primary,
    borderRadius: 5,
    marginTop: 10,
    marginHorizontal: 3,
  },
  navigationInactive: {
    height: 6,
    width: 16,
    backgroundColor: color.tertiaryLighter60,
    borderRadius: 5,
    marginTop: 10,
    marginHorizontal: 3,
  },
  navigator: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  banner: {
    width: '100%',
    height: 200,
    resizeMode: 'stretch',
  },
});
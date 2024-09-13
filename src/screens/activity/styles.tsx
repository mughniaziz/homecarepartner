import {StyleSheet} from 'react-native';
import {ThemeColors} from 'theme';

const useStyles = (color: ThemeColors) => StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  tabBarStyle: {
    backgroundColor: 'transparent',
    elevation: 0,
    borderRadius: 12,
    marginTop: 24,
  },
});

export default useStyles;

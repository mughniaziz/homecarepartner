import {StyleSheet} from 'react-native';

export const useStyles = (color: any) => StyleSheet.create({
  wrapper: {
    marginBottom: 20,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 2,
    borderColor: color.tertiary,
    backgroundColor: color.card,
    borderRadius: 12,
    borderWidth: 1,
    marginTop: 8,
  },
  inputText: {
    flex: 1,
    fontFamily: 'HelveticaNeueRoman',
    fontSize: 14,
    lineHeight: 19.6,
    letterSpacing: 0.5,
    color: color.text,
    marginHorizontal: 10,
  },
  labelText: {
    fontFamily: 'HelveticaNeueMedium',
    fontSize: 14,
    lineHeight: 16.8,
    letterSpacing: 0.5,
    color: color.tertiaryDarker60,
  },
  descText: {
    fontFamily: 'HelveticaNeueMedium',
    letterSpacing: 0.5,
    color: color.tertiaryDarker20,
  },
});

// @ts-nocheck
import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TextInputProps,
  StyleProp,
  ViewProps,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {useStyles} from './styles';

interface FormInputProps extends TextInputProps {
  label?: string;
  desc?: string;
  hasSuffix?: boolean;
  hasPrefix?: boolean;
  icSuffix?: React.ReactNode;
  icPrefix?: React.ReactNode;
  secured?: boolean;
  onPress?: () => void;
  formStyles?: StyleProp<ViewStyle>;
  inputStyles?: StyleProp<TextStyle>;
  inputTextCustom?: StyleProp<TextStyle>;
}

function FormInput({
  label,
  desc,
  hasSuffix,
  hasPrefix,
  icSuffix,
  icPrefix,
  secured = false,
  onPress,
  formStyles = {},
  inputStyles = {},
  inputTextCustom = {},
  ...textInputProps
}: FormInputProps) {
  const {colors} = useTheme();
  const styles = useStyles(colors);
  return (
    <View style={formStyles}>
      <Text style={styles.labelText}>
        {label}{' '}
        <Text style={styles.descText}>{desc}</Text>
      </Text>
      <View style={[styles.inputWrapper, inputStyles]}>
        {hasPrefix && icPrefix}
        <TextInput
          style={[styles.inputText, inputTextCustom]}
          placeholderTextColor={colors.tertiaryDarker20}
          secureTextEntry={secured}
          {...textInputProps}
        />
        {hasSuffix && (
          <TouchableOpacity onPress={onPress}>{icSuffix}</TouchableOpacity>
        )}
      </View>
    </View>
  );
}

export default FormInput;

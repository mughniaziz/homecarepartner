import React, {useEffect, useState} from 'react';
import {View, Text, ActivityIndicator, TouchableOpacity} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {Formik} from 'formik';
import * as yup from 'yup';
import {loginAction, resetDefault} from '@redux/auth/actions';
import FormInput from '@components/form-input';
import {RootProps} from 'rootNavigation';
import {AuthDispatch} from '@redux/auth/authInterface';
import {RootState} from '@redux/rootInterface';
import {Theme} from 'theme';
import IcEmail from '@icons/ic_email.svg';
import IcPassword from '@icons/ic_password.svg';
import IcShowPass from '@icons/ic_showpass.svg';
import IcHidePass from '@icons/ic_hidepass.svg';
import useStyles from './styles';
import Snackbar from 'react-native-snackbar';

const loginSchema = yup.object({
  email: yup.string().email('format not valid').required('Email is required'),
  password: yup
    .string()
    .min(8, 'minumum 8 character')
    .max(20, 'maximim 20 character')
    .matches(
      /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[0-9]).{8,}$/,
      'password at least have one uppercase, number and special character',
    )
    .required('Password is required'),
});

function LoginScreen({navigation}: RootProps<'login'>) {
  const dispatch = useDispatch<AuthDispatch>();
  const {message, loading} = useSelector((state: RootState) => state.auth);
  const {colors} = useTheme() as Theme;
  const styles = useStyles(colors);
  const [secure, setSecure] = useState(true);

  useEffect(() => {
    if (message === 'success_login') {
      Snackbar.show({
        text: 'LOGIN SUCCESS',
        backgroundColor: colors.success,
        duration: Snackbar.LENGTH_LONG,
      });
      dispatch(resetDefault());
      navigation.reset({index: 0, routes: [{name: 'main'}]});
    } else if (`${message}`.includes('Email')) {
      Snackbar.show({
        text: `${message}`,
        backgroundColor: colors.danger,
        duration: Snackbar.LENGTH_LONG,
      });
      dispatch(resetDefault());
    } else {
      dispatch(resetDefault());
    }
  }, [message, dispatch]);

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Sign In</Text>
      <Formik
        validationSchema={loginSchema}
        validateOnChange={true}
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={values => {
          dispatch(loginAction(values));
          // navigation.reset({index: 0, routes: [{name: 'main'}]});
        }}>
        {({
          handleChange,
          handleSubmit,
          handleBlur,
          values,
          errors,
          touched,
        }) => (
          <View style={styles.formWrapper}>
            <FormInput
              label="Email Address"
              placeholder="example@mail.com"
              hasPrefix
              icPrefix={<IcEmail />}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              inputStyles={errors.email && touched.email ? styles.error : null}
            />
            {errors.email && touched.email ? (
              <Text style={styles.errorMessage}>{errors.email}</Text>
            ) : null}
            <FormInput
              label="Password"
              placeholder="Password"
              hasPrefix
              icPrefix={<IcPassword />}
              hasSuffix
              icSuffix={secure ? <IcShowPass /> : <IcHidePass />}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secured={secure}
              onPress={() => setSecure(!secure)}
              formStyles={styles.formInput}
              inputStyles={
                errors.password && touched.password ? styles.error : null
              }
            />
            {errors.password && touched.password ? (
              <Text style={styles.errorMessage}>{errors.password}</Text>
            ) : null}
            <View style={styles.forgotWrapper}>
              <TouchableOpacity>
                <Text style={styles.forgotText}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => handleSubmit()} disabled={loading}>
              <View
                style={[
                  styles.btnSignin,
                  loading && {backgroundColor: colors.primaryLighter60},
                ]}>
                {loading ? (
                  <ActivityIndicator color={colors.primary} />
                ) : (
                  <Text style={styles.btnText}>Sign In</Text>
                )}
              </View>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
}

export default LoginScreen;

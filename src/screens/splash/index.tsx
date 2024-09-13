import React, {useEffect, useRef} from 'react';
import {Text, View, Image, Animated} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {AuthDispatch} from '@redux/auth/authInterface';
import {loadCurrentUser} from '@redux/auth/actions';
import LogoApp from '@icons/logo_welcome.svg';
import ImgLogo from '@images/img-logo-splash.png';
import {getAccessToken} from '@helpers/storage';
import {Theme} from 'theme';
import {RootProps} from 'rootNavigation';
import useStyles from './styles';
import { RootState } from '@redux/rootInterface';

function SplashScreen({navigation}: RootProps<'splash'>) {
  const {colors} = useTheme() as Theme;
  const styles = useStyles(colors);
  const dispatch = useDispatch<AuthDispatch>();
  const {loading} = useSelector((state: RootState) => state.auth);

  const textPosition = useRef(new Animated.Value(-100)).current; // Start off-screen
  const opacityValues = useRef(
    [...Array('Digicare'.length)].map(() => new Animated.Value(0)),
  ).current;
  const imagePosition = useRef(new Animated.Value(100)).current;

  useEffect(() => {
    const letterAnimations = opacityValues.map(opacity =>
      Animated.loop(
        Animated.sequence([
          Animated.timing(opacity, {
            toValue: 1,
            duration: 250,
            useNativeDriver: true,
          }),
          Animated.timing(opacity, {
            toValue: 0,
            duration: 250,
            useNativeDriver: true,
          }),
          Animated.timing(opacity, {
            toValue: 1,
            duration: 250,
            useNativeDriver: true,
          }),
        ]),
        {iterations: 3},
      ),
    );
    Animated.sequence([
      Animated.timing(imagePosition, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(textPosition, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.stagger(100, letterAnimations),
    ]).start(async () => {
      const token = await getAccessToken();
      dispatch(loadCurrentUser());
      if (token && !loading) {
        navigation.reset({index: 0, routes: [{name: 'main'}]});
      } else {
        navigation.navigate('login');
      }
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.logoWrapper}>
        <Animated.Image
          source={ImgLogo}
          style={[styles.imgLogo, {transform: [{translateX: imagePosition}]}]}
        />
        <View style={styles.textContainer}>
          {'Digicare'.split('').map((letter, index) => (
            <Animated.Text
              key={index}
              style={[styles.textLogo, {opacity: opacityValues[index]}]}>
              {letter}
            </Animated.Text>
          ))}
        </View>
      </View>
      {/* <LogoApp height={100} width={'80%'} /> */}
    </View>
  );
}

export default SplashScreen;

import AsyncStorage from '@react-native-async-storage/async-storage';

export const setAccessToken = async (token: string) => {
  await AsyncStorage.setItem('token', token);
};

export const setRefreshToken = async (refresh: string) => {
  await AsyncStorage.setItem('refreshToken', refresh);
};

export const getAccessToken = async () => {
  return await AsyncStorage.getItem('token');
};

export const getRefreshToken = async () => {
  return await AsyncStorage.getItem('refreshToken');
};

export const removeAccessToken = async () => {
  return await AsyncStorage.removeItem('token');
}

export const removeRefreshToken = async () => {
  return await AsyncStorage.removeItem('refreshToken');
}
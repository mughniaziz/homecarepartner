import axios, {AxiosError, InternalAxiosRequestConfig, AxiosResponse, AxiosInstance} from 'axios';
import Snackbar from 'react-native-snackbar';
import { BASE_URL } from '@config/endpoint';
import { getAccessToken } from './storage';
import { refreshCurrentToken } from '@redux/auth/saga';

const api: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
});

api.interceptors.request.use(
  async (config: InternalAxiosRequestConfig): Promise<InternalAxiosRequestConfig> => {
    const token = await getAccessToken() || ''; // Ganti dengan fungsi Anda untuk mendapatkan token
    if (token) {
      // Pastikan headers ada dan tambahkan Authorization
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  async (error: AxiosError) => {
    return Promise.reject(error)
  }
);

export default api;
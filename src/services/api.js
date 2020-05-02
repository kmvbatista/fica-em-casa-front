import axios from 'axios';
import { getToken } from './sessionService';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

instance.interceptors.request.use(function (config) {
  const token = getToken();
  if (token) {
    try {
      config.headers.Authorization = token ? `Bearer ${token}` : '';
      return config;
    } catch (error) {
      return config;
    }
  }
  return config;
});

export default instance;

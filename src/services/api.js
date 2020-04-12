import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

instance.interceptors.request.use(function (config) {
  if (document.cookie) {
    try {
      const { token } = JSON.parse(document.cookie);
      config.headers.Authorization = token ? `Bearer ${token}` : '';
      return config;
    } catch (error) {
      return config;
    }
  }
  return config;
});

export default instance;

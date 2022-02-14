import axios, { AxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';

// Define client with base url
const HttpClient = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_API}`,
});

//Add interceptor that will attach authorization header to every request
HttpClient.interceptors.request.use((config: AxiosRequestConfig) => {
  const token = Cookies.get('Authorization');

  config.headers = {
    ...config.headers,
    Authorization: token || '',
  };

  return config;
});

export default HttpClient;

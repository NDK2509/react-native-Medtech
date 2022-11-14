import axios, {AxiosRequestConfig} from 'axios';
import Log from '../utils/Log';

export const defaultAxiosConfig: AxiosRequestConfig = {
  baseURL: 'https://636df78fb567eed48ace8403.mockapi.io/',
};
const http = axios.create(defaultAxiosConfig);
http.interceptors.request.use(
  config => {
    // handle before data is send
    Log.d("axios config", config)
    return config;
  }, 
  Promise.reject
);
http.interceptors.response.use(
  res => {
    // handle after recieving data
    // Log.d("axios", res.data)
    return res.data;
  },
  Promise.reject
);
export default http;

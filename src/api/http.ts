import axios, {AxiosRequestConfig} from 'axios';

const config: AxiosRequestConfig = {
  baseURL: 'https://636df78fb567eed48ace8403.mockapi.io/',
};

export default (
  url: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  data?: any,
) => {
  return axios.request({
    ...config,
    url,
    method,
    data,
  });
};

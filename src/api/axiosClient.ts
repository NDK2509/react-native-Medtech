import axios, {AxiosRequestConfig} from 'axios';

const config: AxiosRequestConfig = {
  baseURL: 'https://636df78fb567eed48ace8403.mockapi.io/',
};

const axiosClient = (
  endpoint: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  data?: any,
) => {
  return axios.request({
    ...config,
    url: endpoint,
    method,
    data,
  });
};
export default axiosClient;


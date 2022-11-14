import http from "./http";

const defaultParams = {}
const axiosClient = {
  get: <T = any>(endpoint: string, params: Object = defaultParams) => {
    return http.get<any, T>(endpoint, {params});
  },
  request: <T = any>(
    endpoint: string,
    method: 'POST' | 'PUT' | 'DELETE',
    data?: any,
  ) => {
    return http.request<any, T>({
      url: endpoint,
      method,
      data,
    });
  },
};
;
export default axiosClient;


import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

const requestHandler = (config: InternalAxiosRequestConfig) => {
  const token = config.headers?.cookies?.token;

  config.headers.Authorization = token?.value ? `Bearer ${token.value}` : '';

  return config;
};

const responseErrorHandler = async (err: AxiosError) => {
  if (err?.response?.status === 401) {
    return;
  }

  return Promise.reject(err.response?.data);
};

api.interceptors.request.use(requestHandler, (err) => Promise.reject(err));
api.interceptors.response.use((res) => res, responseErrorHandler);

export default api;

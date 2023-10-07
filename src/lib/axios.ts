// import type { InternalAxiosRequestConfig } from 'axios';

import Axios from 'axios';

import { API_URL } from '@/config/env-config';

export const axios = Axios.create({
  baseURL: API_URL,
});

// const onRequestSuccess = (config: InternalAxiosRequestConfig) => {
//   config.headers.set('Accept', '*/*');
//   config.headers.set('Content-Type', 'application/json');
//   config.headers.set('Accept-Encoding', 'gzip, deflate, br');
//   config.headers.set('Connection', 'keep-alive');

//   return config;
// };

// // If the error status is 401 and there is no originalRequest._retry flag,
// // it means the token has expired, and we need to refresh it

// axios.interceptors.request.use(onRequestSuccess);
// // axios.interceptors.response.use(
// //   response => response,
// //   async (error: AxiosError) => {
// //     return Promise.reject(error);
// //   },
// // );

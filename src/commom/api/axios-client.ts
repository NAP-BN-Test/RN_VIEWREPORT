import queryString from 'query-string';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';
import {REACT_APP_API_URL} from './apiKey';
import 'react-native-url-polyfill/auto';
import { retriveDataToken } from '../../_helpers/auth-header'
// export var token: any = AsyncStorage.getItem('token');
export var token: any = retriveDataToken();

/*Axios */

const axiosClient = axios.create({
  baseURL: REACT_APP_API_URL,
  headers: {
    'content-type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
  responseType: 'json',
  paramsSerializer: (params: any) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(
  //   (config: AxiosRequestConfig) => {
  async(config: any) => {
    let value: any = (await AsyncStorage.getItem('token')) || '';
    
    // const accessToken: any = value;
    // console.log(accessToken, accessToken);

    // if (accessToken) {
    //   config.headers.Authorization = `Bearer ${accessToken}`;
    // }
    return config;
  },
  function error() {
    return Promise.reject(error);
  },
);

axiosClient.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error: string) => {
    throw error;
  },
);

export default axiosClient;

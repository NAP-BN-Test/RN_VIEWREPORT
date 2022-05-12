import queryString from 'query-string';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';
import {REACT_APP_API_URL} from './apiKey';
import 'react-native-url-polyfill/auto';

/*Get token  */
export const retriveData = async () => {
  let value: string = (await AsyncStorage.getItem('token')) || '';
  console.log('value token', value);

  return value;
  // return JSON.parse(value);
};

// const _retrieveData = async () => {
//   try {
//     const value = await AsyncStorage.getItem('token');
//     if (value !== null) {
//       // We have data!!
//       console.log('value tokken', value);
//     }

//     return value;
//   } catch (error) {
//     // Error retrieving data
//     return undefined;
//   }
// };

// async function getToken() {
//   try {
//     let userData = await AsyncStorage.getItem('token');
//     let data = JSON.parse(userData ?? '');
//     console.log(data);
//     return data;
//   } catch (error) {
//     console.log('Something went wrong', error);
//   }
// }

// export var token: any = AsyncStorage.getItem('token');
export var token: any = retriveData();

/*Axios */

const axiosClient = axios.create({
  baseURL: REACT_APP_API_URL,
  headers: {
    'content-type': 'application/json',
  },
  responseType: 'json',
  paramsSerializer: (params: any) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(
  //   (config: AxiosRequestConfig) => {
  async(config: any) => {
    let value: any = (await AsyncStorage.getItem('token')) || '';
    
    const accessToken: any = value;
    console.log(accessToken, accessToken);

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
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

import {
  LoginType
} from '../../types';
import axiosClientLogin from './axios-login';
import queryString from 'query-string';
const accountAPI = {
  postLogin(data: LoginType): Promise<any> {
    const url = 'auth/login';
    return axiosClientLogin.post(url, queryString.stringify(data));
  },
};
export default accountAPI;

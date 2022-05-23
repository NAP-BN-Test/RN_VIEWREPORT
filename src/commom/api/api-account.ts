import {
  LoginType
} from '../../types';
import axiosClient from './axios-client';
import axiosClientLogin from './axios-login';

const accountAPI = {
  postLogin(data: LoginType): Promise<any> {
    const url = 'auth/login';
    return axiosClientLogin.post(url, data);
  },
};
export default accountAPI;

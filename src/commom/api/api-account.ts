import {
  LoginType
} from '../../types';
import axiosClient from './axios-client';

const accountAPI = {
  postLogin(data: LoginType): Promise<any> {
    const url = 'auth/login';
    return axiosClient.post(url, {username: "admin", password: "123456a$"});
  },
};
export default accountAPI;

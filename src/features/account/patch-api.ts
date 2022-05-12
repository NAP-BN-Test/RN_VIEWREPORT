import {createAsyncThunk} from '@reduxjs/toolkit';
import accountAPI from '../../commom/api/api-account';
import {ChangePassword, LoginType, RegisterType} from '../../types';

export const postLogin = createAsyncThunk(
  '/account/login',
  async (data: LoginType) => {
    const response = await accountAPI.postLogin(data);
    return response;
  },
);

export const postRegister = createAsyncThunk(
  '/account/register',
  async (data: RegisterType) => {
    const response = await accountAPI.postRegister(data);
    return response;
  },
);

export const postLogout = createAsyncThunk('/account/logout', () => {
  return;
});

export const checkToken = createAsyncThunk('/account/checktoken', async () => {
  const response = await accountAPI.postCheckToken();
  console.log('check', response);
  
  return response.result;
});

export const ChangePass = createAsyncThunk(
  '/account/changepassword',
  async (data: ChangePassword) => {
    console.log('data chuyền vào', data);
    
    const response = await accountAPI.postChangePassWord(data);
    console.log('ChangePassword', response);
    
    return response.result;
  },
);

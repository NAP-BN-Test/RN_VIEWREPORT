import {createAsyncThunk} from '@reduxjs/toolkit';
import accountAPI from '../../commom/api/api-account';
import API_REPORT from '../../commom/api/api-report';
import {LoginType} from '../../types';

export const postLogin = createAsyncThunk(
  '/account/login',
  async (data: LoginType, {rejectWithValue}) => {
    console.log('data login', data);
    try {
      const response = await accountAPI.postLogin({
        username: 'admin',
        password: '123456a$',
      });
      return response;
    } catch (err: any) {
      console.log('errrrrrrrrrrrrr', err.response.config.data);

      if (!err.response) {
        throw err;
      }

      return rejectWithValue(err.response);
    }
    const response = await accountAPI.postLogin(data);
    console.log(response);

    return response;
  },
);

export const postLogout = createAsyncThunk('/account/logout', () => {
  return;
});

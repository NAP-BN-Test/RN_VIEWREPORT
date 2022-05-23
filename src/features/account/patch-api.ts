import {createAsyncThunk} from '@reduxjs/toolkit';
import accountAPI from '../../commom/api/api-account';
import API_REPORT from '../../commom/api/api-report';
import {LoginType} from '../../types';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const postLogin = createAsyncThunk(
  '/account/login',
  async (data: LoginType, {rejectWithValue}) => {
    console.log('data login', data);
    // try {
    //   const response = await accountAPI.postLogin(data);
    //   console.log('response login', response);
      
    //   return response;
    // } catch (err: any) {
    //   console.log('errrrrrrrrrrrrr', err.response.config.data);

    //   if (!err.response) {
    //     throw err;
    //   }

    //   return rejectWithValue(err.response);
    // }
    const response = await accountAPI.postLogin(data);
    console.log(response);

    return response;
  },
);

export const postLogout = createAsyncThunk('/account/logout', () => {
  return;
});


export const autologin = createAsyncThunk('/account/autologin',async () => {
  let value: any = (await AsyncStorage.getItem('token')) || '';
    console.log('getdonhang', value);

    const accessToken: any = value;
    const response = await accessToken
    return response;
});

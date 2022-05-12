import {createAsyncThunk} from '@reduxjs/toolkit';
import accountAPI from '../../commom/api/api-account';
import targetAPI from '../../commom/api/api-target';
import {ChangePassword, LoginType, RegisterType} from '../../types';
import {changetarget} from '../../types/target';

export const getTargetByUser = createAsyncThunk(
  'target/gettargetbyuser',
  async () => {
    const response = await targetAPI.getTargetByUser();
    console.log('gettargetbyuser', response);

    return response;
  },
);

export const getTargetCategory = createAsyncThunk(
  'target/getallcategorytarget',
  async () => {
    const response = await targetAPI.getAllCategoryTarget();
    console.log('getallcategorytarget', response);

    return response;
  },
);

export const postChangeTarget = createAsyncThunk(
  'target/changetarget',
  async (data: Array<changetarget>) => {
    console.log('data truyền vào', data);

    const response = await targetAPI.postChangeTarget(data);
    console.log('changetarget', response);

    return response;
  },
);

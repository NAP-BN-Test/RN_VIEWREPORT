import {createAsyncThunk} from '@reduxjs/toolkit';
import API_REPORT from '../../commom/api/api-report';

export const getdonhang = createAsyncThunk(
  '/report/donhang',
  async (data: {id: number}, {rejectWithValue}) => {
    console.log('API_REPORT', data);
    try {
      const response = await API_REPORT.getdonhang(data);

      console.log('response API_REPORT', response);

      return response;
    } catch (err: any) {
      console.log('errrrr API_REPORT', err.response.config.data);

      if (!err.response) {
        throw err;
      }

      return rejectWithValue(err.response);
    }
    // const response = await API_REPORT.getdonhang(data);
    // console.log(response);

    // return response;
  },
);

export const postcongnophaitra = createAsyncThunk(
  '/report/congnophaitra',
  async (
    data: {startdate?: string; todate?: string; idkhachhang?: number},
    {rejectWithValue},
  ) => {
    console.log('postcongnophaitra', data);
    try {
      const response = await API_REPORT.postcongnophaitra(data);

      console.log('response postcongnophaitra', response);

      return response;
    } catch (err: any) {
      console.log('errrrr postcongnophaitra', err.response.config.data);

      if (!err.response) {
        throw err;
      }

      return rejectWithValue(err.response);
    }
    // const response = await reportAPI.postLogin(data);
    // console.log(response);

    // return response;
  },
);

export const postcongnophaithu = createAsyncThunk(
  '/report/congnophaithu',
  async (
    data: {startdate?: string; todate?: string; idkhachhang?: number},
    {rejectWithValue},
  ) => {
    console.log('postcongnophaithu', data);
    try {
      const response = await API_REPORT.postcongnophaithu(data);

      console.log('response postcongnophaithu', response);

      return response;
    } catch (err: any) {
      console.log('errrrr postcongnophaithu', err.response.config.data);

      if (!err.response) {
        throw err;
      }

      return rejectWithValue(err.response);
    }
    // const response = await reportAPI.postLogin(data);
    // console.log(response);

    // return response;
  },
);

export const postdoanhthu = createAsyncThunk(
  '/report/doanhthu',
  async (
    data: {startdate?: string; todate?: string; idkhachhang?: number},
    {rejectWithValue},
  ) => {
    console.log('postdoanhthu', data);
    try {
      const response = await API_REPORT.postdoanhthu(data);

      console.log('response postdoanhthu', response);

      return response;
    } catch (err: any) {
      console.log('errrrr postdoanhthu', err.response.config.data);

      if (!err.response) {
        throw err;
      }

      return rejectWithValue(err.response);
    }
    // const response = await reportAPI.postLogin(data);
    // console.log(response);

    // return response;
  },
);

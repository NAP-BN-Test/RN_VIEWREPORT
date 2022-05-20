import {createAsyncThunk} from '@reduxjs/toolkit';
import accountAPI from '../../commom/api/api-account';
import API_REPORT from '../../commom/api/api-report';
import {LoginType} from '../../types';

export const getcus = createAsyncThunk('/customer/getcus', async () => {
  const response = await API_REPORT.getdanhmuckhachhang();
  console.log(response);

  return response;
});

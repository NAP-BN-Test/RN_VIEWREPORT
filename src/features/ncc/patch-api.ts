import {createAsyncThunk} from '@reduxjs/toolkit';
import accountAPI from '../../commom/api/api-account';
import API_REPORT from '../../commom/api/api-report';
import {LoginType} from '../../types';


export const getnhacungcap = createAsyncThunk('/ncc/getncc', async () => {
  const response = await API_REPORT.getdanhmucnhacungcap();
  console.log(response);

  return response;
});
import {createAsyncThunk} from '@reduxjs/toolkit';
import spendingAPI from '../../commom/api/api-spending';
import {CreateSpending, EditSpending} from '../../types/spendingType';

export const getSpendingByDay = createAsyncThunk(
  '/spending/ByDay',
  async () => {
    const response = await spendingAPI.getSpendingByDay();
    console.log('ByDay', response);

    return response;
  },
);

export const getSpendingByWeek = createAsyncThunk(
  '/spending/ByWeek',
  async () => {
    const response = await spendingAPI.getSpendingByWeek();
    console.log('ByWeek', response);

    return response;
  },
);

export const getSpendingByMonth = createAsyncThunk(
  '/spending/ByMonth',
  async () => {
    const response = await spendingAPI.getSpendingByMonth();
    console.log('ByMonth', response);

    return response;
  },
);

export const getSpendingByDateToDate = createAsyncThunk(
  '/spending/ByDateToDate',
  async (data: {datestart: string; dateend: string}) => {
    console.log('data date and date truyền vào', data);

    const response = await spendingAPI.getSpendingByDateToDate(data);
    console.log('DateToDate', response);

    return response;
  },
);

export const postSpendingByID = createAsyncThunk(
  '/spending/ByID',
  async (data: {id: Number}) => {
    console.log('data truyền vào', data);

    const response = await spendingAPI.postSpendingByID(data);
    console.log('ID', response);

    return response;
  },
);

export const postDeleteSpending = createAsyncThunk(
  '/spending/Delete',
  async (data: {id: Array<number>}) => {
    const response = await spendingAPI.postDeleteSpending(data);
    console.log('delete', response);

    return response;
  },
);

export const postEditSpending = createAsyncThunk(
  '/spending/Edit',
  async (data: EditSpending) => {
    const response = await spendingAPI.postEditSpending(data);
    console.log('Edit', response);

    return response;
  },
);


export const postCreateSpending = createAsyncThunk(
  '/spending/create',
  async (data: Array<CreateSpending>) => {
    const response = await spendingAPI.postCreatSpending(data);
    console.log('create', response);

    return response;
  },
);

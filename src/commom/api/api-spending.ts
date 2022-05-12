import { CreateSpending, EditSpending } from '../../types/spendingType';
import axiosClient from './axios-client';

const spendingAPI = {
  getSpendingByDay(): Promise<any> {
    const url = 'expense/getchitieubyday';
    return axiosClient.get(url);
  },

  getSpendingByWeek(): Promise<any> {
    const url = 'expense/getchitieubyweek';
    return axiosClient.get(url);
  },

  getSpendingByMonth(): Promise<any> {
    const url = 'expense/getchitieubymonth';
    return axiosClient.get(url);
  },

  getSpendingByDateToDate(data: {datestart: string,dateend: string}): Promise<any> {
    const url = 'expense/getchitieubydatetodate';
    return axiosClient.post(url, data);
  },

  getSpendingAll(): Promise<any> {
    const url = 'expense/getallchitieu';
    return axiosClient.get(url);
  },

  postSpendingByID(data: {id: Number}): Promise<any> {
    const url = 'expense/getchitieubyid';
    return axiosClient.post(url, data);
  },

  postDeleteSpending(data: {id: Array<number>}): Promise<any> {
    console.log('data truyền vào', data);
    const url = 'expense/deletechitieu';
    return axiosClient.post(url, data);
  },

  postCreatSpending(data: Array<CreateSpending>): Promise<any> {
    console.log('data truyền vào', data);
    
    const url = 'expense/createchitieu';
    return axiosClient.post(url, data);
  },

  postEditSpending(data: EditSpending): Promise<any> {
    console.log('data truyền vào', data);
    
    const url = 'expense/editchitieu';
    return axiosClient.post(url, data);
  },
};
export default spendingAPI;

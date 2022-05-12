import {
  AccountResponseLogin,
  AccountResponseRegister,
  ChangePassword,
  LoginType,
  RegisterType,
} from '../../types';
import {CreateSpending, EditSpending} from '../../types/spendingType';
import {changetarget} from '../../types/target';
import axiosClient from './axios-client';

const targetAPI = {
  getTargetByUser(): Promise<any> {
    const url = 'target/gettargetbyuser';
    return axiosClient.get(url);
  },

  getAllCategoryTarget(): Promise<any> {
    const url = 'target/getalldmtarget';
    return axiosClient.get(url);
  },

  postChangeTarget(data: Array<changetarget>): Promise<any> {
    const url = 'target/changetarget';
    return axiosClient.post(url, data);
  },
};
export default targetAPI;

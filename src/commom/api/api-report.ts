import {retriveDataToken} from '../../_helpers/auth-header';
import axiosClient from './axios-client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import queryString from 'query-string';
const API_REPORT = {
  async getdonhang(data: {id: number}): Promise<any> {
    console.log('data get don hang api', data);

    let value: any = (await AsyncStorage.getItem('token')) || '';
    const accessToken: any = value;

    const url =
      'donhang?' + 'access_token=' + accessToken + '&id=' + data.id.toString();
    return axiosClient.get(url);
  },

  async getdanhmuckhachhang(): Promise<any> {
    let value: any = (await AsyncStorage.getItem('token')) || '';

    const accessToken: any = value;
    const url = 'danhmuc/khachhang?' + 'access_token=' + accessToken;
    return axiosClient.get(url);
  },

  async getdanhmucnhacungcap(): Promise<any> {
    let value: any = (await AsyncStorage.getItem('token')) || '';

    const accessToken: any = value;
    const url = 'danhmuc/nhacungcap?' + 'access_token=' + accessToken;
    return axiosClient.get(url);
  },

  async postcongnophaitra(data: {
    startdate?: string;
    todate?: string;
    idkhachhang?: number;
  }): Promise<any> {
    let value: any = (await AsyncStorage.getItem('token')) || '';

    const accessToken: any = value;
    const url = 'reports/congnophaitra?access_token=' + accessToken;
    return axiosClient.post(url, queryString.stringify(data));
  },

  async postcongnophaithu(data: {
    startdate?: string;
    todate?: string;
    idkhachhang?: number;
  }): Promise<any> {
    let value: any = (await AsyncStorage.getItem('token')) || '';

    const accessToken: any = value;
    const url = 'reports/congnophaithu?access_token=' + accessToken;
    return axiosClient.post(url, queryString.stringify(data));
  },

  async postdoanhthu(data: {
    startdate?: string;
    todate?: string;
    idkhachhang?: number;
  }): Promise<any> {
    let value: any = (await AsyncStorage.getItem('token')) || '';
    const accessToken: any = value;
    const url = 'reports/doanhthu?access_token=' + accessToken;
    return axiosClient.post(url, queryString.stringify(data));
  },
};
export default API_REPORT;

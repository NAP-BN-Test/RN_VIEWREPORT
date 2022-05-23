import {retriveDataToken} from '../../_helpers/auth-header';
import axiosClient from './axios-client';

const API_REPORT = {
  getdonhang(data: {id: number}): Promise<any> {
    let token: any = retriveDataToken();
    const url = 'donhang?' + 'access_token=' + token._W + data.id.toString();
    return axiosClient.get(url);
  },

  getdanhmuckhachhang(): Promise<any> {
    let token: any = retriveDataToken();
    const url = 'danhmuc/khachhang?' + 'access_token=' + token._W;
    return axiosClient.get(url);
  },

  postcongnophaitra(data: {
    tungay?: string;
    denngay?: string;
    idkhachhang?: number;
  }): Promise<any> {
    let token: any = retriveDataToken();
    const url = 'reports/congnophaitra?access_token=' + token._W;
    return axiosClient.post(url, data);
  },

  postcongnophaithu(data: {
    tungay?: string;
    denngay?: string;
    idkhachhang?: number;
  }): Promise<any> {
    let token: any = retriveDataToken();
    const url = 'reports/congnophaithu?access_token=' + token._W;
    return axiosClient.post(url, data);
  },

  postdoanhthu(data: {
    tungay?: string;
    denngay?: string;
    idkhachhang?: number;
  }): Promise<any> {
    let token: any = retriveDataToken();
    const url = 'reports/doanhthu?access_token=' + token._W;
    return axiosClient.post(url, data);
  },
};
export default API_REPORT;

import axiosClient from './axios-client';

const API_REPORT = {
  getdonhang(data: {id: number}): Promise<any> {
    const url =
      'donhang?' +
      'access_token=' +
      '1f38cc659898f3e982adfc9b433bdd2484faac30c5adebcd1e39e4f354c355f98c13a7e5e84597d60a336f90facd65ab&id=' +
      data.id.toString();
    return axiosClient.get(url);
  },

  getdanhmuckhachhang(): Promise<any> {
    const url =
      'danhmuc/khachhang?' +
      'access_token=' +
      '1f38cc659898f3e982adfc9b433bdd2484faac30c5adebcd1e39e4f354c355f98c13a7e5e84597d60a336f90facd65ab';
    return axiosClient.get(url);
  },

  postcongnophaitra(data: {
    tungay?: string;
    denngay?: string;
    idkhachhang?: number;
  }): Promise<any> {
    const url =
      'reports/congnophaitra?access_token=1f38cc659898f3e982adfc9b433bdd2484faac30c5adebcd1e39e4f354c355f98c13a7e5e84597d60a336f90facd65ab';
    return axiosClient.post(url, data);
  },

  postcongnophaithu(data: {
    tungay?: string;
    denngay?: string;
    idkhachhang?: number;
  }): Promise<any> {
    const url =
      'reports/congnophaithu?access_token=1f38cc659898f3e982adfc9b433bdd2484faac30c5adebcd1e39e4f354c355f98c13a7e5e84597d60a336f90facd65ab';
    return axiosClient.post(url, data);
  },

  postdoanhthu(data: {
    tungay?: string;
    denngay?: string;
    idkhachhang?: number;
  }): Promise<any> {
    const url =
      'reports/doanhthu?access_token=1f38cc659898f3e982adfc9b433bdd2484faac30c5adebcd1e39e4f354c355f98c13a7e5e84597d60a336f90facd65ab';
    return axiosClient.post(url, data);
  },
};
export default API_REPORT;

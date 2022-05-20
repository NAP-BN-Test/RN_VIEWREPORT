import axiosClient from './axios-client';

const API_REPORT = {
  getdonhang(data: {id: number}): Promise<any> {
    const url =
      'donhang?' +
      'access_token=' +
      '1f38cc659898f3e982adfc9b433bdd24492661a4a295a79ef881235fe2ffa1175b85034ec31ef0c3d5293e1809e1d3fe=' +
      data.id.toString();
    return axiosClient.get(url);
  },

  getdanhmuckhachhang(): Promise<any> {
    const url =
      'danhmuc/khachhang?' +
      'access_token=' +
      '1f38cc659898f3e982adfc9b433bdd24492661a4a295a79ef881235fe2ffa1175b85034ec31ef0c3d5293e1809e1d3fe';
    return axiosClient.get(url);
  },

  postcongnophaitra(data: {
    tungay?: string;
    denngay?: string;
    idkhachhang?: number;
  }): Promise<any> {
    const url =
      'reports/congnophaitra?access_token=1f38cc659898f3e982adfc9b433bdd24492661a4a295a79ef881235fe2ffa1175b85034ec31ef0c3d5293e1809e1d3fe';
    return axiosClient.post(url, data);
  },

  postcongnophaithu(data: {
    tungay?: string;
    denngay?: string;
    idkhachhang?: number;
  }): Promise<any> {
    const url =
      'reports/congnophaithu?access_token=1f38cc659898f3e982adfc9b433bdd24492661a4a295a79ef881235fe2ffa1175b85034ec31ef0c3d5293e1809e1d3fe';
    return axiosClient.post(url, data);
  },

  postdoanhthu(data: {
    tungay?: string;
    denngay?: string;
    idkhachhang?: number;
  }): Promise<any> {
    const url =
      'reports/doanhthu?access_token=1f38cc659898f3e982adfc9b433bdd24492661a4a295a79ef881235fe2ffa1175b85034ec31ef0c3d5293e1809e1d3fe';
    return axiosClient.post(url, data);
  },
};
export default API_REPORT;

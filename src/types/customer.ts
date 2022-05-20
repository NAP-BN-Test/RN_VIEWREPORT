export interface customesCus {
  listCus: Array<customer>;
  loading: boolean;
  error: boolean;
}

export interface customer {
  Id: number;
  IdquocGia: any;
  Idcity: any;
  Code: string;
  NameVi: string;
  NameEn: string;
  AddressVi: any;
  AddressEn: any;
  TaxCode: string;
  Phone: any;
  Fax: any;
  Email: any;
  Website: any;
  Note: any;
  Rating: any;
  MaxMoneyDebit: any;
  PaymentPeriod: any;
  FlagFavorite: any;
  Idbank: any;
  BankAccountNumber: any;
  BankBranchName: any;
  BankAddress: any;
  SoDuVnd: any;
  SoDuUsd: any;
  IddoiTacKh: any;
  PhanTramPhaiThuChi: any;
  FlagCrm: any;
  IdnhanVienSale: any;
  IduserCreate: 1;
  DateCreate: string;
  FlagActive: true;
  MaChiNhanh: any;
  SoNgayDuKienPhatSinhJob: number;
  NgayPhatSinhJob: any;
  IdcityNavigation: any;
  IdnhanVienSaleNavigation: any;
  IdquocGiaNavigation: any;
  IduserCreateNavigation: any;
  TblDmcontactLists: [];
  TblDmthietLapCongNos: [];
  TblJobs: [];
}

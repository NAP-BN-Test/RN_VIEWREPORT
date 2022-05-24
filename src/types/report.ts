export interface report {
  Id: number;
  Stt: number;
  CodeJob: string;
  ContractNo: string;
  Idreceiver: number;
  Idsale: number;
  Note: string;
  GoodsDescription: string;
  OpenDate: string;
  CloseDate: string;
  CreateDate: string;
  EditDate: string;
  IduserCreate: number;
  IdcurrencyViewProfit: number;
  ExchangeRate: string;
  ExchangeDate: string;
  IsLocked: number;
  DateLoadingAtDoor: string;
  DateDiscardAtDoor: string;
  PlaceOfReceipt: string;
  PlaceOfDelivery: string;
  CustomerName: string;
  CustomerAddres: string;
  SoBookbill: string;
  FlagFumi: any;
  IdjobStatus: number;
  IsDraft: any;
  Sttjob: number;
  NgayLayCode: string;
  FlagEdit: any;
  FlagSendNotify: any;
  SoLuongHang: number;
  GiaMua: number;
  ThueMua: any;
  GiaMuaSauThue: number;
  GiaBan: number;
  ThueBan: any;
  GiaBanSauThue: number;
  FlagTtthanhToanMua: boolean;
  FlagTtthanhToanBan: boolean;
  LoiNhuan: number;
  EnumVatmua: number;
  EnumVatban: number;
  IddmdichVuNavigation: any;
}

export interface customReport {
  listreport: Array<report>;
  loading: boolean;
  error: boolean;
  order: report;
}

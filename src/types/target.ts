export interface changetarget {
  iddmtarget: number;
  moneytarget: number;
}

export interface listtarget {
  id: number;
  iddmtarget: number;
  iduser: number;
  moneytarget: number;
  createdate: string;
  editdate: string;
  dmtarget: {
    id: number;
    nametype: '';
  };
}

export interface categorytarget {
  id: number;
  nametype: string;
}

export interface customtarget {
  listtarget: Array<changetarget>;
  loading: boolean;
  error: boolean;
}

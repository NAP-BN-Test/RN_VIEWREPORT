export interface Account {
  id: number;
  username: string;
  password: string;
  phonenumber: string;
  email: string;
  address: string;
  createdate: string;
  editdate: string;
}

export interface AccountResponseLogin {
  listuser: Account;
  token: string;
}

export interface AccountResponseRegister {
  listuser: any;
}

export interface LoginType {
  username: string;
  password: string;
}

export interface Register {
  phonenumber: string;
  email: string;
  address: string;
}

export interface CustomesAccount {
  listuser: Account;
  loading: boolean;
  token: string | null;
  error: boolean;
}
export interface ChangePassword {
  id: number;
  oldpassword: string;
  newpassword: string;
}
export type RegisterType = LoginType & Register;

export interface CustomesSpending {
  listspending: Array<spendingType>;
  totalmoney: number;
  loading: boolean;
  error: boolean;
}

export interface spendingType {
  createdate: string;
  editdate: string;
  id: number;
  iduser: number;
  moneyct: number;
  namect: string;
  timect: string;
}

export interface CreateSpending {
  timect: Date;
  namect: string;
  moneyct: number;
}

export type EditSpending = DeleteSpending & CreateSpending;

export interface DeleteSpending {
  id: number;
}

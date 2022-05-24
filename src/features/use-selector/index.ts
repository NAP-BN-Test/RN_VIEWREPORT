import {RootState} from '../../redux/store';

export const accountStore = (state: RootState) => state.account;
export const reportStore = (state: RootState) => state.report;
export const customerStore = (state: RootState) => state.customer;
export const nccStore = (state: RootState) => state.ncc;
export const loadingGlobalStore = (state: RootState) =>
  state.loadingGlobalStore;

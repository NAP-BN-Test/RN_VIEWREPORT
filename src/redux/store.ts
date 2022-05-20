import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';
import counterReducer from '../component/counterSlice/counterSlice';
import accountReducer from '../features/account/account-slice';
import reportReducer from '../features/report/report-slice';
import customerReducer from '../features/customer/customer-slice';
import loadingGlobalReducer from '../features/loadingGlobal/loadingGlobal-slice';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    account: accountReducer,
    report: reportReducer,
    customer: customerReducer,
    loadingGlobalStore: loadingGlobalReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

import {ActionReducerMapBuilder, createSlice} from '@reduxjs/toolkit';
import NotifiToast from '../../component/notifiToast/toast';
import {customer, customesCus} from '../../types/customer';
import {getcus} from './patch-api';
const initialStateAccount: customesCus = {
  listCus: [] as Array<customer>,
  loading: false,
  error: false,
};
const customerSlice = createSlice({
  name: 'customer',
  initialState: initialStateAccount,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<customesCus>) => {
    // customer
    builder
      .addCase(getcus.pending, state => {
        state.loading = true;
      })
      .addCase(getcus.fulfilled, (state, action: any) => {
        console.log('action.payload');

        state.listCus = action.payload;
        state.loading = false;
        state.error = false;
      })
      .addCase(getcus.rejected, state => {
        state.loading = false;
        state.error = true; //Show lỗi
        console.log('Lấy dữ liệu không thành công');
        NotifiToast('Lấy dữ liệu không thành công');
      });
  },
});

const {reducer} = customerSlice;
export default reducer;

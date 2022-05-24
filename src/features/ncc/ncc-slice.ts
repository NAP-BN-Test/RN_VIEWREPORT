import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit';
import NotifiToast from '../../component/notifiToast/toast';
import { customer, customesCus } from '../../types/customer';
import { getnhacungcap } from './patch-api';
const initialStateAccount: customesCus = {
  listCus: [] as Array<customer>,
  loading: false,
  error: false,
};
const nccSlice = createSlice({
  name: 'ncc',
  initialState: initialStateAccount,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<customesCus>) => {
    // ncc
    builder
      .addCase(getnhacungcap.pending, state => {
        state.loading = true;
      })
      .addCase(getnhacungcap.fulfilled, (state, action: any) => {
        console.log('action.payload');

        state.listCus = action.payload;
        state.loading = false;
        state.error = false;
      })
      .addCase(getnhacungcap.rejected, state => {
        state.loading = false;
        state.error = true; //Show lỗi
        console.log('Lấy dữ liệu không thành công');
        NotifiToast('Lấy dữ liệu không thành công');
      });
  },
});

const {reducer} = nccSlice;
export default reducer;

import {ActionReducerMapBuilder, createSlice} from '@reduxjs/toolkit';
import NotifiToast from '../../component/notifiToast/toast';
import {customReport, report} from '../../types/report';
import {
  getdonhang,
  postcongnophaithu,
  postcongnophaitra,
  postdoanhthu,
} from './patch-api';
const initialStateReport: customReport = {
  listreport: [] as Array<report>,
  loading: false,
  error: false,
  order: {} as report,
};
// 1f38cc659898f3e982adfc9b433bdd249c191f66ec4ee80ae202855e329f51bd0691e163778431d9a17472a15dd527a7
const reportSlice = createSlice({
  name: 'report',
  initialState: initialStateReport,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<customReport>) => {
    // postcongnophaitra
    builder
      .addCase(postcongnophaitra.pending, state => {
        state.loading = true;
      })
      .addCase(postcongnophaitra.fulfilled, (state, action: any) => {
        console.log('action.payload', action.payload);

        state.listreport = action.payload;
        state.loading = false;
        state.error = false;
      })
      .addCase(postcongnophaitra.rejected, state => {
        state.loading = false;
        state.error = true; //Show lỗi
        NotifiToast('Lấy dữ liệu không thành công');
      });

    // postcongnophaithu
    builder
      .addCase(postcongnophaithu.pending, state => {
        state.loading = true;
      })
      .addCase(postcongnophaithu.fulfilled, (state, action: any) => {
        console.log('action.payload');

        state.listreport = action.payload;
        state.loading = false;
        state.error = false;
      })
      .addCase(postcongnophaithu.rejected, state => {
        state.loading = false;
        state.error = true; //Show lỗi
        NotifiToast('Lấy dữ liệu không thành công');
      });
    // postdoanhthu
    builder
      .addCase(postdoanhthu.pending, state => {
        state.loading = true;
      })
      .addCase(postdoanhthu.fulfilled, (state, action: any) => {
        console.log('action.payload');

        state.listreport = action.payload;
        state.loading = false;
        state.error = false;
      })
      .addCase(postdoanhthu.rejected, state => {
        state.loading = false;
        state.error = true; //Show lỗi
        NotifiToast('Lấy dữ liệu không thành công');
      });

    // getdonhang
    builder
      .addCase(getdonhang.pending, state => {
        state.loading = true;
      })
      .addCase(getdonhang.fulfilled, (state, action: any) => {
        console.log('action.payload');

        state.order = action.payload;
        state.loading = false;
        state.error = false;
      })
      .addCase(getdonhang.rejected, state => {
        state.loading = false;
        state.error = true; //Show lỗi
        NotifiToast('Lấy dữ liệu không thành công');
      });
  },
});

const {reducer} = reportSlice;
export default reducer;

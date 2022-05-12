import {ActionReducerMapBuilder, createSlice} from '@reduxjs/toolkit';
import NotifiToast from '../../component/notifiToast/toast';
import {changetarget, customtarget, listtarget} from '../../types/target';
import {getTargetByUser, postChangeTarget} from './patchtarget-api';

const initialStateTarget: customtarget = {
  listtarget: [] as Array<listtarget>,
  loading: false,
  error: false,
};

const targetSlice = createSlice({
  name: 'target',
  initialState: initialStateTarget,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<customtarget>) => {
    //get target by user
    builder
      .addCase(getTargetByUser.pending, state => {
        state.loading = true;
      })
      .addCase(getTargetByUser.fulfilled, (state, action) => {
        const {result} = action.payload;
        state.listtarget = result;
        state.loading = false;
        state.error = false;
      })
      .addCase(getTargetByUser.rejected, state => {
        state.loading = false;
        console.log('Lấy dữ liệu không thành công');
      });

    //change target
    builder
      .addCase(postChangeTarget.pending, state => {
        state.loading = true;
      })
      .addCase(postChangeTarget.fulfilled, (state, action) => {
        NotifiToast('Cập nhật thành công');
        const {result} = action.payload;
        state.listtarget = result;
        state.loading = false;
        state.error = false;
      })
      .addCase(postChangeTarget.rejected, state => {
        state.loading = false;
        console.log('Sửa target không thành công không thành công');
      });
  },
});
const {reducer} = targetSlice;
export default reducer;

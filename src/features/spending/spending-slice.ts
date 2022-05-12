import {ActionReducerMapBuilder, createSlice} from '@reduxjs/toolkit';
import {
  getSpendingByDateToDate,
  getSpendingByDay,
  getSpendingByMonth,
  getSpendingByWeek,
  postCreateSpending,
  postDeleteSpending,
  postEditSpending,
  postSpendingByID,
} from '.';
import NotifiToast from '../../component/notifiToast/toast';
import {CustomesSpending, spendingType} from '../../types/spendingType';

const initialStateSpending: CustomesSpending = {
  listspending: [] as Array<spendingType>,
  totalmoney: 0,
  loading: false,
  error: false,
};

const spendingSlice = createSlice({
  name: 'spending',
  initialState: initialStateSpending,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<CustomesSpending>) => {
    //Ngày
    builder
      .addCase(getSpendingByDay.pending, state => {
        state.loading = true;
      })
      .addCase(getSpendingByDay.fulfilled, (state, action) => {
        const {result, totalmoney} = action.payload;
        state.listspending = result;
        state.totalmoney = totalmoney;
        state.loading = false;
        state.error = false;
      })
      .addCase(getSpendingByDay.rejected, state => {
        state.loading = false;
        console.log('Lấy dữ liệu không thành công');
      });

    //Tuần
    builder
      .addCase(getSpendingByWeek.pending, state => {
        state.loading = true;
      })
      .addCase(getSpendingByWeek.fulfilled, (state, action) => {
        const {result, totalmoney} = action.payload;
        state.listspending = result;
        state.totalmoney = totalmoney;
        state.loading = false;
        state.error = false;
      })
      .addCase(getSpendingByWeek.rejected, state => {
        state.loading = false;
        console.log('Lấy dữ liệu không thành công');
      });

    //Tháng

    builder
      .addCase(getSpendingByMonth.pending, state => {
        state.loading = true;
      })
      .addCase(getSpendingByMonth.fulfilled, (state, action) => {
        const {result, totalmoney} = action.payload;
        state.listspending = result;
        state.totalmoney = totalmoney;
        state.loading = false;
        state.error = false;
      })
      .addCase(getSpendingByMonth.rejected, state => {
        state.loading = false;
        console.log('Lấy dữ liệu không thành công');
      });

    //Ngày đến ngày

    builder
      .addCase(getSpendingByDateToDate.pending, state => {
        state.loading = true;
      })
      .addCase(getSpendingByDateToDate.fulfilled, (state, action) => {
        const {result, totalmoney} = action.payload;
        state.listspending = result;
        state.totalmoney = totalmoney;
        state.loading = false;
        state.error = false;
      })
      .addCase(getSpendingByDateToDate.rejected, state => {
        state.loading = false;
        console.log('Lấy dữ liệu không thành công');
      });

    //ByID

    builder
      .addCase(postSpendingByID.pending, state => {
        state.loading = true;
      })
      .addCase(postSpendingByID.fulfilled, (state, action) => {
        console.log('action', action);

        const {result, totalmoney} = action.payload;
        state.listspending = [result];
        state.totalmoney = totalmoney;
        state.loading = false;
        state.error = false;
      })
      .addCase(postSpendingByID.rejected, state => {
        state.loading = false;
        console.log('Lấy dữ liệu không thành công');
      });

    //Delete
    builder
      .addCase(postDeleteSpending.pending, state => {
        state.loading = true;
      })
      .addCase(postDeleteSpending.fulfilled, (state, action) => {
        console.log('action delete', action);
        NotifiToast('Xóa thành công');
        // const {result, totalmoney} = action.payload;
        // state.listspending = [result];
        // state.totalmoney = totalmoney;
        state.loading = false;
        state.error = false;
      })
      .addCase(postDeleteSpending.rejected, state => {
        state.loading = false;
        NotifiToast('Xóa thất bại');
        console.log('Xóa không thành công');
      });

    //Edit
    builder
      .addCase(postEditSpending.pending, state => {
        state.loading = true;
      })
      .addCase(postEditSpending.fulfilled, (state, action) => {
        console.log('action delete', action);
        NotifiToast('Sửa thành công');
        const {result, overtargetDay, overtargetWeek, overtargetMonth} =
          action.payload;

        // if (overtargetDay == true) {
        //   NotifiToast('Bạn đã tiêu quá nhiều tiền trong ngày hôm nay');
        // }

        // if (overtargetWeek == true) {
        //   NotifiToast('Bạn đã tiêu quá nhiều tiền trong tuần này');
        // }

        // if (overtargetMonth == true) {
        //   NotifiToast('Bạn đã tiêu quá nhiều tiền trong tháng này');
        // }

        // state.listspending = state.listspending
        //   .filter((item: spendingType) => item.id != result.id)
        //   .push(result);

        state.loading = false;
        state.error = false;
      })
      .addCase(postEditSpending.rejected, state => {
        state.loading = false;
        NotifiToast('Sửa thất bại');
        console.log('Xóa không thành công');
      });

    //Create
    builder
      .addCase(postCreateSpending.pending, state => {
        state.loading = true;
      })
      .addCase(postCreateSpending.fulfilled, (state, action) => {
        console.log('action Thêm', action.payload);
        NotifiToast('Thêm thành công');
        // const {result, totalmoney} = action.payload;
        // state.listspending = [result];
        // state.totalmoney = totalmoney;
        state.loading = false;
        state.error = false;
      })
      .addCase(postCreateSpending.rejected, state => {
        state.loading = false;
        NotifiToast('Thêm thất bại');
      });
  },
});

const {reducer} = spendingSlice;
export default reducer;

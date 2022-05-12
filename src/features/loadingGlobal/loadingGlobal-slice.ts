import {
  ActionReducerMapBuilder,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import {AppThunk, RootState} from '../../redux/store';
import {checkToken, postLogin} from '../account';
import {getSpendingByDay} from '../spending';

const initialState = {
  status: false,
};

export const loadingGlobal = createSlice({
  name: 'loadingGl',
  initialState,
  reducers: {
    open: state => {
      state.status = true;
    },

    off: state => {
      state.status = false;
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<any>) => {
    //Login
    builder
      .addCase(postLogin.pending, state => {
        state.status = true;
      })
      .addCase(postLogin.fulfilled, state => {
        state.status = false;
      })
      .addCase(postLogin.rejected, state => {
        state.status = false;
      });

    //Check token
    builder
      .addCase(checkToken.pending, state => {
        state.status = true;
      })
      .addCase(checkToken.fulfilled, state => {
        state.status = false;
      })
      .addCase(checkToken.rejected, state => {
        state.status = false;
      });

    //spending
    builder
      .addCase(getSpendingByDay.pending, state => {
        state.loading = true;
      })
      .addCase(getSpendingByDay.fulfilled, state => {
        state.loading = false;
      })
      .addCase(getSpendingByDay.rejected, state => {
        state.loading = false;
      });
  },
});

export const {open, off} = loadingGlobal.actions;

export const isLoadingGL =
  (value: boolean): AppThunk =>
  (dispatch: any, getState: any) => {
    console.log('value loadingGL', value);
    if (value == true) {
      console.log('Đã gọi đến isloading trueeeeeeeeeeeeeeeeeeeeee');
      dispatch(open());
    } else {
      dispatch(off());
      console.log('Đã gọi đến isloading false');
    }
    return;
  };
const {reducer} = loadingGlobal;
export default reducer;

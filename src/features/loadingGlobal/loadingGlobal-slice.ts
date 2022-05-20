import {
  ActionReducerMapBuilder,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import {AppThunk, RootState} from '../../redux/store';
import {postLogin} from '../account';

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

    
  },
});

export const {open, off} = loadingGlobal.actions;

export const isLoadingGL =
  (value: boolean): AppThunk =>
  (dispatch: any, getState: any) => {
    if (value == true) {
      dispatch(open());
    } else {
      dispatch(off());
    }
    return;
  };
const {reducer} = loadingGlobal;
export default reducer;

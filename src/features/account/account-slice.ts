import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit';
import { postLogin, postLogout } from '.';
import { token } from '../../commom/api';
import NotifiToast from '../../component/notifiToast/toast';
import { Account, CustomesAccount } from '../../types';
import { retriveDataToken } from '../../_helpers/auth-header';
const initialStateAccount: CustomesAccount = {
  listuser: {} as Account,
  loading: false,
  token: '' || null,
  error: false,
};
// 1f38cc659898f3e982adfc9b433bdd249c191f66ec4ee80ae202855e329f51bd0691e163778431d9a17472a15dd527a7
const accountSlice = createSlice({
  name: 'account',
  initialState: initialStateAccount,
  reducers: {
    loginFake: state => {
      let token: any = retriveDataToken()

      
      state.token = token._W;
      state.listuser = {
        id: 1,
        username: 'Ecomex',
        password: '123456',
        phonenumber: '033396588',
        email: 'Ecomex@gmail.com',
        address: 'string',
        createdate: 'string',
        editdate: 'string',
      };
      if (token._W) {
        NotifiToast('Đăng nhập thành công');
      }else{
        NotifiToast('Đăng nhập không thành công');
      }
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<CustomesAccount>) => {
    // login
    builder
      .addCase(postLogin.pending, state => {
        state.loading = true;
      })
      .addCase(postLogin.fulfilled, (state, action: any) => {
        console.log('action.payload');

        state.listuser = {
          id: 1,
          username: 'Ecomex',
          password: '123456',
          phonenumber: '033396588',
          email: 'Ecomex@gmail.com',
          address: 'string',
          createdate: 'string',
          editdate: 'string',
        };
        state.token = action.payload;
        state.loading = false;
        state.error = false;
        AsyncStorage.setItem('token', action.payload);
        // dispatch(isLoadingGL(true))
        // AsyncStorage.setItem("user", queryString.stringify(listuser));
        console.log('Đăng nhập thành công');
      })
      .addCase(postLogin.rejected, state => {
        state.loading = false;
        state.error = true; //Show lỗi
        console.log('Đăng nhập không thành công');
        NotifiToast('Đăng nhập không thành công');
      });
    //  log out the user
    builder.addCase(postLogout.fulfilled, state => {
      state.listuser = {} as any;
      state.token = '';
      AsyncStorage.removeItem('token');
      // AsyncStorage.removeItem("user");
      NotifiToast('Đã đăng xuất');
      console.log('Đã đăng xuất');
    });
    
  },
});

const {reducer} = accountSlice;
export const {loginFake} = accountSlice.actions;
export default reducer;

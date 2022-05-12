import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../../screens/ScrennStart/login/login';
import Register from '../../screens/ScrennStart/register/register';
import Forgotpass from '../../screens/ScrennStart/forgotpassword/forgotpass';
const AuthStack = createStackNavigator();

const AuthStackScreen = ({navigation}: any) => {
  

  return (
    <AuthStack.Navigator
      initialRouteName="login"
      screenOptions={
        {
          // headerShown: false,
        }
      }>
      <AuthStack.Screen
        options={{
          // title: 'Đăng nhập',
          headerShown: false,
        }}
        name="login"
        component={Login}
      />
      <AuthStack.Screen
        options={{
          title: 'Register',
          // headerShown: false,
        }}
        name="register"
        component={Register}
      />

      <AuthStack.Screen
        options={{
          title: 'Forgot Pass',
          // headerShown: false,
        }}
        name="forgotpassword"
        component={Forgotpass}
      />
    </AuthStack.Navigator>
  );
};

export default AuthStackScreen;

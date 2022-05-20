import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../../screens/ScrennStart/login/login';
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
      
    </AuthStack.Navigator>
  );
};

export default AuthStackScreen;

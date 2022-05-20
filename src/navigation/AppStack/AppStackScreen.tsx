import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Inforeport from '../../component/report/inforeport/inforeport';
import TabHomeNavigation from '../TabNavigation/TabHomeNavigation';
import colors from '../../assets/css/color';
import InforeportReceivable from '../../component/report/inforeportReceivable/inforeport_receivable';
import InforeportDebitReturn from '../../component/report/inforeportDebitReturn/inforeportDebitReturn';
import InfoUser from '../../screens/ScrennStart/user/infoUser/infoUser';
const AppStack = createStackNavigator();

const AppStackScreen = ({navigation}: any) => {
  return (
    <AppStack.Navigator
      screenOptions={{
        // headerShown: false,
        headerStyle: {
          backgroundColor: colors.redcustom,
        },
        headerTintColor: 'white',
      }}>
      <AppStack.Screen
        options={{
          // headerTitle: (props: any) =><Hearder {...props}/>,
          headerShown: false,
        }}
        name="main"
        component={TabHomeNavigation}
      />

      <AppStack.Screen
        options={{
          title: 'Thông tin chi tiết',
          // headerShown: false,
        }}
        name="inforeport"
        component={Inforeport}
      />

      <AppStack.Screen
        options={{
          title: 'Thông tin chi tiết',
          // headerShown: false,
        }}
        name="inforeportDebitReturn"
        component={InforeportDebitReturn}
      />

      <AppStack.Screen
        options={{
          title: 'Thông tin chi tiết',
          // headerShown: false,
        }}
        name="inforeportReceivable"
        component={InforeportReceivable}
      />

    </AppStack.Navigator>
  );
};

export default AppStackScreen;

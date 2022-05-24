import AsyncStorage from '@react-native-async-storage/async-storage';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useEffect} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Animated from 'react-native-reanimated';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useDispatch} from 'react-redux';
import colors from '../../assets/css/color';
import {token} from '../../commom/api';
import {getcus} from '../../features/customer';
import { getnhacungcap } from '../../features/ncc';
import AllOption from '../../screens/ScrennStart/AllOption/allOption';
import ReportCustomer from '../../screens/ScrennStart/ReportCustomer/report_customer';
import ReportDebitReturn from '../../screens/ScrennStart/ReportDebitReturn/report_debit_return';
import ReportReceivable from '../../screens/ScrennStart/ReportReceivable/report_receivable';
const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}: any) => (
  <TouchableOpacity
    style={{
      top: -30,
      shadowColor: '#7F5DF0',
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.5,
      elevation: 5,
    }}
    onPress={onPress}>
    <Animated.View style={{}}>{children}</Animated.View>
  </TouchableOpacity>
);

const TabHomeNavigation = ({navigation}: any) => {
  const dispatch = useDispatch();
  const headerBackground = require('../../assets/img/topBarBg.png');
  useEffect(() => {
    async function name() {
      let value: string = (await AsyncStorage.getItem('token')) || '';
    }
    name();
    console.log('token tab', token);
    dispatch(getnhacungcap());
    dispatch(getcus());
  }, []);
  function onPress() {}
  return (
    <Tab.Navigator
      screenOptions={({route}: any) => ({
        tabBarActiveTintColor: colors.white,
        tabBarInactiveTintColor: colors.black,
        // headerBackground: () => (
        //   <Image style={styles.headerImage} source={headerBackground} />
        // ),
        headerStyle: {
          backgroundColor: colors.redcustom,
        },
        tabBarStyle: {
          // activeTintColor: '#000',
          // inactiveTintColor: '#aaa',
          height: 60,
          backgroundColor: colors.redcustom,
          shadowColor: '#7F5DF0',
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.5,
          elevation: 5,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        },
        tabBarShowLabel: false,
        tabBarIcon: ({focused, color}: any) => {
          let iconName = 'ios-help';
          switch (route.name) {
            case 'Home':
              iconName = focused ? 'home' : 'home';
              break;

            case 'Target':
              iconName = focused ? 'pending-actions' : 'pending-actions';

              break;

            case 'ReportTime':
              iconName = focused ? 'pending-actions' : 'pending-actions';

              break;

            case 'DebitReceivable':
              iconName = focused ? 'add-chart' : 'add-chart';
              break;

            case 'DebitReturn':
              iconName = focused ? 'assessment' : 'assessment';
              break;

            case 'Option':
              iconName = focused ? 'dehaze' : 'dehaze';
              break;
            default:
              break;
          }
          // You can return any component that you like here!
          return <MaterialIcons name={iconName} size={28} color={color} />;
        },
      })}>
      <Tab.Screen
        name="ReportTime"
        component={ReportCustomer}
        options={{
          // headerShown: false,
          headerTitleStyle: {
            color: colors.white,
            fontSize: 18,
          },
          title: 'Doanh thu theo thời gian',
        }}
      />

      <Tab.Screen
        name="DebitReceivable"
        component={ReportReceivable}
        options={{
          // headerShown: false,
          headerTitleStyle: {
            color: colors.white,
            fontSize: 18,
          },
          title: 'Công nợ phải thu',
        }}
      />

      <Tab.Screen
        name="DebitReturn"
        component={ReportDebitReturn}
        options={{
          // headerShown: false,
          headerTitleStyle: {
            color: colors.white,
            fontSize: 18,
          },
          title: 'Công nợ phải trả',
        }}
      />

      <Tab.Screen
        name="Option"
        component={AllOption}
        options={{
          // headerShown: false,
          title: 'Account',
          headerTitleStyle: {
            // fontFamily: fonts.primaryRegular,
            color: colors.white,
            fontSize: 18,
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabHomeNavigation;
const styles = StyleSheet.create({
  headerImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: 100 + '%',
    height: 50,
  },
});

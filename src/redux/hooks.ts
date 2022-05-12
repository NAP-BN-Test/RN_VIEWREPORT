import {Dimensions} from 'react-native';
import {useAnimatedStyle, useSharedValue} from 'react-native-reanimated';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import type {RootState, AppDispatch} from './store';
import 'intl';
import 'intl/locale-data/jsonp/en';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const ScreenHeight = Dimensions.get('window').height;
export const ScreenWidth = Dimensions.get('window').width;

//Format curency
export const currency = function (number: any) {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
    // minimumFractionDigits: 2,
  }).format(number);
};

//Format date
export function getParsedDate(strDate: string) {
  var strSplitDate = String(strDate).split(' ');
  var date = new Date(strSplitDate[0]) as any;
  // alert(date);
  var dd = date.getDate() as any;
  var mm = (date.getMonth() + 1) as any; //January is 0!

  var yyyy = date.getFullYear();
  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  }
  date = dd + '-' + mm + '-' + yyyy;
  return date.toString();
}

//Format date + Time
export function getParsedDateTime(strDate: any) {
  var strSplitDate = String(strDate).split(' ');
  var date = new Date(strSplitDate[0]) as any;
  var hours = date.getUTCHours() as any;
  var min = date.getUTCMinutes() as any;
  var seconds = date.getSeconds() as any;
  console.log(date);
  var dd = date.getDate() as any;
  var mm = (date.getMonth() + 1) as any; //January is 0!

  var yyyy = date.getFullYear();
  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  }

  if (hours < 10) {
    hours = '0' + hours;
  }

  if (min < 10) {
    min = '0' + min;
  }

  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  date = dd + '-' + mm + '-' + yyyy + ' ' + hours + ':' + min;
  return date.toString();
}

//Format date + Time
export function getParsedDateTimeSS(strDate: any) {
  var strSplitDate = String(strDate).split(' ');
  var date = new Date(strSplitDate[0]) as any;
  var hours = date.getUTCHours() as any;
  var min = date.getUTCMinutes() as any;
  var seconds = date.getSeconds() as any;
  console.log(date);
  var dd = date.getDate() as any;
  var mm = (date.getMonth() + 1) as any; //January is 0!

  var yyyy = date.getFullYear();
  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  }

  if (hours < 10) {
    hours = '0' + hours;
  }

  if (min < 10) {
    min = '0' + min;
  }

  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  date = dd + '-' + mm + '-' + yyyy + ' ' + hours + ':' + min + ':' + seconds;
  return date.toString();
}

//Format Time
export function getParsedTime(time: any) {
  var strSplitTime = String(time).split(' ');
  var date = new Date(strSplitTime[0]) as any;
  var hours = date.getUTCHours() as any;
  var min = date.getUTCMinutes() as any;
  var seconds = date.getSeconds() as any;

  if (hours < 10) {
    hours = '0' + hours;
  }

  if (min < 10) {
    min = '0' + min;
  }

  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  date = hours + ':' + min;

  return date.toString();
}

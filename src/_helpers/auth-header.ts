import AsyncStorage from '@react-native-async-storage/async-storage';
export function authHeader() {
  // return authorization header with jwt token
  const retriveData = async () => {
    let value: any = await AsyncStorage.getItem('@user');
    return JSON.parse(value || '{}');
  };

  var user: any = retriveData();

  if (user && user?.token) {
    console.log('ok', user);
    return {Authorization: 'Bearer ' + user.token};
  } else {
    console.log("Chưa đăng nhập");
    return {};
  }
}

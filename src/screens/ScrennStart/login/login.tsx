import React, {useEffect, useState} from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import IconEntypo from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/FontAwesome';
import {token} from '../../../commom/api';
import accountDonHang from '../../../commom/api/api-report';
import ModalPoup from '../../../component/Modal/Modal';
import NotifiToast from '../../../component/notifiToast/toast';
import Notify from '../../../component/Notify/Notify';
import {accountStore} from '../../../features';
import {autologin, loginFake, postLogin} from '../../../features/account';
import {useAppDispatch, useAppSelector} from '../../../redux/hooks';
import {LoginType} from '../../../types';
import {styles} from './styleLogin';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { AsyncStorage } from 'react-native';


// import {useNavigation} from '@react-navigation/native';
const iconWhat = <Icon name="whatsapp" size={38} color="#961d1d" />;
const iconFB = (
  <IconEntypo name="facebook-with-circle" size={38} color="#23527c" />
);
const iconGG = (
  <IconEntypo name="google--with-circle" size={38} color="#961d1d" />
);
const iconPhone = <IconEntypo name="old-phone" size={38} color="#23527c" />;
const Login = ({navigation}: any) => {
  //   const navigate = useNavigation();

  const dispatch = useAppDispatch();
  const resultAccount = useAppSelector(accountStore);

  useEffect(() => {
    if (resultAccount.loading == false) {
      if (resultAccount.error == true) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    } else {
      console.log('Đang xử lý');
    }
  }, [resultAccount.loading]);

  useEffect(() => {
    if (token) {
      console.log('token login', token._W);
      dispatch(autologin());
      //Gọi đến hàm check token
      //Có sẽ login
      //Không sẽ logout ra màn login
    }
  }, [token]);

  // dispatch api
  const handlePostLogin = (data: LoginType) => {
    if (data.username == '' || data.password == '') {
      NotifiToast('Vui lòng điền tài khoản mật khẩu');
    } else {
      AsyncStorage.setItem('username', data.username);
      dispatch(postLogin(data));
    }
  };
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = React.useState(false);

  return (
    <View style={[styles.container]}>
      <ImageBackground
        source={require('../../../assets/img/Login.jpg')}
        style={styles.bgImage}
        resizeMode="cover">
        <View
          style={{paddingHorizontal: 20, position: 'absolute', width: '100%', bottom: 120}}>
          {/* <Text style={styles.title}>Ecomex</Text> */}
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="#aaaaaa"
            onChangeText={text => setUsername(text)}
            value={username}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholderTextColor="#aaaaaa"
            secureTextEntry
            placeholder="Password"
            onChangeText={text => setPassword(text)}
            value={password}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              handlePostLogin({
                username: username,
                password: password,
              })
            }>
            <Text style={styles.buttonTitle}>Đăng nhập</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <ModalPoup visible={visible}>
        <Notify
          onPress={() => setVisible(false)}
          content="Đăng nhập không thành công"
          type="error"
        />
      </ModalPoup>
    </View>
  );
};

export default Login;

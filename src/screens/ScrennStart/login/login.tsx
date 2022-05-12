import React, {useEffect, useMemo, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import IconEntypo from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/FontAwesome';
import {retriveData, token} from '../../../commom/api';
import Loading from '../../../component/loading/loading';
import ModalPoup from '../../../component/Modal/Modal';
import NotifiToast from '../../../component/notifiToast/toast';
import Notify from '../../../component/Notify/Notify';
import {accountStore} from '../../../features';
import {checkToken, postLogin} from '../../../features/account';
import {isLoadingGL} from '../../../features/loadingGlobal';
import {useAppDispatch, useAppSelector} from '../../../redux/hooks';
import {LoginType} from '../../../types';
import {styles} from './styleLogin';
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

    console.log(1);
  }, [resultAccount.loading]);

  useEffect(() => {
    console.log('token login', token);
    
    if (token) {
      console.log('Check token', token._W);
      dispatch(checkToken());
      //Gọi đến hàm check token
      //Có sẽ login
      //Không sẽ logout ra màn login
    }
  }, [token]);

  // dispatch api
  const handlePostLogin = (data: LoginType) => {
    if (data.username == '' || data.username == '') {
      NotifiToast("Vui lòng điền tài khoản mật khẩu")
    }else{
      dispatch(postLogin(data));
    }
    
  };
  const [username, setUsername] = useState('dung99pk');
  const [password, setPassword] = useState('123456');
  const [visible, setVisible] = React.useState(false);

  return (
    <View style={[styles.container, {padding: 20}]}>
      <View>
        <Text style={styles.title}>Đăng nhập</Text>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
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
        {/* <TouchableOpacity
          onPress={() => navigation.navigate('forgotpassword')}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: '#000',
              fontWeight: '400',
              fontSize: 14,
              marginTop: 20,
            }}>
            Forgot Password?
          </Text>
        </TouchableOpacity> */}
        {/* <Text style={[styles.textDemo, {marginTop: 20}]}>or</Text>
        <View
          style={[
            {
              marginTop: 20,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            },
          ]}>
          <TouchableOpacity
          //   onPress={() => onLoginPress()}
          >
            <View>{iconFB}</View>
          </TouchableOpacity>
          <TouchableOpacity
          //   onPress={() => onLoginPress()}
          >
            <View>{iconGG}</View>
          </TouchableOpacity>
          <TouchableOpacity
          //   onPress={() => onLoginPress()}
          >
            <View>{iconPhone}</View>
          </TouchableOpacity>
          <TouchableOpacity
          //   onPress={() => onLoginPress()}
          >
            <View>{iconWhat}</View>
          </TouchableOpacity>
        </View> */}
      </View>
      {/* <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          //   alignItems: 'center',
        }}>
        <Text style={styles.textDemo}>Don't have an account?</Text>
        <TouchableOpacity
          style={styles.buttonFooter}
          onPress={() => navigation.navigate('register')}>
          <Text style={styles.buttonTitleFooter}>Register</Text>
        </TouchableOpacity>
      </View> */}

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

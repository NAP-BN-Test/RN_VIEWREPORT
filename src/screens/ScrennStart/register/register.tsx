import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import IconEntypo from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/FontAwesome';
import ModalPoup from '../../../component/Modal/Modal';
import NotifiToast from '../../../component/notifiToast/toast';
import Notify from '../../../component/Notify/Notify';
import {postRegister} from '../../../features/account';
import {useAppDispatch} from '../../../redux/hooks';
import {RegisterType} from '../../../types';
const iconWhat = <Icon name="whatsapp" size={38} color="#961d1d" />;
const iconFB = (
  <IconEntypo name="facebook-with-circle" size={38} color="#23527c" />
);
const iconGG = (
  <IconEntypo name="google--with-circle" size={38} color="#961d1d" />
);
const iconPhone = <IconEntypo name="old-phone" size={38} color="#23527c" />;
const Register = ({navigation}: any) => {
  const dispatch = useAppDispatch();
  // dispatch api
  const handlePostRegister = (data: RegisterType) => {
    if (data.password != repassword) {
      NotifiToast('Mật khẩu không khớp');
    } else {
      if (userName.length <= 0 || password.length <= 0 || email.length <= 0) {
        NotifiToast('Vui lòng điền đầy đủ thông tin');
      } else {
        dispatch(postRegister(data));
      }
    }
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');
  const [address, setAddress] = useState('');
  const [numberphone, setNumberphone] = useState('');
  const [userName, setUserName] = useState('');
  const [visible, setVisible] = useState(false);
  return (
    <View style={[styles.container, {padding: 20}]}>
      <View>
        {/* <Text style={styles.title}>Register</Text> */}
        <TextInput
          style={styles.input}
          placeholder="UserName"
          placeholderTextColor="#aaaaaa"
          onChangeText={text => setUserName(text)}
          value={userName}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="PhoneNumber"
          placeholderTextColor="#aaaaaa"
          onChangeText={text => setNumberphone(text)}
          value={numberphone}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          keyboardType="number-pad"
        />
        <TextInput
          style={styles.input}
          placeholderTextColor="#aaaaaa"
          placeholder="Email"
          onChangeText={text => setEmail(text)}
          value={email}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholderTextColor="#aaaaaa"
          placeholder="Address"
          onChangeText={text => setAddress(text)}
          value={address}
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

        <TextInput
          style={styles.input}
          placeholderTextColor="#aaaaaa"
          secureTextEntry
          placeholder="Repassword"
          onChangeText={text => setRepassword(text)}
          value={repassword}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            handlePostRegister({
              username: userName,
              password: password,
              phonenumber: numberphone,
              email: email,
              address: address,
            })
          }>
          <Text style={styles.buttonTitle}>Register</Text>
        </TouchableOpacity>
      </View>

      {/* <ModalPoup visible={visible}>
        <Notify
          onPress={() => setVisible(false)}
          content="Đăng nhập không thành công"
          type="error"
        />
      </ModalPoup> */}
    </View>
  );
};

export default Register;

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '100%',
    flexDirection: 'column',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 10,
    color: '#000',
  },
  input: {
    height: 48,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: 'white',
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 16,
  },
  button: {
    backgroundColor: '#000',
    marginTop: 20,
    height: 48,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

  buttonFooter: {
    backgroundColor: '#ffff',
    marginTop: 20,
    height: 48,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonTitleFooter: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },

  textDemo: {
    color: '#000',
    fontWeight: '400',
    fontSize: 14,
    opacity: 0.5,
    textAlign: 'center',
  },
});

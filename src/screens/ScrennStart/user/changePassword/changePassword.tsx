import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {accountStore} from '../../../../features';
import {ChangePass} from '../../../../features/account';
import {ScreenHeight, useAppSelector} from '../../../../redux/hooks';

function ChangePassword({navigation}: any) {
  const [password, setPassword] = useState('');
  const [newpassword, setNewpassword] = useState('');
  const [repassword, setRepassword] = useState('');
  const dispatch = useDispatch();
  const resultAccount = useAppSelector(accountStore);
  function submit() {
    if (newpassword != repassword) {
      console.log('Mật khẩu không khớp');
    } else {
      if ((repassword.length || newpassword.length || password.length) <= 0) {
        console.log('Vui lòng nhập mật khẩu');
      } else {
        // console.log(
        //   {
        //         id: resultAccount.listuser.id,
        //         oldpassword: password,
        //         newpassword: newpassword,
        //       }
        // );
        
        dispatch(
          ChangePass({
            id: resultAccount.listuser.id,
            oldpassword: password,
            newpassword: newpassword,
          }),
        );
      }
    }
  }
  return (
    <View
      style={{
        // backgroundColor: '#fff',
        height: ScreenHeight,
        flex: 1,
        paddingHorizontal: 20,
      }}>
      <TextInput
        style={styles.input}
        placeholderTextColor="#aaaaaa"
        secureTextEntry
        placeholder="Mật khẩu cũ..."
        onChangeText={text => setPassword(text)}
        value={password}
        underlineColorAndroid="transparent"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholderTextColor="#aaaaaa"
        secureTextEntry
        placeholder="Mật khẩu mới"
        onChangeText={text => setNewpassword(text)}
        value={newpassword}
        underlineColorAndroid="transparent"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholderTextColor="#aaaaaa"
        secureTextEntry
        placeholder="Xác nhận mật khẩu"
        onChangeText={text => setRepassword(text)}
        value={repassword}
        underlineColorAndroid="transparent"
        autoCapitalize="none"
      />

      <TouchableOpacity style={styles.button} onPress={() => submit()}>
        <Text style={styles.buttonTitle}>Đổi mật khẩu</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ChangePassword;
const styles = StyleSheet.create({
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
});

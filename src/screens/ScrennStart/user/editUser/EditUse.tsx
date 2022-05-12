import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {ScreenHeight} from '../../../../redux/hooks';

function EditUse({navigation}: any) {
  const [address, setAddress] = useState('');
  const [numberphone, setNumberphone] = useState('');
  const [email, setEmail] = useState('');

  useEffect(()=>{
    
  },[])
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
        placeholder="Email"
        onChangeText={text => setEmail(text)}
        value={email}
        underlineColorAndroid="transparent"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholderTextColor="#aaaaaa"
        placeholder="Số điện thoại"
        onChangeText={text => setNumberphone(text)}
        value={numberphone}
        underlineColorAndroid="transparent"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholderTextColor="#aaaaaa"
        placeholder="Địa chỉ"
        onChangeText={text => setAddress(text)}
        value={address}
        underlineColorAndroid="transparent"
        autoCapitalize="none"
      />

      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonTitle}>Thay đổi</Text>
      </TouchableOpacity>
    </View>
  );
}

export default EditUse;
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

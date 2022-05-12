import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconEntypo from 'react-native-vector-icons/Entypo';
const Forgotpass = ({navigation}: any) => {
  const [numberphone, setNumberphone] = useState('');
  return (
    <View style={[styles.container, {padding: 20}]}>
      <View>
        {/* <Text style={styles.title}>Forgot Pass</Text> */}
        
        <TextInput
          style={styles.input}
          placeholder="Phone number"
          placeholderTextColor="#aaaaaa"
          onChangeText={text => setNumberphone(text)}
          value={numberphone}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          keyboardType="number-pad"
        />
        
        <TouchableOpacity
          style={styles.button}
          //   onPress={() => onLoginPress()}
        >
          <Text style={styles.buttonTitle}>Forgot Pass</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Forgotpass;

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

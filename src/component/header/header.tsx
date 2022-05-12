import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
function Hearder(props: any) {
  console.log('props', props);
  const Draw = (
    <MaterialIcons name={'format-align-left'} size={28} color={'#000'} />
  );

  const noti = (
    <MaterialIcons name={'notifications-on'} size={28} color={'#000'} />
  );
  return (
    <View
      style={{
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        shadowColor: '#7F5DF0',
        elevation: 2,
        padding: 10 ,
        // borderRadius: 28,
        // marginBottom: 3,
        borderBottomColor: '#000',
        borderWidth: 1,
        backgroundColor: '#fff',
      }}>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {Draw}
      </View>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 30, fontWeight: '600'}}>QLCT</Text>
      </View>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {noti}
      </View>
    </View>
  );
}

export default Hearder;
const styles = StyleSheet.create({
  
});

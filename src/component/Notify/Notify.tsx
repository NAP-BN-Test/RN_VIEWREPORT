import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface propsNoti {
  onPress: any;
  type: 'success' | 'error' | 'warning';
  content: string;
}

function Notify(props: propsNoti) {
  return (
    <View>
      <View style={{alignItems: 'center'}}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => props.onPress()}>
            <Text style={{top: -20, fontSize: 20}}>X</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{alignItems: 'center'}}>
        <Image
          style={{width: 50, height: 50}}
          source={{
            uri:
              props.type == 'success'
                ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR69nkYalHKa-SrhwuFBiLk5hlk1LnnhJcFCUEo1zwkdsIpFk0rMMC-jkTv9S-kpiyaOdA&usqp=CAU'
                : props.type == 'warning'
                ? 'https://png.pngtree.com/element_our/20190531/ourlarge/pngtree-prohibit-warning-icon-image_1297404.jpg'
                : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShIdVfCkuFUlTzm2y_g6MhAh2tn_gvUkugAA&usqp=CAU',
            method: 'POST',
            headers: {
              Pragma: 'no-cache',
            },
            body: 'Your Body goes here',
          }}
        />
      </View>

      <Text style={{marginVertical: 30, fontSize: 20, textAlign: 'center'}}>
        {props.content ?? ''}
      </Text>
    </View>
  );
}

export default Notify;
const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 40,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});

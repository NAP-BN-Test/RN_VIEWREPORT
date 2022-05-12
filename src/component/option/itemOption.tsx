import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface propsItemOption {
  name: string;
  onPress?: any;
  iconRight: string;
}
function ItemOption(props: propsItemOption) {
  return (
    <View style={{backgroundColor: '#fff'}}>
      <TouchableOpacity
        activeOpacity={0.6}
        style={{
          display: 'flex',
          height: 50,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}
        onPress={props?.onPress}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            height: 50,
          }}>
          <MaterialIcons
            name={props.iconRight}
            size={24}
            color={'gray'}
            style={{marginRight: 20}}
          />
          <Text style={{color: '#000'}}>{props.name}</Text>
        </View>

        <MaterialIcons name={'arrow-forward-ios'} size={13} color={'#000'} />
      </TouchableOpacity>
    </View>
  );
}

export default ItemOption;

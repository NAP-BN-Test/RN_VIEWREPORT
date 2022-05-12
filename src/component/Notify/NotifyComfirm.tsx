import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface propsNoti {
  content: string;
  contentButtonLeft: string;
  contentButtonRight: string;
  onPressButtonLeft: any;
  onPressButtonRigth: any;
}

function NotifyComfirm(props: propsNoti) {
  return (
    <View style={{display: 'flex', flexDirection: 'column'}}>
      <View style={{marginVertical: 5}}>
        <Text style={{marginVertical: 30, fontSize: 20, textAlign: 'center'}}>
          {props.content}
        </Text>
      </View>

      <View>
        <View style={styles.footer}>
          <TouchableOpacity onPress={() => props.onPressButtonRigth()}>
            <Text style={{fontSize: 20}}>{props.contentButtonLeft}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.onPressButtonLeft()}>
            <Text style={{fontSize: 20}}>{props.contentButtonRight}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default NotifyComfirm;
const styles = StyleSheet.create({
  footer: {
    display: 'flex',
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
  },
});

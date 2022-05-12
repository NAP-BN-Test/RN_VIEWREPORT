import React from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import ModalPoup from '../../component/Modal/Modal';
import {postLogout} from '../../features/account';

const Error404 = () => {
  const dispatch = useDispatch();
  const handlePostLogOut = () => dispatch(postLogout());

  const [visible, setVisible] = React.useState(false);
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <Text style={{fontWeight: 'bold', fontSize: 22}}>Error 404</Text>
      <TouchableOpacity onPress={() => handlePostLogOut()}>
        <Text>Logout</Text>
      </TouchableOpacity>

      <ModalPoup visible={visible}>
        <View style={{alignItems: 'center'}}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => setVisible(false)}>
              <Text>Tắt</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text>Ảnh thành công</Text>
        </View>

        <Text style={{marginVertical: 30, fontSize: 20, textAlign: 'center'}}>
          Congratulations registration was successful
        </Text>
      </ModalPoup>

      <Button title="Open Modal" onPress={() => setVisible(true)} />
    </View>
  );
};

export default Error404;
const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 40,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});

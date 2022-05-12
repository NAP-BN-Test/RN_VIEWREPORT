import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import Loading from '../../component/loading/loading';
import ModalPoup from '../../component/Modal/Modal';
import {accountStore, loadingGlobalStore} from '../../features';
import {ScreenHeight, useAppSelector} from '../../redux/hooks';
import AppStackScreen from '../AppStack/AppStackScreen';
import AuthStackScreen from '../Auth/AuthStackScreen';

function RootStackScreen() {
  const resultAccount = useAppSelector(accountStore);
  const LoadingGl = useAppSelector(loadingGlobalStore);
  console.log('LoadingGl', LoadingGl);
  console.log('resultAccount', resultAccount);

  return (
    <View style={styles.container}>
      {resultAccount.token ? <AppStackScreen /> : <AuthStackScreen />}
      {/* <AuthStackScreen /> */}
      <ModalPoup visible={LoadingGl.status}>
        <Loading />
      </ModalPoup>
    </View>
  );
}
export default RootStackScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    height: ScreenHeight,
  },
});

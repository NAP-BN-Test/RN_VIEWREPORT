import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import stylesGlobal from '../../../../assets/css/cssGlobal';
import {accountStore} from '../../../../features';
import {ScreenHeight, useAppSelector} from '../../../../redux/hooks';
function InfoUser({navigation}: any) {
  const resultAccount = useAppSelector(accountStore);
  return (
    <View style={{backgroundColor: '#fff', height: ScreenHeight, flex: 1}}>
      <View
        style={{
          backgroundColor: '#fff',
        }}>
        <TouchableOpacity
          activeOpacity={0.6}
          style={[
            stylesGlobal.box_center_spaceBetween,
            {
              height: 150,
            },
          ]}>
          <View
            style={[
              stylesGlobal.row_center,
              {
                justifyContent: 'flex-end',
                backgroundColor: '#fff',
                height: '100%',
                width: '100%',
              },
            ]}>
            <View
              style={[
                stylesGlobal.flex_center,
                {
                  width: '100%',
                  height: '100%',
                },
              ]}>
              <View
                style={[
                  stylesGlobal.flex_center,
                  {
                    backgroundColor: '#891393cc',
                    height: 70,
                    width: 70,
                    borderRadius: 60,
                    marginBottom: 10,
                  },
                ]}>
                <Text style={{fontSize: 30, color: '#fff'}}>
                  {resultAccount.listuser.username.charAt(0).toUpperCase()}
                </Text>
              </View>
              <Text style={{marginBottom: 5}}>
                {resultAccount.listuser.username}
              </Text>
              <Text style={{marginBottom: 5}}>
                {resultAccount.listuser.email}
              </Text>
            </View>
            {/* <Text>Tài khoản</Text> */}
          </View>
        </TouchableOpacity>
      </View>

      <View
        style={[
          stylesGlobal.flex_center,
          {
            width: '100%',
            marginBottom: 10,
          },
        ]}>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => navigation.navigate('edituser')}
          style={[
            stylesGlobal.flex_center,
            {
              borderRadius: 8,
              borderWidth: 1,
              borderColor: 'gray',
              width: 50,
              height: 30,
            },
          ]}>
          <Text style={{color: '#000', fontWeight: '400'}}>Sửa</Text>
        </TouchableOpacity>
      </View>

      <View style={{marginTop: 20, paddingHorizontal: 20, marginBottom: 20}}>
        <View
          style={{
            width: '100%',
            height: 1,
            opacity: 0.4,
            backgroundColor: '#000',
            //   marginBottom: 20,
          }}></View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginBottom: 10,
            marginTop: 10,
          }}>
          <Text style={{marginRight: 10}}>UserName:</Text>
          <Text style={{color: '#000', fontWeight: '400'}}>
            {resultAccount.listuser.username.toUpperCase()}
          </Text>
        </View>
        <View style={{display: 'flex', flexDirection: 'row', marginBottom: 10}}>
          <Text style={{marginRight: 10}}>Email:</Text>
          <Text style={{color: '#000', fontWeight: '400'}}>
            {resultAccount.listuser.email.toUpperCase()}
          </Text>
        </View>
        <View style={{display: 'flex', flexDirection: 'row', marginBottom: 10}}>
          <Text style={{marginRight: 10}}>Số điện thoại:</Text>
          <Text style={{color: '#000', fontWeight: '400'}}>
            {resultAccount.listuser.phonenumber.toUpperCase()}
          </Text>
        </View>
        <View style={{display: 'flex', flexDirection: 'row', marginBottom: 10}}>
          <Text style={{marginRight: 10}}>Địa chỉ:</Text>
          <Text style={{color: '#000', fontWeight: '400'}}>
            {resultAccount.listuser.address.toUpperCase()}
          </Text>
        </View>

        <View
          style={{
            width: '100%',
            height: 1,
            opacity: 0.4,
            backgroundColor: '#000',
            marginBottom: 20,
          }}></View>

        <View style={{paddingHorizontal: 30}}>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => navigation.navigate('changepassword')}
            style={[
              stylesGlobal.flex_center,
              {
                borderRadius: 8,
                borderWidth: 1,
                borderColor: 'gray',
                width: '100%',
                height: 30,
              },
            ]}>
            <Text style={{color: '#000', fontWeight: '400'}}>Đổi mật khẩu</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default InfoUser;

const styles = StyleSheet.create({});

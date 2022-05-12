import React, {useEffect, useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {changetarget} from '../../types/target';
import ModalPoup from '../Modal/Modal';

interface propsAddChangeTarget {
  visible: boolean;
  handleSetup?: any;
  handleCancel?: any;
  isEdit?: boolean;
  valuetarget: any;
}

function AddChangeTarget(props: propsAddChangeTarget) {
  const [day, setDay] = useState('');
  const [week, setWeek] = useState('');
  const [month, setMonth] = useState('');

  useEffect(() => {
    if (props.valuetarget.listtarget?.length > 0) {
      props.valuetarget.listtarget.map((item: any) => {
        if (item.iddmtarget === 1) {
          setDay(item.moneytarget.toString());
        }

        if (item.iddmtarget === 2) {
          setWeek(item.moneytarget.toString());
        }

        if (item.iddmtarget === 3) {
          setMonth(item.moneytarget.toString());
        }
      });

      // setDay(
      //   valueTarget.filter((item: any) => item.iddmtarget === 1)?.[0].moneytarget,
      // );

      // setWeek(
      //   valueTarget.filter((item: any) => item.iddmtarget === 2)?.[0].moneytarget,
      // );

      // setMonth(
      //   valueTarget.filter((item: any) => item.iddmtarget === 3)?.[0].moneytarget,
      // );
    }
  }, [props.valuetarget.listtarget]);

  return (
    <ModalPoup visible={props.visible}>
      <View style={{marginBottom: 20}}>
        <Text>Ngày</Text>
        <TextInput
          style={{borderBottomColor: 'gray', borderBottomWidth: 1}}
          placeholder="Nhập số tiền"
          onChangeText={text => setDay(text)}
          value={day}
          keyboardType="numeric"
        />
      </View>
      <View style={{marginBottom: 20}}>
        <Text>Tuần</Text>
        <TextInput
          style={{borderBottomColor: 'gray', borderBottomWidth: 1}}
          placeholder="Nhập số tiền"
          value={week}
          keyboardType="numeric"
          onChangeText={(e: any) => setWeek(e)}
        />
      </View>
      <View style={{marginBottom: 20}}>
        <Text>Tháng</Text>
        <TextInput
          style={{borderBottomColor: 'gray', borderBottomWidth: 1}}
          placeholder="Nhập số tiền"
          value={month}
          keyboardType="numeric"
          onChangeText={(e: any) => setMonth(e)}
        />
      </View>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <TouchableOpacity
          style={{
            borderColor: '#555CC4',
            borderWidth: 1,
            padding: 10,
            borderRadius: 10,
            backgroundColor: '#555CC4',
          }}
          onPress={() =>
            props.handleSetup({day: day, week: week, month: month})
          }
          activeOpacity={0.6}>
          <Text style={{marginHorizontal: 20, fontSize: 16, color: '#fff'}}>
            Thiết lập
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            borderColor: '#FF1358',
            borderWidth: 1,
            padding: 10,
            borderRadius: 10,
            backgroundColor: '#FF1358',
          }}
          onPress={props.handleCancel}
          activeOpacity={0.6}>
          <Text style={{marginHorizontal: 20, fontSize: 16, color: '#fff'}}>
            Hủy
          </Text>
        </TouchableOpacity>
      </View>

      {/* <Loading /> */}
    </ModalPoup>
  );
}

export default AddChangeTarget;

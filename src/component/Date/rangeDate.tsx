import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import moment from 'moment';
import {DatePickerModal} from 'react-native-paper-dates';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TextInput} from 'react-native-paper';
import colors from '../../assets/css/color';
interface propsRangeDate {
  onConfirm?: any;
  value?: any;
}

function RangeDate(props: propsRangeDate) {
  const [range, setRange] = useState(
    {} as {startDate: any; endDate: any} | any,
  );
  const [open, setOpen] = React.useState(false);

  console.log('range', range);
  console.log('props', props);
  const onConfirm = (params: any) => {
    console.log('startDate', params.startDate);
    console.log('endDate', params.endDate);
    setRange({startDate: params.startDate, endDate: params.endDate});
    setOpen(false);
    props.onConfirm({startDate: params.startDate, endDate: params.endDate});
  };

  useEffect(() => {
    setRange({});
  }, [props.value]);

  //   const onDismiss = () => {
  //     console.log('onConfirm');
  //   };

  const onDismiss = React.useCallback(() => {
    setOpen(false);
  }, [setOpen]);
  return (
    <View>
      <TextInput
        mode="flat"
        theme={{
          colors: {
            background: 'white',
          },
        }}
        editable={false}
        label={'Chọn ngày'}
        right={
          <TextInput.Icon
            style={{marginRight: 20}}
            name={() => (
              <Ionicons
                name={'calendar-sharp'}
                size={18}
                color={colors.redcustom}
              />
            )}
            onPress={() => {
              setOpen(true);
            }}
          />
        }
        value={
          range.startDate
            ? moment(range.startDate).format('DD-MM-YYYY') +
              ' đến ' +
              moment(range.endDate).format('DD-MM-YYYY')
            : ''
        }
      />
      <DatePickerModal
        locale="en"
        mode="range"
        visible={open}
        onDismiss={onDismiss}
        startDate={range.startDate}
        endDate={range.endDate}
        onConfirm={onConfirm}
        // validRange={{
        //   startDate: new Date(2021, 1, 2),  // optional
        //   endDate: new Date(), // optional
        //   disabledDates: [new Date()] // optional
        // }}
        // onChange={} // same props as onConfirm but triggered without confirmed by user
        saveLabel="Lưu" // optional
        // uppercase={false} // optional, default is true
        label="Chọn ngày" // optional
        startLabel="Từ" // optional
        endLabel="Đến" // optional
        //   animationType="slide" // optional, default is slide on ios/android and none on web
      />
    </View>
  );
}

export default RangeDate;
const styles = StyleSheet.create({
  container: {
    // margin: 50,
  },
});

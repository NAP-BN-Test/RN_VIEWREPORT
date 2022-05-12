import React, {useEffect, useState} from 'react';
import {Button, Text, View} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconEntypo from 'react-native-vector-icons/Entypo';
import {
  getParsedDateTimeSS,
  useAppDispatch,
  useAppSelector,
} from '../../../redux/hooks';
import {
  getSpendingByDay,
  getSpendingByMonth,
  getSpendingByWeek,
  postDeleteSpending,
  postEditSpending,
  postSpendingByID,
} from '../../../features/spending';
import {spendingStore} from '../../../features';
import NotifiToast from '../../../component/notifiToast/toast';
import ModalPoup from '../../../component/Modal/Modal';
import Notify from '../../../component/Notify/Notify';
const EditSpending = ({navigation: {goBack}, ...props}: any) => {
  console.log('params', props.route.params.item);

  const SpendingBD = useAppSelector(spendingStore);
  const [namect, setnamect] = useState(() => SpendingBD.listspending[0].namect);
  const [moneyct, setMoneyct] = useState(() =>
    SpendingBD.listspending[0].moneyct.toString(),
  );
  const [visible, setVisible] = useState(false);
  const [content, setContent] = useState('');
  const dispatch = useAppDispatch();
  function handleDelete() {
    dispatch(postDeleteSpending({id: [SpendingBD.listspending[0].id]}));
    goBack();
  }

  function handleSubmit() {
    if ((moneyct || namect) == '') {
      NotifiToast('Vui lòng điền đầy đủ thông tin');
    } else {
      dispatch(
        postEditSpending({
          id: props.route.params.item.id,
          timect: new Date(),
          namect: namect,
          moneyct: Number(moneyct),
        }),
      ).then(res => {
        console.log('res sửa', res.payload);
        if (
          res.payload.overtargetWeek === true ||
          res.payload.overtargetDay === true ||
          res.payload.overtargetMonth === true
        ) {
          if (
            res.payload.overtargetWeek === true &&
            res.payload.overtargetDay === true &&
            res.payload.overtargetMonth === true
          ) {
            setContent(
              'Cảnh báo: Đã vượt quá giới hạn Target Ngày, Tuần và Tháng',
            );
          }

          if (
            res.payload.overtargetWeek === false &&
            res.payload.overtargetDay === true &&
            res.payload.overtargetMonth === false
          ) {
            setContent('Cảnh báo: Đã vượt quá giới hạn Target Ngày');
          }

          if (
            res.payload.overtargetWeek === true &&
            res.payload.overtargetDay === false &&
            res.payload.overtargetMonth === false
          ) {
            setContent('Cảnh báo: Đã vượt quá giới hạn Target Tuần');
          }

          if (
            res.payload.overtargetWeek === false &&
            res.payload.overtargetDay === false &&
            res.payload.overtargetMonth === true
          ) {
            setContent('Cảnh báo: Đã vượt quá giới hạn Target Tháng');
          }

          if (
            res.payload.overtargetWeek === false &&
            res.payload.overtargetDay === false &&
            res.payload.overtargetMonth === true
          ) {
            setContent('Cảnh báo: Đã vượt quá giới hạn Target Tháng');
          }

          if (
            res.payload.overtargetWeek === false &&
            res.payload.overtargetDay === true &&
            res.payload.overtargetMonth === true
          ) {
            setContent('Cảnh báo: Đã vượt quá giới hạn Target Ngày và Tháng');
          }

          if (
            res.payload.overtargetWeek === true &&
            res.payload.overtargetDay === true &&
            res.payload.overtargetMonth === false
          ) {
            setContent('Cảnh báo: Đã vượt quá giới hạn Target Ngày và Tuần');
          }

          if (
            res.payload.overtargetWeek === true &&
            res.payload.overtargetDay === false &&
            res.payload.overtargetMonth === true
          ) {
            setContent('Cảnh báo: Đã vượt quá giới hạn Target Tuần và Tháng');
          }

          setVisible(true);
        }
      });


      switch (props.route.params.key) {
        case 0:
          dispatch(getSpendingByDay());
          break;
  
        case 1:
          dispatch(getSpendingByWeek());
          break;
  
        case 2:
          dispatch(getSpendingByMonth());
          break;
  
        case 3:
          dispatch(getSpendingByDay());
          break;
  
        default:
          break;
      }
      goBack();
    }

    console.log({
      id: SpendingBD.listspending[0].id,
      timect: new Date(),
      namect: namect,
      moneyct: Number(moneyct),
    });
  }
  useEffect(() => {
    setnamect(props.route.params.item.namect);
    setMoneyct(props.route.params.item.moneyct.toString());
  }, [props.route.params.item.id]);
  return (
    <View style={[styles.container, {padding: 20}]}>
      <View>
        {/* <Text style={styles.title}>Forgot Pass</Text> */}

        <TextInput
          style={styles.input}
          placeholder="Tên chi tiêu"
          placeholderTextColor="#aaaaaa"
          onChangeText={text => setnamect(text)}
          value={namect}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Số tiền"
          placeholderTextColor="#aaaaaa"
          onChangeText={text => setMoneyct(text)}
          value={moneyct}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          keyboardType="number-pad"
        />

        {/* <TextInput
          style={styles.input}
          placeholder="Tên chi tiêu"
          placeholderTextColor="#aaaaaa"
          onChangeText={text => setTimect(text)}
          value={timect}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        /> */}

        <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
          <Text style={styles.buttonTitle}>Sửa</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => handleDelete()}>
          <Text style={styles.buttonTitle}>Xóa</Text>
        </TouchableOpacity>
      </View>

      <ModalPoup visible={visible}>
        <Notify
          onPress={() => setVisible(false)}
          content={content}
          type="warning"
        />
      </ModalPoup>
    </View>
  );
};

export default EditSpending;

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

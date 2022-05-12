import moment from 'moment';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Platform,
  RefreshControl,
  StyleSheet,
  View,
} from 'react-native';
import colors from '../../../assets/css/color';
import stylesGlobal from '../../../assets/css/cssGlobal';
import fonts from '../../../assets/font/fonts';
import RangeDate from '../../../component/Date/rangeDate';
import Loading from '../../../component/loading/loading';
import {renderRow} from '../../../component/report/itemRowReport';
import SearchDropDown from '../../../component/SearchDropDown/SearchDropDown';
import {getSpendingByDateToDate} from '../../../features/spending';

import {
  getParsedDate,
  getParsedTime,
  useAppDispatch,
} from '../../../redux/hooks';
import {Text, TouchableOpacity} from 'react-native';
const wait = (timeout: any) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};
function ReportReceivable({navigation, route}: any) {
  const dispatch = useAppDispatch();
  const [refreshing, setRefreshing] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [valueCus, setValueCus] = useState(String);

  const onPressCus = (value: any) => {
    setValueCus(value);
  };

  const onChangeTextCus = (value: any) => {
    setValueCus(value);
  };

  console.log('route', route);
  console.log('navigation', navigation);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setRefreshing(false);

    setLoading(true);
    wait(2000).then(() => {
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    setLoading(true);
    wait(2000).then(() => {
      setLoading(false);
    });
  }, [navigation]);

  const renderRow = ({item}: any, navigation: any) => (
    <TouchableOpacity
      activeOpacity={0.6}
      key={item.id}
      style={styles.itemContainer}
      onPress={() => {
        // dispatch(postSpendingByID({id: item.id}));
        navigation.push('inforeportReceivable', {item});
      }}>
      <View style={styles.itemSubContainer}>
        <View style={styles.itemContent}>
          <Text
            style={[styles.itemBrand, {fontSize: 16, color: colors.redcustom}]}>
            {item.tenkhachhang}
          </Text>
          <View style={[styles.itemMetaContainer, {marginTop: 0}]}>
            <Text style={styles.itemSubtitle} numberOfLines={1}>
              {item.madh}
            </Text>

            <Text style={styles.itemSubtitle}>{item.tenhang}</Text>
          </View>

          <View style={[styles.itemMetaContainer, {marginTop: 0}]}>
            <Text style={styles.itemSubtitle} numberOfLines={1}>
              Nơi đi: {item.noidi}
            </Text>
            <Text style={styles.itemSubtitle} numberOfLines={1}>
              Nơi đên: {item.noiden}
            </Text>
          </View>

          <View style={[styles.itemMetaContainer, {marginTop: 0}]}>
            <Text style={styles.itemSubtitle} numberOfLines={1}>
              Ngày mở:{' '}
              {getParsedDate(item.ngaymo) !=
              getParsedDate(new Date().toLocaleDateString('en-US'))
                ? getParsedDate(item.ngaymo)
                : 'Hôm nay ' + getParsedTime(item.ngaymo)}
            </Text>
          </View>
          <View style={styles.itemMetaContainer}>
            {item.id && (
              <View style={[styles.badge, {backgroundColor: colors.redcustom}]}>
                <Text
                  style={{fontSize: 10, color: colors.white}}
                  //   styleName="bright"
                >
                  Số lượng: {item.soluong.toLocaleString('vi-VN')}
                </Text>
              </View>
            )}
            <Text style={[styles.itemPrice, {color: colors.redcustom}]}>
              {/* {currency(SpendingBD.totalmoney)}  */}
              {item.sotien.toLocaleString('vi-VN')}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.itemHr} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={{paddingHorizontal: 10}}>
        <RangeDate
          onConfirm={(e: any) => {
            console.log('onConfirm', e);
            // dispatch(
            //   getSpendingByDateToDate({
            //     datestart: moment(e.startDate)
            //       .format('YYYY-MM-DD')
            //       .toString(),
            //     dateend: moment(e.endDate).format('YYYY-MM-DD').toString(),
            //   }),
            // );
          }}
        />

        <View
          style={
            Platform.OS === 'ios'
              ? {
                  height: 50,
                  justifyContent: 'center',
                  marginVertical: 10,
                  zIndex: 2,
                }
              : {
                  height: 50,
                  justifyContent: 'center',
                  marginVertical: 10,
                }
          }>
          <SearchDropDown
            label="Khách hàng"
            value={valueCus}
            data={listports}
            onPress={onPressCus}
            onChangeText={onChangeTextCus}
          />
        </View>
      </View>
      {loading ? (
        // Loading
        <View style={[stylesGlobal.flex_center, {height: '80%'}]}>
          <Loading />
        </View>
      ) : (
        <View style={styles.ScrollView_container}>
          <FlatList
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, idx) => item.id.toString()}
            style={{backgroundColor: colors.white, paddingHorizontal: 15}}
            data={dataTest}
            renderItem={item => renderRow(item, navigation)}
          />
        </View>
      )}
    </View>
  );
}

export default ReportReceivable;
const styles = StyleSheet.create({
  ScrollView_container: {
    flex: 1,
    backgroundColor: colors.bluish,
    paddingHorizontal: 0,
    // paddingTop: 20,
  },

  bgImage: {
    flex: 1,
    width: '100%',
    height: '113%',
    // marginHorizontal: -20,
  },

  container: {
    // display: 'flex',
    // flexDirection: 'column',
    flex: 1,
    // backgroundColor: colors.bluish,
  },

  demoItem: {
    marginVertical: 15,
  },

  itemContainer: {
    backgroundColor: 'white',
  },
  itemSubContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  itemImage: {
    height: 100,
    width: 100,
  },
  itemContent: {
    flex: 1,
    // paddingLeft: 15,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },
  itemBrand: {
    fontSize: 14,
    color: '#617ae1',
    paddingBottom: 5,
    // fontWeight: '600',
    fontFamily: fonts.primaryRegular,
  },
  itemTitle: {
    fontSize: 16,
    color: '#5F5F5F',
    textTransform: 'uppercase',
    fontFamily: fonts.primaryBold,
  },
  itemSubtitle: {
    fontSize: 12,
    color: '#a4a4a4',
    fontFamily: fonts.primaryRegular,
  },
  itemMetaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  itemPrice: {
    fontSize: 15,
    color: '#5f5f5f',
    textAlign: 'right',
    fontFamily: fonts.primaryRegular,
  },
  itemHr: {
    flex: 1,
    height: 1,
    backgroundColor: '#e3e3e3',
    marginRight: -15,
  },
  badge: {
    backgroundColor: colors.secondary,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});

export const dataTest = [
  {
    id: 1,
    makhachhang: 'KH1',
    tenkhachhang: 'khach hang 01',
    madh: 'DH01',
    tenhang: 'Hàng loại 1',
    sotien: 1000000,
    ngaymo: '09/05/2022',
    soluong: '10',
    noidi: 'Bắc Ninh',
    noiden: 'Cà Mau',
    sobill: 'DHL001',
    ghichu: '123',
    cothue: true,
    tttt: false,
    phantramthue: 8,
    tiensauthue: 2000000,
    loinhuan: 2000000,
  },
  {
    id: 2,
    makhachhang: 'KH2',
    tenkhachhang: 'khach hang 02',
    madh: 'DH02',
    tenhang: 'Hàng loại 2',
    sotien: 6000000,
    ngaymo: '05/12/2022',
    soluong: '20',
    noidi: 'Bắc Ninh',
    noiden: 'Cà Mau',
    sobill: 'DHL002',
    ghichu: '',
    cothue: false,
    tttt: false,
    phantramthue: 0,
    tiensauthue: 6800000,
    loinhuan: 2000000,
  },

  {
    id: 3,
    makhachhang: 'KH3',
    tenkhachhang: 'khach hang 03',
    madh: 'DH03',
    tenhang: 'Hàng loại 3',
    ngaymo: '09/05/2022',
    sotien: 2000000,
    soluong: '30',
    noidi: 'Bắc Ninh',
    noiden: 'Cà Mau',
    sobill: 'DHL003',
    ghichu: '',
    cothue: true,
    tttt: false,
    phantramthue: 8,
    tiensauthue: 6800000,
    loinhuan: 2000000,
  },

  {
    id: 4,
    makhachhang: 'KH4',
    tenkhachhang: 'khach hang 04',
    madh: 'DH04',
    tenhang: 'Hàng loại 4',
    ngaymo: '08/05/2022',
    sotien: 6000,
    soluong: '40',
    noidi: 'Bắc Ninh',
    noiden: 'Cà Mau',
    sobill: 'DHL004',
    ghichu: '',
    cothue: true,
    tttt: false,
    phantramthue: 8,
    tiensauthue: 6800000,
    loinhuan: 2000000,
  },
];

export const listports = ['Kh1', 'Kh2', 'KH3', 'KH4'];

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
import SearchDropDown from '../../../component/SearchDropDown/SearchDropDown';
import {
  getParsedDate,
  getParsedTime,
  useAppDispatch,
  useAppSelector,
} from '../../../redux/hooks';
import {Text, TouchableOpacity} from 'react-native';
import {customerStore, nccStore, reportStore} from '../../../features';
import {postcongnophaitra} from '../../../features/report';
import {useIsFocused} from '@react-navigation/native';
const wait = (timeout: any) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};
function ReportDebitReturn({navigation, route}: any) {
  const isFocused = useIsFocused();
  const dispatch = useAppDispatch();
  const [refreshing, setRefreshing] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [valueCus, setValueCus] = useState(String);
  const [datatruyenvao, setDatatruyenvao] = useState({} as any);
  const congnotra = useAppSelector(reportStore);
  const [removedate, setRemovedate] = useState(1);
  const [IDKH, setIDKH] = useState(null as any);
  const [rangdate, setRangdate] = useState({} as any);
  const [listData, setListData] = useState([] as any);
  const ncc = useAppSelector(nccStore);
  console.log('congnotra.listreport', congnotra.listreport);

  const onPressCus = (value: any) => {
    setValueCus(value);

    console.log(value);
    let obj: any = ncc.listCus.find(o => o.NameVi === value);
    console.log('obj', obj.Id);
    setIDKH(obj.Id);

    if (rangdate.tungay) {
      dispatch(
        postcongnophaitra({
          idkhachhang: obj.Id,
        }),
      );
    } else {
      dispatch(
        postcongnophaitra({
          idkhachhang: obj.Id,
          tungay: rangdate.tungay,
          denngay: rangdate.denngay,
        }),
      );
    }
  };

  const onChangeTextCus = (value: any) => {
    setValueCus(value);
  };

  console.log('route', route);
  console.log('navigation', navigation);
  const onRefresh = React.useCallback(() => {
    setValueCus('');
    setIDKH(null);
    setRangdate({});
    setRemovedate(pre => pre + 1);
    setRefreshing(true);
    setRefreshing(false);
    dispatch(postcongnophaitra({}));
    setLoading(true);
    wait(2000).then(() => {
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // The screen is focused
      dispatch(postcongnophaitra(datatruyenvao));

      setLoading(true);
      console.log('focused');
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return () => unsubscribe.remove();
  }, [navigation]);

  useEffect(() => {
    let arrName = [] as any;
    async function getNameNcc() {
      ncc.listCus.map(e => {
        arrName.push(e.NameVi);
      });
    }

    getNameNcc();

    setListData(arrName);
  }, [ncc.listCus]);

  const renderRow = ({item}: any, navigation: any) => (
    <TouchableOpacity
      activeOpacity={0.6}
      key={item.Id}
      style={styles.itemContainer}
      onPress={() => {
        // dispatch(postSpendingByID({id: item.id}));
        navigation.push('inforeportDebitReturn', {item});
      }}>
      <View style={styles.itemSubContainer}>
        {/* <Image source={{uri: item.image}} style={styles.itemImage} /> */}
        <View style={styles.itemContent}>
          <Text style={[styles.itemBrand, {fontSize: 16, color: colors.black}]}>
            {/* {item.CustomerName === null ? 'T??n kh??ch h??ng' : item.CustomerName} */}
            {ncc.listCus
              ?.filter(e => item?.Idreceiver === e.Id)[0]
              ?.NameVi?.toUpperCase()}
          </Text>
          <View style={[styles.itemMetaContainer, {marginTop: 0}]}>
            {/* <Text style={styles.itemTitle}>Ghi ch??:</Text> */}
            <Text style={styles.itemSubtitle} numberOfLines={1}>
              M?? h??ng: {item.CodeJob}
            </Text>

            <Text style={styles.itemSubtitle}>
              {/* {currency(SpendingBD.totalmoney)}  */}
              T??n h??ng: {item.GoodsDescription}
            </Text>
          </View>

          <View style={[styles.itemMetaContainer, {marginTop: 0}]}>
            {/* <Text style={styles.itemTitle}>Ghi ch??:</Text> */}
            <Text style={styles.itemSubtitle} numberOfLines={1}>
              N??i ??i: {item.PlaceOfDelivery}
            </Text>
            <Text style={styles.itemSubtitle} numberOfLines={1}>
              N??i ?????n: {item.PlaceOfReceipt}
            </Text>
          </View>

          <View style={[styles.itemMetaContainer, {marginTop: 0}]}>
            {/* <Text style={styles.itemTitle}>Ghi ch??:</Text> */}
            <Text style={styles.itemSubtitle} numberOfLines={1}>
              Ng??y m???:{' '}
              {getParsedDate(item.OpenDate) !=
              getParsedDate(new Date().toLocaleDateString('en-US'))
                ? getParsedDate(item.OpenDate)
                : 'H??m nay ' + getParsedTime(item.OpenDate)}
            </Text>
          </View>
          <View style={styles.itemMetaContainer}>
            <Text style={[styles.itemPrice, {color: colors.black}]}>
              {/* {currency(SpendingBD.totalmoney)}  */}
              Gi?? mua: {item.GiaMuaSauThue?.toLocaleString('vi-VN')}
            </Text>
            {/* <Text style={[styles.itemPrice, {color: colors.black}]}>
             
              Gi?? b??n: {item.GiaBanSauThue.toLocaleString('vi-VN')}
            </Text> */}
          </View>
          {/* <View style={styles.itemMetaContainer}>
            {item.id && (
              <View style={[styles.badge, {backgroundColor: colors.black}]}>
                <Text
                  style={{fontSize: 10, color: colors.white}}
                  //   styleName="bright"
                >
                  S??? l?????ng: {item.SoLuongHang.toLocaleString('vi-VN')}
                </Text>
              </View>
            )}
            <Text style={[styles.itemPrice, {color: colors.black}]}>
              L???i nhu???n: {item.LoiNhuan.toLocaleString('vi-VN')}
            </Text>
          </View> */}
        </View>
      </View>
      <View style={styles.itemHr} />
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <View style={{paddingHorizontal: 10}}>
        <RangeDate
          value={removedate}
          onConfirm={(e: any) => {
            console.log('onConfirm', e);
            setRangdate({
              tungay: moment(e.startDate).format('YYYY-MM-DD').toString(),
              denngay: moment(e.endDate).format('YYYY-MM-DD').toString(),
            });
            if (IDKH) {
              dispatch(
                postcongnophaitra({
                  idkhachhang: IDKH,
                  tungay: moment(e.startDate).format('YYYY-MM-DD').toString(),
                  denngay: moment(e.endDate).format('YYYY-MM-DD').toString(),
                }),
              );
            } else {
              dispatch(
                postcongnophaitra({
                  tungay: moment(e.startDate).format('YYYY-MM-DD').toString(),
                  denngay: moment(e.endDate).format('YYYY-MM-DD').toString(),
                }),
              );
            }
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
            label="Nh?? cung c???p"
            value={valueCus}
            data={listData}
            onPress={onPressCus}
            onChangeText={onChangeTextCus}
          />
        </View>
      </View>
      {congnotra.loading ? (
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
            keyExtractor={(item, idx) => item.Id.toString()}
            style={{backgroundColor: colors.white, paddingHorizontal: 15}}
            data={congnotra.listreport}
            renderItem={item => renderRow(item, navigation)}
          />
          <View style={styles.itemBottom}>
            <View style={styles.itemMetaContainerBottom}>
              <View style={styles.itemMetaContainer}>
                <Text style={[styles.itemPrice, {color: colors.black}]}>
                  T???ng tr???:
                </Text>
                <Text style={[styles.itemPrice, {color: colors.black}]}>
                  {congnotra.listreport
                    .reduce((total: any, value: any) => {
                      return total + Number(value.GiaMuaSauThue);
                    }, 0)
                    ?.toLocaleString('vi-VN')}
                </Text>
              </View>
            </View>
          </View>
        </View>
      )}
    </View>
  );
}

export default ReportDebitReturn;

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
  itemBottom: {
    backgroundColor: 'white',
    marginTop: 10,

    paddingHorizontal: 20,
    paddingBottom: 10,
  },

  itemMetaContainerBottom: {
    flexDirection: 'column',
    justifyContent: 'space-between',
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
    fontWeight: '600',
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
    color: '#000',
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

export const listports = ['Kh1', 'Kh2', 'KH3', 'KH4'];

import moment from 'moment';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import colors from '../../../assets/css/color';
import stylesGlobal from '../../../assets/css/cssGlobal';
import fonts from '../../../assets/font/fonts';
import RangeDate from '../../../component/Date/rangeDate';
import Loading from '../../../component/loading/loading';
import RNSRadioGroup from '../../../component/radiogroup/radiogroupCpn';
import {spendingStore} from '../../../features';
import {
  getSpendingByDateToDate,
  getSpendingByDay,
  getSpendingByMonth,
  getSpendingByWeek,
  postSpendingByID,
} from '../../../features/spending';
import {
  getParsedDate,
  getParsedDateTime,
  getParsedTime,
  useAppDispatch,
} from '../../../redux/hooks';
const wait = (timeout: any) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};
function Home({navigation, route}: any) {
  const dispatch = useAppDispatch();
  const [indexSelect, setIndexSelect] = useState(0);
  const [refreshing, setRefreshing] = React.useState(false);
  const SpendingBD = useSelector(spendingStore);
  // console.log('SpendingBD', SpendingBD);
  console.log('route', route);
  console.log('navigation', navigation);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    switch (indexSelect) {
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
    setRefreshing(false);
    // wait(2000).then(() => {
      
    // });
  }, []);
  useEffect(() => {
    switch (indexSelect) {
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
  }, [indexSelect, navigation]);

  const renderRow = ({item}: any) => (
    <TouchableOpacity
      activeOpacity={0.6}
      key={item.id}
      style={styles.itemContainer}
      onPress={() => {
        // dispatch(postSpendingByID({id: item.id}));
        navigation.navigate('editsending', {key: indexSelect, item});
      }}>
      <View style={styles.itemSubContainer}>
        {/* <Image source={{uri: item.image}} style={styles.itemImage} /> */}
        <View style={styles.itemContent}>
          <Text style={[styles.itemBrand, {fontSize: 16}]}>{item.namect}</Text>
          <View>
            {/* <Text style={styles.itemTitle}>Ghi chú:</Text> */}
            <Text style={styles.itemSubtitle} numberOfLines={1}>
              Không có ghi chú
            </Text>
          </View>
          <View style={styles.itemMetaContainer}>
            {item.id && (
              <View style={[styles.badge, {backgroundColor: colors.green}]}>
                <Text
                  style={{fontSize: 10, color: colors.white}}
                  //   styleName="bright"
                >
                  {getParsedDate(item.timect) ===
                  getParsedDate(new Date().toLocaleDateString('en-US'))
                    ? indexSelect === 0
                      ? getParsedTime(item.timect)
                      : 'Hôm nay ' + getParsedTime(item.timect)
                    : getParsedDateTime(item.timect)}
                </Text>
              </View>
            )}
            <Text style={styles.itemPrice}>
              {/* {currency(SpendingBD.totalmoney)}  */}
              {item.moneyct.toLocaleString('vi-VN')}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.itemHr} />
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      {/* <ImageBackground
        source={require('../../../assets/img/background.png')}
        style={styles.bgImage}
        resizeMode="cover"> */}
      <View style={{height: 50}}>
        <RNSRadioGroup
          underline
          //   style={styles.demoItem}
          items={['Hôm nay', 'Tuần', 'Tháng', 'Khoảng ngày']}
          selectedIndex={indexSelect}
          onChange={(index: any) => setIndexSelect(index)}
        />
      </View>

      {/* RangeDate */}

      {/* Render danh sách */}

      {SpendingBD.loading ? (
        // Loading
        <View style={[stylesGlobal.flex_center, {height: '80%'}]}>
          <Loading />
        </View>
      ) : (
        <View style={styles.ScrollView_container}>
          {indexSelect === 3 && (
            <View style={{marginBottom: 10}}>
              <RangeDate
                onConfirm={(e: any) => {
                  console.log('onConfirm', e);
                  dispatch(
                    getSpendingByDateToDate({
                      datestart: moment(e.startDate)
                        .format('YYYY-MM-DD')
                        .toString(),
                      dateend: moment(e.endDate)
                        .format('YYYY-MM-DD')
                        .toString(),
                    }),
                  );
                }}
              />
            </View>
          )}
          <FlatList
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, idx) => item.id.toString()}
            style={{backgroundColor: colors.white, paddingHorizontal: 15}}
            data={SpendingBD.listspending}
            renderItem={renderRow}
          />
        </View>
      )}

      {/* </ImageBackground> */}
    </View>
  );
}

export default Home;
const styles = StyleSheet.create({
  ScrollView_container: {
    flex: 1,
    backgroundColor: colors.bluish,
    paddingHorizontal: 15,
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

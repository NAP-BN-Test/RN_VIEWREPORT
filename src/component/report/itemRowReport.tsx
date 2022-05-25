import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import colors from '../../assets/css/color';
import fonts from '../../assets/font/fonts';
import { getParsedDate, getParsedTime } from '../../redux/hooks';

export const renderRow = ({item}: any, navigation: any) => (
  <TouchableOpacity
    activeOpacity={0.6}
    key={item.id}
    style={styles.itemContainer}
    onPress={() => {
      // dispatch(postSpendingByID({id: item.id}));
      navigation.push('inforeport', {item});
    }}>
    <View style={styles.itemSubContainer}>
      {/* <Image source={{uri: item.image}} style={styles.itemImage} /> */}
      <View style={styles.itemContent}>
        <Text
          style={[styles.itemBrand, {fontSize: 16, color: colors.redcustom}]}>
          {item.tenkhachhang}
        </Text>
        <View style={[styles.itemMetaContainer, {marginTop: 0}]}>
          {/* <Text style={styles.itemTitle}>Ghi chú:</Text> */}
          <Text style={styles.itemSubtitle} numberOfLines={1}>
            {item.madh}
          </Text>

          <Text style={styles.itemSubtitle}>
            {/* {currency(SpendingBD.totalmoney)}  */}
            {item.tenhang}
          </Text>
        </View>

        <View style={[styles.itemMetaContainer, {marginTop: 0}]}>
          {/* <Text style={styles.itemTitle}>Ghi chú:</Text> */}
          <Text style={styles.itemSubtitle} numberOfLines={1}>
            Nơi đi: {item.noidi}
          </Text>
          <Text style={styles.itemSubtitle} numberOfLines={1}>
            Nơi đến: {item.noiden}
          </Text>
        </View>

        <View style={[styles.itemMetaContainer, {marginTop: 0}]}>
          {/* <Text style={styles.itemTitle}>Ghi chú:</Text> */}
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

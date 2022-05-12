import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from '../../../assets/css/color';
import fonts from '../../../assets/font/fonts';
import {getParsedDate, getParsedTime} from '../../../redux/hooks';

function InforeportDebitReturn({navigation: {goBack}, ...props}: any) {
  console.log(props.route.params.item);
  console.log(props.route);

  return (
    <ScrollView style={styles.itemContainer}>
      <Text style={styles.title}>THÔNG TIN CHUNG</Text>
      <View style={styles.itemHr} />
      <View style={styles.itemSubContainer}>
        <View style={styles.itemContent}>
          <View style={[styles.itemMetaContainer]}>
            <Text style={styles.itemSubtitle}>Tên khách hàng</Text>

            <Text style={[{fontSize: 16, color: colors.redcustom}]}>
              {props.route.params.item.tenkhachhang}
            </Text>
          </View>

          <View style={[styles.itemMetaContainer]}>
            <Text style={styles.itemSubtitle}>Mã đơn</Text>

            <Text style={styles.itemSubtitle} numberOfLines={1}>
              {props.route.params.item.madh}
            </Text>
          </View>

          <View style={[styles.itemMetaContainer]}>
            <Text style={styles.itemSubtitle} numberOfLines={1}>
              Tên hàng
            </Text>

            <Text style={styles.itemSubtitle}>
              {props.route.params.item.tenhang}
            </Text>
          </View>

          <View style={[styles.itemMetaContainer]}>
            <Text style={styles.itemSubtitle} numberOfLines={1}>
              Số lượng
            </Text>

            <Text style={styles.itemSubtitle}>
              {props.route.params.item.soluong.toLocaleString('vi-VN')}
            </Text>
          </View>

          <View style={[styles.itemMetaContainer]}>
            <Text style={styles.itemSubtitle} numberOfLines={1}>
              Nơi đi
            </Text>
            <Text style={styles.itemSubtitle} numberOfLines={1}>
              {props.route.params.item.noidi}
            </Text>
          </View>

          <View style={[styles.itemMetaContainer]}>
            <Text style={styles.itemSubtitle} numberOfLines={1}>
              Nơi đên
            </Text>
            <Text style={styles.itemSubtitle} numberOfLines={1}>
              {props.route.params.item.noiden}
            </Text>
          </View>

          <View style={[styles.itemMetaContainer]}>
            <Text style={styles.itemSubtitle} numberOfLines={1}>
              Số bill
            </Text>
            <Text style={styles.itemSubtitle} numberOfLines={1}>
              {props.route.params.item.sobill}
            </Text>
          </View>

          <View style={[styles.itemMetaContainer]}>
            <Text style={styles.itemSubtitle}>Ngày mở</Text>
            <Text style={styles.itemSubtitle} numberOfLines={1}>
              {getParsedDate(props.route.params.item.ngaymo) !=
              getParsedDate(new Date().toLocaleDateString('en-US'))
                ? getParsedDate(props.route.params.item.ngaymo)
                : 'Hôm nay ' + getParsedTime(props.route.params.item.ngaymo)}
            </Text>
          </View>

          <View style={[styles.itemMetaContainer]}>
            <Text style={styles.itemSubtitle} numberOfLines={1}>
              Ghi chú
            </Text>
            <Text style={styles.itemSubtitle} numberOfLines={1}>
              {props.route.params.item.ghichu}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.itemHr} />
      <Text style={styles.title}>GIÁ BÁN</Text>
      <View style={styles.itemHr} />
      <View style={styles.itemSubContainer}>
        <View style={styles.itemContent}>
          <View style={styles.itemMetaContainer}>
            <Text style={styles.itemSubtitle} numberOfLines={1}>
              Số tiền
            </Text>
            <Text style={[styles.itemPrice, {color: colors.redcustom}]}>
              {props.route.params.item.sotien.toLocaleString('vi-VN')}
            </Text>
          </View>

          <View style={[styles.itemMetaContainer]}>
            <Text style={styles.itemSubtitle} numberOfLines={1}>
              Thuế
            </Text>

            <Text style={styles.itemSubtitle}>
              {props.route.params.item.cothue ? 'YES' : 'NO'}
            </Text>
          </View>

          <View style={[styles.itemMetaContainer]}>
            <Text style={styles.itemSubtitle} numberOfLines={1}>
              Phần trăm thuế
            </Text>
            <Text style={styles.itemSubtitle} numberOfLines={1}>
              {props.route.params.item.phantramthue}
            </Text>
          </View>

          <View style={styles.itemMetaContainer}>
            <Text style={styles.itemSubtitle} numberOfLines={1}>
              Tiền sau thuế
            </Text>
            <Text style={[styles.itemPrice, {color: colors.redcustom}]}>
              {props.route.params.item.tiensauthue.toLocaleString('vi-VN')}
            </Text>
          </View>

          <View style={[styles.itemMetaContainer]}>
            <Text style={styles.itemSubtitle} numberOfLines={1}>
              TTTT
            </Text>

            <Text style={styles.itemSubtitle}>
              {props.route.params.item.tttt ? 'YES' : 'NO'}
            </Text>
          </View>
        </View>
      </View>

    </ScrollView>
  );
}

export default InforeportDebitReturn;
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
    fontSize: 14,
    color: '#a4a4a4',
    fontFamily: fonts.primaryRegular,
  },
  itemMetaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },
  itemPrice: {
    fontSize: 14,
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

  title: {
    fontSize: 20,
    color: colors.black,
    paddingVertical: 10,
    paddingHorizontal: 10,
    textAlign: 'center',
    fontFamily: fonts.primaryBold,
  },
});

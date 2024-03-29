import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import colors from '../../../assets/css/color';
import fonts from '../../../assets/font/fonts';
import {
  getParsedDate,
  getParsedTime,
  useAppSelector,
} from '../../../redux/hooks';
import {getdonhang} from '../../../features/report';
import {customerStore, nccStore, reportStore} from '../../../features';
import Loading from '../../loading/loading';
import stylesGlobal from '../../../assets/css/cssGlobal';
import moment from 'moment';
function InforeportDebitReturn({navigation: {goBack}, ...props}: any) {
  console.log(props.route.params.item);
  console.log(props.route);
  const dispatch = useDispatch();
  const ncc = useAppSelector(nccStore);
  const customer = useAppSelector(customerStore);

  useEffect(() => {
    if (props.route.params.item.Id) {
      dispatch(getdonhang({id: props.route.params.item.Id}));
    }
  }, [props.route.params.item.Id]);

  const donhang = useAppSelector(reportStore);
  console.log('donhang', donhang.order);

  return donhang.loading && donhang.order.Id ? (
    <View style={[stylesGlobal.flex_center, {height: '80%'}]}>
      <Loading />
    </View>
  ) : (
    <ScrollView style={styles.itemContainer}>
      <Text style={styles.title}>THÔNG TIN CHUNG</Text>
      <View style={styles.itemHr} />
      <View style={styles.itemSubContainer}>
        <View style={styles.itemContent}>
          <View style={[styles.itemMetaContainer]}>
            <Text style={styles.itemSubtitle}>Tên nhà cung cấp</Text>

            <Text style={[{fontSize: 16}, styles.itemSubtitle]}>
              {/* {donhang.order.IddmdichVuNavigation?.NameVi} */}
              {
                ncc.listCus?.filter(
                  e => donhang.order?.IddmnhaCungCap === e.Id,
                )[0]?.NameVi?.trim()
              }
            </Text>
          </View>

          <View style={[styles.itemMetaContainer]}>
            <Text style={styles.itemSubtitle}>Tên khách hàng</Text>

            <Text style={[{fontSize: 16}, styles.itemSubtitle]}>
              {
                customer.listCus?.filter(
                  e => donhang.order?.Idreceiver === e.Id,
                )[0]?.NameVi?.trim()
              }
            </Text>
          </View>

          <View style={[styles.itemMetaContainer]}>
            <Text style={styles.itemSubtitle}>Mã đơn</Text>

            <Text style={styles.itemSubtitle} numberOfLines={1}>
              {donhang.order.CodeJob}
            </Text>
          </View>

          <View style={[styles.itemMetaContainer]}>
            <Text style={styles.itemSubtitle} numberOfLines={1}>
              Tên hàng
            </Text>

            <Text style={styles.itemSubtitle}>
              {donhang.order.GoodsDescription?.trim()}
            </Text>
          </View>

          <View style={[styles.itemMetaContainer]}>
            <Text style={styles.itemSubtitle} numberOfLines={1}>
              Số lượng mua
            </Text>

            <Text style={styles.itemSubtitle}>
              {donhang.order.EnumVatmua?.toLocaleString('vi-VN')}
            </Text>
          </View>

          <View style={[styles.itemMetaContainer]}>
            <Text style={styles.itemSubtitle} numberOfLines={1}>
              Số lượng bán
            </Text>

            <Text style={styles.itemSubtitle}>
              {donhang.order.EnumVatban?.toLocaleString('vi-VN')}
            </Text>
          </View>
          <View style={[styles.itemMetaContainer]}>
            <Text style={styles.itemSubtitle} numberOfLines={1}>
              Loại dịch vụ
            </Text>
            <Text style={styles.itemSubtitle} numberOfLines={1}>
              {donhang.order.IddmdichVuNavigation?.NameVi}
            </Text>
          </View>
          <View style={[styles.itemMetaContainer]}>
            <Text style={styles.itemSubtitle} numberOfLines={1}>
              Nơi đi
            </Text>
            <Text style={styles.itemSubtitle} numberOfLines={1}>
              {donhang.order.PlaceOfDelivery?.trim()}
            </Text>
          </View>

          <View style={[styles.itemMetaContainer]}>
            <Text style={styles.itemSubtitle} numberOfLines={1}>
              Nơi đến
            </Text>
            <Text style={styles.itemSubtitle} numberOfLines={1}>
              {donhang.order.PlaceOfReceipt?.trim()}
            </Text>
          </View>

          <View style={[styles.itemMetaContainer]}>
            <Text style={styles.itemSubtitle} numberOfLines={1}>
              Số bill
            </Text>
            <Text style={styles.itemSubtitle} numberOfLines={1}>
              {donhang.order.SoBookbill}
            </Text>
          </View>

          <View style={[styles.itemMetaContainer]}>
            <Text style={styles.itemSubtitle}>Ngày mở</Text>
            <Text style={styles.itemSubtitle} numberOfLines={1}>
              {/* {getParsedDate(donhang.order.OpenDate) !=
              getParsedDate(new Date().toLocaleDateString('en-US'))
                ? getParsedDate(donhang.order.OpenDate)
                : 'Hôm nay ' + getParsedTime(donhang.order.OpenDate)} */}
                {moment(donhang.order.OpenDate).format('DD-MM-YYYY').toString()}
            </Text>
          </View>

          <View style={[styles.itemMetaContainer]}>
            <Text style={styles.itemSubtitle} numberOfLines={1}>
              Ghi chú
            </Text>
            <Text style={styles.itemSubtitle} numberOfLines={1}>
              {donhang.order.Note}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.itemHr} />
      <Text style={styles.title}>GIÁ MUA</Text>
      <View style={styles.itemHr} />
      <View style={styles.itemSubContainer}>
        <View style={styles.itemContent}>
          <View style={styles.itemMetaContainer}>
            <Text style={styles.itemSubtitle} numberOfLines={1}>
              Số tiền
            </Text>
            <Text style={[styles.itemPrice, {}]}>
              {donhang.order.GiaMua?.toLocaleString('vi-VN')}
            </Text>
          </View>

          <View style={[styles.itemMetaContainer]}>
            <Text style={styles.itemSubtitle} numberOfLines={1}>
              Thuế
            </Text>

            <Text style={styles.itemSubtitle}>
              {donhang.order.ThueMua ? 'YES' : 'NO'}
            </Text>
          </View>

          <View style={styles.itemMetaContainer}>
            <Text style={styles.itemSubtitle} numberOfLines={1}>
              Tiền sau thuế
            </Text>
            <Text style={[styles.itemPrice, {}]}>
              {donhang.order.GiaMuaSauThue?.toLocaleString('vi-VN')}
            </Text>
          </View>

          <View style={[styles.itemMetaContainer]}>
            <Text style={styles.itemSubtitle} numberOfLines={1}>
              TTTT
            </Text>

            <Text style={styles.itemSubtitle}>
              {donhang.order.FlagTtthanhToanMua ? 'YES' : 'NO'}
            </Text>
          </View>
        </View>
      </View>

      {/* <View style={styles.itemHr} />
      <Text style={styles.title}>GIÁ BÁN</Text>
      <View style={styles.itemHr} />
      <View style={styles.itemSubContainer}>
        <View style={styles.itemContent}>
          <View style={styles.itemMetaContainer}>
            <Text style={styles.itemSubtitle} numberOfLines={1}>
              Số tiền
            </Text>
            <Text style={[styles.itemPrice, {}]}>
              {donhang.order.GiaBan?.toLocaleString('vi-VN')}
            </Text>
          </View>

          <View style={[styles.itemMetaContainer]}>
            <Text style={styles.itemSubtitle} numberOfLines={1}>
              Thuế
            </Text>

            <Text style={styles.itemSubtitle}>
              {donhang.order.ThueBan ? 'YES' : 'NO'}
            </Text>
          </View>


          <View style={styles.itemMetaContainer}>
            <Text style={styles.itemSubtitle} numberOfLines={1}>
              Tiền sau thuế
            </Text>
            <Text style={[styles.itemPrice, {}]}>
              {donhang.order.GiaBanSauThue?.toLocaleString('vi-VN')}
            </Text>
          </View>

          <View style={[styles.itemMetaContainer]}>
            <Text style={styles.itemSubtitle} numberOfLines={1}>
              TTTT
            </Text>

            <Text style={styles.itemSubtitle}>
              {donhang.order.FlagTtthanhToanBan ? 'YES' : 'NO'}
            </Text>
          </View>
        </View>
      </View> */}
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
    color: '#000',
    fontFamily: fonts.primaryRegular,
  },
  itemMetaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
    marginTop: 5,
  },
  itemPrice: {
    fontSize: 14,
    color: '#000',
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

import React, {useEffect, useState} from 'react';
import {ImageBackground, StyleSheet, Text, TextInput, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import stylesGlobal from '../../../assets/css/cssGlobal';
import fonts from '../../../assets/font/fonts';
import Loading from '../../../component/loading/loading';
import AddChangeTarget from '../../../component/Target/addChangeTarget';
import {targetStore} from '../../../features';
import {
  getTargetByUser,
  postChangeTarget,
} from '../../../features/target/patchtarget-api';
import {useAppDispatch, useAppSelector} from '../../../redux/hooks';
import {changetarget, listtarget} from '../../../types/target';
import colors from '../../../assets/css/color';
function Target(props: any) {
  const CategoryTarget = [
    {
      id: 1,
      nametype: 'Day',
    },
    {
      id: 2,
      nametype: 'Week',
    },
    {
      id: 3,
      nametype: 'Month',
    },
  ];
  const dispatch = useAppDispatch();

  const target: any = useAppSelector(targetStore);
  console.log('target', target);

  const [visibleAddTarget, setVisibleAddTarget] = useState(false);
  async function handleSetup(value: any) {
    let arrayChange = [] as any;
    if (value.day.length > 0) {
      arrayChange.push({
        iddmtarget: 1,
        moneytarget: Number(value.day),
      });
    }

    if (value.week.length > 0) {
      arrayChange.push({
        iddmtarget: 2,
        moneytarget: Number(value.week),
      });
    }

    if (value.month.length > 0) {
      arrayChange.push({
        iddmtarget: 3,
        moneytarget: Number(value.month),
      });
    }

    console.log('arrayChange', arrayChange);

    dispatch(postChangeTarget(arrayChange)).then(value => {
      console.log(value);
      // expected output: "Success!"
    });
    setVisibleAddTarget(false);
  }

  useEffect(() => {
    dispatch(getTargetByUser());
  }, []);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/img/background.png')}
        style={styles.bgImage}
        resizeMode="cover">
        {/* <View style={styles.section}>
          <Text style={styles.title}>Target</Text>
        </View> */}

        {target.loading ? (
          <View style={[stylesGlobal.flex_center, {height: '80%'}]}>
            <Loading />
          </View>
        ) : target.listtarget.length > 0 ? (
          <View
            style={{
              paddingHorizontal: 20,
              paddingVertical: 20,
            }}>
            {target.listtarget.map((items: any) => (
              <View style={styles.itemSubContainer} key={items.id}> 
                <View style={styles.itemMetaContainer}>
                  <View style={[styles.badge, {backgroundColor: colors.green}]}>
                    <Text
                      style={{fontSize: 13, color: colors.white}}
                      //   styleName="bright"
                    >
                      Hạn mức{' '}
                      {items.iddmtarget === 1
                        ? 'ngày'
                        : items.iddmtarget === 2
                        ? 'tuần'
                        : items.iddmtarget === 3
                        ? 'tháng'
                        : ''}
                    </Text>
                  </View>
                  <Text style={styles.itemPrice}>
                    {/* {currency(SpendingBD.totalmoney)}  */}
                    {items.moneytarget.toLocaleString('vi-VN')}
                  </Text>
                </View>
              </View>
            ))}

            <TouchableOpacity
              style={{
                borderColor: '#555CC4',
                borderWidth: 1,
                padding: 10,
                borderRadius: 10,
                backgroundColor: '#555CC4',
              }}
              onPress={() => setVisibleAddTarget(true)}
              activeOpacity={0.6}>
              <Text style={[styles.labelButton, {textAlign: 'center'}]}>
                SETUP TARGET
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.addTarget}>
            <TouchableOpacity
              style={{
                borderColor: '#555CC4',
                borderWidth: 1,
                padding: 10,
                borderRadius: 10,
                backgroundColor: '#555CC4',
              }}
              onPress={() => setVisibleAddTarget(true)}
              activeOpacity={0.6}>
              <Text style={styles.labelButton}>SETUP TARGET</Text>
            </TouchableOpacity>
          </View>
        )}
      </ImageBackground>
      <AddChangeTarget
        visible={visibleAddTarget}
        valuetarget={target}
        handleCancel={() => setVisibleAddTarget(false)}
        handleSetup={(value: any) => handleSetup(value)}
        // valuechangetarget={}
        // isEdit={false}
      />
    </View>
  );
}

export default Target;

const styles = StyleSheet.create({
  container: {
    marginTop: -10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  bgImage: {
    flex: 1,
    width: '100%',
    height: '113%',
    // marginHorizontal: -20,
  },
  section: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingVertical: 15,
  },

  addTarget: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // paddingVertical: 15,
  },
  labelButton: {
    marginHorizontal: 20,
    fontSize: 16,
    color: '#fff',
  },
  title: {
    // marginTop: 30,
    marginHorizontal: 20,
    fontSize: 24,
    color: '#fff',
  },

  itemSubContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
  },

  itemPrice: {
    fontSize: 15,
    color: '#5f5f5f',
    textAlign: 'right',
    fontFamily: fonts.primaryRegular,
  },

  itemMetaContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    // marginTop: 10,
    paddingHorizontal: 10,
  },

  badge: {
    backgroundColor: colors.secondary,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});

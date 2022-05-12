import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, Platform} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

import {TextInput} from 'react-native-paper';
export default function SearchDropDown({
  label,
  data,
  onChangeText,
  onPress,
  value,
}: any) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searching, setSearching] = useState(false);
  const [filtered, setFiltered] = useState([]);
  const [zIndex, setzIndex] = useState(0);
  const [top, settop] = useState(0);

  // useEffect(() => {
  //   setFiltered(data.slice(0, 0));
  // }, [data]);

  useEffect(() => {
    setSearchQuery(value ? value : '');
  }, [value]);

  return Platform.OS === 'ios' ? (
    <View style={{position: 'relative'}}>
      <TextInput
        label={label}
        theme={{
          colors: {
            background: 'white',
          },
        }}
        mode="flat"
        value={searchQuery}
        onChangeText={text => {
          onChangeText(text);
          setSearchQuery(text);

          setzIndex(9999);
          if (text) {
            setSearching(true);
            const temp = text.toLowerCase();
            const tempList = data.filter((item: any, idx: number) => {
              if (item?.toLowerCase().match(temp)) return item;
            });
            setFiltered(tempList.slice(0, 50));
          } else {
            setFiltered([]);
          }
        }}
        onTouchStart={() => {
          setzIndex(9999);

          setSearching(true);
        }}
        onChange={() => {
          setzIndex(9999);

          setSearching(true);
        }}
        onBlur={() => {
          setSearching(false);
          setzIndex(0);
        }}
      />
      {searching && (
        <View style={[styles2.container, {zIndex: zIndex, elevation: zIndex}]}>
          {filtered.length > 0 && (
            <TouchableOpacity
              onPress={() => {
                setSearching(false);
                setzIndex(0);
              }}>
              <Text style={styles.button}>Ẩn gợi ý</Text>
            </TouchableOpacity>
          )}

          <View>
            <ScrollView style={{flex: 1}}>
              {filtered?.map((item: any, index: any) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => {
                      setSearchQuery(item);
                      onPress(item);
                      setSearching(false);
                      setzIndex(0);
                    }}>
                    <View style={[styles.subContainer]}>
                      <View style={styles.itemView}>
                        <Text style={styles.itemText}>{item}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
        </View>
      )}
    </View>
  ) : (
    <View style={{position: 'relative', zIndex: zIndex, top: top}}>
      <TextInput
        label={label}
        theme={{
          colors: {
            background: 'white',
          },
        }}
        mode="flat"
        value={searchQuery}
        onChangeText={text => {
          console.log('text', text);
          onChangeText(text);
          setSearchQuery(text);

          if (text) {
            setSearching(true);
            const temp = text.toLowerCase();
            console.log(data);
            const tempList = data.filter((item: any, idx: number) => {
              if (item?.toLowerCase().match(temp)) return item;
            });
            setFiltered(tempList.slice(0, 50));
          } else {
            setFiltered([]);
          }
        }}
        onTouchStart={() => {
          setzIndex(99999);
          settop(100);
          setSearching(true);
        }}
        onChange={() => {
          setzIndex(99999);
          settop(100);
          setSearching(true);
        }}
        onBlur={() => {
          setSearching(false);
          setzIndex(0);
          settop(0);
        }}
      />
      {searching && (
        <View style={[styles.container, {zIndex: zIndex}]}>
          {filtered.length > 0 && (
            <TouchableOpacity
              onPress={() => {
                setSearching(false);
                setzIndex(0);
                settop(0);
              }}>
              <Text style={styles.button}>Ẩn gợi ý</Text>
            </TouchableOpacity>
          )}

          <View>
            <ScrollView>
              {filtered?.map((item: any, index: any) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => {
                      setSearchQuery(item);
                      onPress(item);
                      setSearching(false);
                      setzIndex(0);
                      settop(0);
                    }}>
                    <View style={[styles.subContainer]}>
                      <View style={styles.itemView}>
                        <Text style={styles.itemText}>{item}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // position: "relative",
    // flexDirection: "column",
    width: '100%',
    height: 200,
    // top: 65,
  },
  subContainer: {
    backgroundColor: '#fff',
    paddingTop: 10,
    flexWrap: 'wrap',
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
  },
  itemView: {
    flexDirection: 'row',
    backgroundColor: 'white',
    height: 30,
    width: '90%',
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 4,
  },
  itemText: {
    color: 'black',
    paddingHorizontal: 10,
    fontSize: 20,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});

const styles2 = StyleSheet.create({
  container: {
    // flex: 1,
    position: 'absolute',
    // flexDirection: "column",
    width: '100%',
    height: 200,
    top: 65,
  },
});

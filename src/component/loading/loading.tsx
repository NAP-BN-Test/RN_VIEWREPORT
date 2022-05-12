import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import colors from '../../assets/css/color'
function Loading() {
  return (
    <View>
      <ActivityIndicator size="large" color={colors.redcustom} />
      <Text style={{textAlign: 'center', marginTop: 10}}>Vui lòng chờ...</Text>
    </View>
  );
}

export default Loading;

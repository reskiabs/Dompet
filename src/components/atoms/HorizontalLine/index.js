import React from 'react';
import { View } from 'react-native';

const HorizontalLine = ({ width, height, marginLeft }) => (
  <View style={{ justifyContent:'center', alignItems:'center' }} >
    <View style={{
    width,
    height:1,
    backgroundColor: '#707070',
  }}
  />
  </View>
  
  
);

export default HorizontalLine;

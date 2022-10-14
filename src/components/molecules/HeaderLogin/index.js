import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const HeaderLogin = ({title, subTitle}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
    </View>
  );
};

export default HeaderLogin;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 24,
    paddingTop: 43,
    paddingBottom: 24,
  },
  title: {
    fontSize: 27,
    // fontFamily: 'Poppins-Medium',
    color: '#020202',
    textAlign: 'center',
    paddingBottom: 10,
  },
  subTitle: {
    fontSize: 14,
    // fontFamily: 'Poppins-Light',
    color: '#8d92a3',
    textAlign: 'center',
  },
});

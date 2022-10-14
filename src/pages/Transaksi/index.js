import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import { Maintainance } from '../../assets/Illustrations';
import { HeaderMainApp } from '../../components';

const Transaksi = ({navigation}) => {
  return (
      <SafeAreaView style={{ flex:1, backgroundColor:'#5A0000' }}>
        <HeaderMainApp title='Transaksi' onPress={()=> navigation.navigate('MainApp')} />
        <View style={styles.container}>
          <Maintainance/>
          <Text style={styles.title}>Kita lagi nyiapin sesuatu</Text>
          <Text style={styles.subTitle}>Sabar ya, semua biar kamu bisa nikmatin berbaigai layanan terbaik di Dompet+</Text>
        </View>
      </SafeAreaView>
    
  );
};

export default Transaksi;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor:'white'
  },
  title: {
    textAlign:'center',
    fontWeight:'700',
    fontSize: 18,
  },
  subTitle:{
    marginTop:10,
    fontWeight:'400',
    fontSize: 15,
    textAlign:'center',
    color:'#8d92a3',

  }
});


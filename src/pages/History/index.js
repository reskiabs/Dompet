import React, {useState , useEffect } from 'react';
import {ScrollView, StyleSheet, Text, View, ActivityIndicator, SafeAreaView} from 'react-native';
import { Header, ListHistory, HorizontalLine, TglHistory, Gap } from '../../components';
import * as api from "../../services/auth";
import moment from 'moment'
const History = ({navigation}) => {

  const [error, setError] = useState(null);
  const [loading, setLoading ] = useState(false);
  const [history , setHistory] = useState([]);

  useEffect(() => {
      async function ambilHistory() {
          setLoading(true);
          try {
              let response = await api.getHistory();
            
              setHistory(response)
          } catch (error) {
              setError(error.message);
          setLoading(false)
          }
      }
      ambilHistory()
    }, [])

    if(history.jenis === 'kredit'){
      console.log("berhasil")
    }

    function hasilHistory() {
      return history.map((data) => {
        let warna;
        let angka;
        if(data.jenis == 'kredit'){
          warna = '#1DDA00';
          angka = '+'
        }else if(data.jenis == 'debit'){
          warna = '#ff0000';
          angka = '-'
        }
        return(
          <View key={data.id}>
             <TglHistory title={moment(data.createdAt).format('DD-MM-YYYY')}/>
             <ListHistory title={data.title} subTitle={data.deskripsi} harga={`${angka}Rp.${data.nominal}`} color={warna} />
            
          </View>
        )
      })
    }
  return (
    <SafeAreaView style={{ flex:1, backgroundColor:'#5A0000' }}>
      <Header title='History' onPress={()=> navigation.navigate('MainApp')}/>
      <ScrollView style={styles.container}>
      {/* <ActivityIndicator size="small" color="#ff0000" /> */}
      {hasilHistory()}
    </ScrollView>
    </SafeAreaView>
    
  );
};

export default History;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  },
});

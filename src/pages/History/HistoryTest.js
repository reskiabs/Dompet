import React, {useState , useEffect } from 'react';
import {ScrollView, StyleSheet, Text, View, ActivityIndicator, SafeAreaView} from 'react-native';
import { Header, ListHistory, HorizontalLine, TglHistory, Gap } from '../../components';
import * as api from "../../services/auth";
import { useAuth } from "../../providers/auth";
import { History2 } from '..';
const History = ({navigation}) => {

  const [error, setError] = useState(null);
  const [loading, setLoading ] = useState(false);
  const [History , setHistory] = useState({});

  useEffect(() => {
      async function ambilHistory() {
          setLoading(true);
          try {
              let response = await api.getHistory();
              console.log(response)
              setHistory(response)
          } catch (error) {
              setError(error.message);
          setLoading(false)
          }
      }
      ambilHistory()
    }, [])
  return (
    <SafeAreaView style={{ flex:1, backgroundColor:'#5A0000' }}>
      <Header title='History' onPress={()=> navigation.navigate('MainApp')}/>

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

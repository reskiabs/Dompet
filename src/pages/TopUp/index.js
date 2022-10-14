import React, {useState} from 'react';
import {StyleSheet, useWindowDimensions, View, Text, ScrollView, SafeAreaView, StatusBar,} from 'react-native';
import { Button, DompetContainer, Header, ListTopUp, TopUpBank } from '../../components';
import { TabView, SceneMap,TabBar } from 'react-native-tab-view';
import {  IconAtm, IconCeklisBig, IconInternetBanking, IconIpaymu, IconMerchant, IconPulsa, IconTopUp, KartuDebit } from '../../assets/icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { BigButton } from '../../components';
import Toast from 'react-native-toast-message';
import Modal from 'react-native-modal';

// const showToast = () => {
//   Toast.show({
//     text1: 'TOP UP SUKSES',
//     text2: 'Selamat, Top Up Saldo BERHASIL',
//     // position: 'bottom',
//     visibilityTime: 4000,
//     autoHide: true,
//     topOffset: 10,
//     bottomOffset: 400,
//   });
// }



const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: 'orange' }}
      style={{ backgroundColor: '#ff0000'}}
      tabStyle={{height:30,}}
      renderLabel={({ route, focused, color }) => (
        <Text style={{ fontSize:15, fontWeight:'400', color:'white', marginTop:-23}}>
          {route.title}
        </Text>
      )}
    />
  );

const FirstRoute = ({navigation}) => (  

    <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
        <DompetContainer title='Top Up ke' balance='Balance Rp.200.000'/>
        <ListTopUp title='Pilih Nominal Top Up'/>
        <View style={styles.kartuDebit}>
            <View style={{ marginVertical:20 }}>
                <Text style={{ fontWeight:'700', fontSize:14, marginLeft:20, marginTop:-15 }}>Kartu Debet</Text>
                <TouchableOpacity style={{ borderRadius:10, backgroundColor:'#A1DBA5', width:141, height:81, borderColor:'#37B53F', borderWidth:2, justifyContent:'center', alignItems:'center', marginTop:10, marginLeft:22 }}>
                    <KartuDebit/>
                    <Text>Tambah Kartu Debit</Text>
                </TouchableOpacity>
            </View>
        </View>
        {/* <View style={styles.buttonContainer}>
            <BigButton title='KONFIRMASI' onPress={()=> navigation.navigate('MainApp')} />
        </View> */}
    </ScrollView>
  );

    
  
  const SecondRoute = () => (
    <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
        <DompetContainer title='Top Up ke' balance='Balance Rp.200.000'/>
        <ListTopUp title='Pilih Nominal Top Up'/>
    <View style={{ marginVertical:20 }}>
        <TopUpBank icon={ <IconIpaymu/>} title='IPaymu'/>
        <TopUpBank icon={ <IconAtm/>} title='ATM'/>
        {/* <TopUpBank icon={ <IconInternetBanking/>} title='Internet/Mobile Banking'/> */}
        <TopUpBank icon={ <IconMerchant/>} title='Merchant/Booth'/>
    </View>
    </ScrollView>
  );

const TopUp = ({navigation}) => {

    const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Instant Top Up' },
    { key: 'second', title: 'Metode Lain' },
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  return (
    <SafeAreaView style={styles.page}>
      <StatusBar barStyle="dark-content"/>
      <View>
      <Header title='Top Up' onPress={()=> navigation.navigate('MainApp')}/>
      {/* <Toast ref={(ref) => Toast.setRef(ref)} /> */}
      </View>
      <View style={styles.tabContainer}>
        <TabView
        renderTabBar={renderTabBar}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        />
        
      </View>  
      <View style={{ justifyContent:'center', alignItems:'center', marginVertical:10}}>
        <Button title='Konfirmasi' onPress={()=> navigation.navigate('ConfirmTopUp')} />
        </View>
    </SafeAreaView>
  );
};

export default TopUp;

const styles = StyleSheet.create({
  page:{
      flex:1, backgroundColor:'#f0f0f0'
  },
  tabContainer:{
      flex:1
  },
    kartuDebit:{
        marginTop:20,
        backgroundColor:'white',
      shadowOffset: {
        width: 0,
        height: 9,
      },
      shadowOpacity: 0.15,
      shadowRadius: 3.84,
      elevation: 5,
    },
    buttonContainer:{
        marginVertical:15,
        backgroundColor:'white',
      shadowOffset: {
        width: 0,
        height: 9,
      },
      shadowOpacity: 0.15,
      shadowRadius: 3.84,
      elevation: 5,
      alignItems:'center',
      justifyContent:'center',
    },
    modal:{
      // flex: 1, 
      justifyContent:'center', 
      alignItems:'center', 
      backgroundColor:'white',
      height:350,
      borderRadius:10,
    },
    buttonModal:{
      height:36,
      width:114,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:10,
      borderWidth:1,
      borderColor:'#707070'
    }
});

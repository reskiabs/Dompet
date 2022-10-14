import React from 'react';
import { ScrollView, StyleSheet, Text, useWindowDimensions, View, SafeAreaView } from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import { Maintainance3, RamadhanNotif } from '../../assets';
import { IconAtm, IconIpaymu, IconMerchant } from '../../assets/icons';
import { DompetContainer, Gap, Header, HorizontalLine, ListTopUp, TopUpBank } from '../../components';

const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: '#ff0000' }}
      style={{ backgroundColor: 'white'}}
      tabStyle={{height:30,}}
      renderLabel={({ route, focused, color }) => (
        <Text style={{ fontSize:15, fontWeight:'400', marginTop:-20}}>
          {route.title}
        </Text>
      )}
    />
  );

const FirstRoute = ({focused}) => (
  
    <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    flex: 1,
                }}>
                    <Gap height={37}/>
          <Maintainance3/>
          <Text style={{
                        textAlign:'center',
                        fontWeight:'700',
                        fontSize: 18,
                    }}>Kita lagi nyiapin sesuatu</Text>
          <Text style={{
                        marginTop:10,
                        fontWeight:'400',
                        fontSize: 15,
                        textAlign:'center',
                        color:'#8d92a3',

                    }}>Sabar ya, semua biar kamu bisa nikmatin berbaigai layanan terbaik di Dompet+</Text>
        </View>
    </ScrollView>
  );
  
  const SecondRoute = () => (
    <ScrollView style={{ flex: 1, backgroundColor:'white'}}>
        <View style={{ marginHorizontal:10 }}>
            <Gap height={10}/>
            <RamadhanNotif/>
            <Gap height={10}/>
            <Text style={{fontWeight:'700', fontSize:16}}>Bikin Ramadhan Lebih terasa dengan{'\n'}yang baru di Dompet Plus</Text>
            <Gap height={15}/>
            <Text style={{fontSize:13}}>Penasaran kan sama apa yang baru di Dompet Plus ?{'\n'}Langsung update aplikasimu dan nikmati indahnya {'\n'}nuansa Ramadhan bareng Dompet Plus.</Text>
            <Gap height={15}/>
            <Text style={{fontSize:13}}>01 Mei 2021</Text>
            <Gap height={15}/>
            <HorizontalLine width='100%'/>
            <Gap height={15}/>
            <HorizontalLine/>
            <Gap height={10}/>
            <Text style={{fontWeight:'700', fontSize:16}}>Event Deposit/Top Up</Text>
            <Gap height={15}/>
            <Text style={{fontSize:13}}>Segera Top Up saldo anda, untuk mendapatkan{'\n'}reward-reward menarik.{'\n'}Untuk info lebih lanjut, {'\n'}'www.dompetplus.id/event</Text>
            <Gap height={15}/>
            <Text style={{fontSize:13}}>10 Juni 2021</Text>
            <Gap height={15}/>
            <Gap height={15}/>
            <HorizontalLine width='100%'/>
            <Gap height={15}/>
        </View>   
    </ScrollView>
  );

const TopUp = ({navigation}) => {
    const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Notifikasi' },
    { key: 'second', title: 'Pesan (2)' },
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  return (
    <SafeAreaView style={styles.page}>
      <View>
      <Header title='Notification' onPress={()=> navigation.navigate('MainApp')}/>
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
    </SafeAreaView>
  );
};

export default TopUp;

const styles = StyleSheet.create({
  page:{
      flex:1,
      backgroundColor:'#5A0000'
  },
  tabContainer:{
      flex:1
  },
});

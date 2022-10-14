import React, {useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { BawahGray, IconCeklisBig, IconAtm } from '../../assets/icons';
import { BigButton, Gap } from '../../components';
import { ContentPayment, DompetContainer, Header } from '../../components/molecules';
import Modal from 'react-native-modal';


const WithDraw = ({navigation}) => {

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <SafeAreaView style={{ flex:1, backgroundColor:'#5A0000' }}>
      
      <Header title='Withdraw' onPress={()=> navigation.navigate('MainApp')}/>
      
        <ScrollView style={styles.container}>
        <DompetContainer title='Withdraw Dari' balance='Balance Rp.200.000' />
        
        <View style={{ backgroundColor:'white', marginTop:20 }}>
          <Text style={{ marginLeft:10, marginVertical:10 }}>Jumlah Withdraw Rp.</Text>
            <View style={styles.textInputContainer}>
              <TextInput autoFocus={true}  placeholder='minimal Rp. 100.000,-' />
            </View>
          <Text style={{ marginLeft:10, marginVertical:10 }}>Withdraw ke Rekening</Text>
            <View style={styles.textInputContainer}>
              <TextInput placeholder='XXXXXXXXXXXX' />
            </View>
        </View>

        <Gap height={15}/>
        <View style={styles.bank}>
          
          <View style={{ flexDirection:'row', alignItems:'center',}}>
            <IconAtm/>
            <View style={{ marginLeft:20 }}>
              <Text>BCA - Bank Central Asia</Text>
            </View>
          </View>
          <BawahGray/>
        </View>
        
        <Gap height={35}/>
        <ContentPayment toPay='Ke Rekening 019231XXXXXX' bank='BCA - Bank Central Asia' />
        
        <BigButton title='WITHDRAW NOW' onPress={toggleModal} />
    </ScrollView>
      <Modal  isVisible={isModalVisible} animationOutTiming={300}  >
        <View style={styles.modal}>
          <Text style={{ fontSize:18, fontWeight:'bold' }}>WITHDRAW SUKSES</Text>
          <Gap height={20} />
            <IconCeklisBig/>
            <Gap height={20} />
            <Text style={{ fontSize:16, textAlign:'center' }}>Selamat, Penarikan Saldo {'\n'} BERHASIL</Text>
            <Gap height={10} />
            <Text style={{ fontSize:14, textAlign:'center' }}>Dana Anda akan di transfer sesuai {'\n'} dengan jam kerja bank, paling lambat {'\n'} 2 x 24 jam, diluar hari libur bank.</Text>
            <Gap height={15} />
          <TouchableOpacity style={styles.buttonModal} onPress={toggleModal}>
            <Text>Oke</Text>
          </TouchableOpacity> 
        </View>
      </Modal>
    </SafeAreaView>
    
  );
};

export default WithDraw;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  },
  title: {
    // fontFamily: 'Poppins-Medium',
    fontSize: 32,
  },
  firstRouteContainer1:{
    backgroundColor:'white',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textInputContainer:{
    borderWidth:2,
    borderRadius:8,
    borderColor:'#8d92a3',
    height:36,
    marginHorizontal:10,
    justifyContent:'center',
    paddingLeft:10
  },
  bank:{
    height:45,
    width:'90%',
    backgroundColor:'white',
    shadowOffset: {
        width: 0,
        height: 9,
      },
      shadowOpacity: 0.25,
      shadowRadius: 8,
      elevation: 5,
      alignItems:'center',
      justifyContent:'space-between',
      flexDirection:'row',
      marginTop:7,
      paddingHorizontal:15,
      marginHorizontal:17,
      borderRadius:5      
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


import React , {useState,useEffect} from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View, SafeAreaView} from 'react-native';
import { Ellips, Notif, PayPlus, QrCodeOn, QrCodeProfile, Qris } from '../../assets';
import { Button, Gap, HeaderMainApp, ListProfile } from '../../components';
import * as api from "../../services/auth";
import { useAuth } from "../../providers/auth";
import Modal from 'react-native-modal';
import QRCode from 'react-native-qrcode-svg';
import UserAvatar from 'react-native-user-avatar-component';


const User = ({navigation}) => {

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const [error, setError] = useState(null);
  const [loading, setLoading ] = useState(false);
  const [users , setProfile] = useState({});
  const {handleLogout} = useAuth();

  useEffect(() => {
        ambilUser = async () =>{
          setLoading(true);
          try {
              let response = await api.getProfile();
              setProfile(response)
          } catch (error) {
              setError(error.message);
          setLoading(false)
          }
      }
      ambilUser()
    }, [])

    let logoFromFile = require('../../assets/icons/logoqr.png');
    const qr = `TRF:${users.username}`;
    // const arrQR = qr.split(":");
  return (
    
    <SafeAreaView style={{ flex:1, backgroundColor:'#5A0000' }}>
        <View style={styles.redContainer}>
        <View style={styles.iconHead}>
          <Text style={styles.titlePay} >Profile</Text>
          <TouchableOpacity onPress={()=> navigation.navigate('Notification')}>
          <Notif/>
          </TouchableOpacity> 
        </View>

        <View style={{ flexDirection:'row', justifyContent:'space-between' }}>
          <View style={{ flexDirection:'row', alignItems:'center', marginTop:-20 }}>
            {/* <Ellips/> */}
            <View style={{ borderWidth:3, borderColor:'white', borderRadius:50,  }}>
              <UserAvatar size={50} name={`${users.nama_lengkap}`} color="#2d9cbd" />
            </View>
            <Gap width={10}/>
            <View>
              <Text style={styles.admin}>{users.nama_lengkap}</Text>
              <Text style={styles.bli}>{users.kode_referral}</Text>
              <Text style={styles.bli}>{users.pin}</Text>
            </View>
          </View>
          
        </View> 
        <Text style={{ fontSize:15, fontWeight:'700', color:'white' }}>Dompet Plus ID</Text> 
        <View style={styles.QrCode}>
          <TouchableOpacity onPress={toggleModal} >
            <QrCodeProfile/>
          </TouchableOpacity>
          <Gap width={10}/>
          <Text style={{ fontWeight:'bold', fontSize:18 }}>QR Code</Text>  
        </View>
        <Modal  isVisible={isModalVisible} animationInTiming={900} animationOutTiming={1000}  >
        <View style={styles.modal}>
          <View>
            <Text style={{ color:'red', fontWeight:'bold', fontSize:14 }}>QR-Code</Text>
            <Gap height={10}/>
            <Text style={{ fontWeight:'bold' }}>Tunjukkan ke Merchant untuk TOP-UP</Text>
          </View>
          
          <Gap height={20}/>
          {/* qrcode */}
        <QRCode
          value={qr}
          logo={logoFromFile}
          logoSize={50}
           logoBackgroundColor='white'
           size={200}
          />
    
          <TouchableOpacity style={styles.buttonModal} onPress={toggleModal}>
            <Text>Selesai</Text>
          </TouchableOpacity> 
        </View>
      </Modal>
      </View>
      <Gap height={60}/>
      <ScrollView style={{ backgroundColor:'white', height:500, borderTopLeftRadius:15, borderTopRightRadius:15,}}>
        <View style={{ justifyContent:'center', alignItems:'center'}}>
        <ListProfile title='Ubah Profile'/>
        <ListProfile title='Ubah Security PIN'
        onPress={ ()=>navigation.navigate('GantiPin')}/>
        <ListProfile title='Keuntungan Pakai Dompet Plus'/>
        <ListProfile title='Tentang Mitra Afiliasi'/>
        <ListProfile title='Syarat dan Ketentuan'/>
        <ListProfile title='Kebijakan Privasi'/>
        <ListProfile title='Pusat Bantuan'/>
        </View>
        <Gap height={27}/>
      <View style={{ justifyContent:'center', alignItems:'center' }}>
         <Button title='Logout' onPress={() => {
                handleLogout();
                navigation.navigate("SplashScreen");
            }}/>
      </View>
      <Gap height={35}/>
      </ScrollView>
      </SafeAreaView>
    
  );
};

export default User;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  },
  redContainer: {
    backgroundColor:'#C20808',
    // width: 391,
    height: 250,
    paddingHorizontal:20,
    // paddingTop:35,
    borderBottomLeftRadius:25,
    borderBottomRightRadius:25,
    justifyContent:'space-around'
  },
  iconHead:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  containerPay:{
    marginTop:38
  },
  titlePay:{
    fontSize:24,
    fontWeight:'700',
    color:'white'
  },
  Rupiah:{
    fontSize:18,
    fontWeight:'700',
    color:'white',
    paddingVertical:3
    
  },
  admin:{
    paddingTop: 5,
    fontSize:15,
    fontWeight:'700',
    color:'white'
  },
  bli:{
    fontSize:12,
    // fontWeight:'700',
    color:'white',
    paddingTop: 5
  },
QrCode:{
  height:83,
  width:'100%',
  borderRadius:8,
  backgroundColor:'white',
  flexDirection:'row',
  shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.35,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom:-60,
    alignItems:'center',
    paddingHorizontal:15
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
  borderColor:'#707070',
  marginTop:20
}
});


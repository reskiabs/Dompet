import React, {useState} from 'react';
import {AsyncStorage} from "react-native";
import { TouchableOpacity,StyleSheet, Text, View, SafeAreaView, TextInput , Alert, ScrollView } from 'react-native'
import { IconCeklisBig, IconSecurity } from '../../assets'
import { Button, Gap, HeaderMainApp } from '../../components'
import Modal from 'react-native-modal';
import * as api from "../../services/auth";

const BuatPIN = ({navigation}) => {
    const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const [pin1 , setPin1] = useState('');
  const [pin2 , setPin2] = useState('');
  // const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  // const [pin , setPin] = useState('');
  const data = {
    pin1 : pin1 ,
    pin2 : pin2
  }

 
  async function createPin() {
    setLoading(true)
    try {
      const res = await api.createPin(data);
      const {pesan, hashedPIN} = res
      // setPin(res);
      await AsyncStorage.setItem('pin', hashedPIN ? hashedPIN:'NULL')  
      Alert.alert(pesan);
      // let pin = await AsyncStorage.getItem('pin');
      console.log("PIN dari AsyncStorage = "+await AsyncStorage.getItem('pin'))
      navigation.navigate('MainApp')
    } catch (error) {
      setError(error.message)
      // setError(error.message)
      console.log(error.message)
      Alert.alert(error.message);
      setLoading(false)
    }
  }
    return (
        <SafeAreaView style={styles.page}>
          <HeaderMainApp title='Buat PIN Baru'/> 
            <ScrollView style={styles.container}>
                <Gap height={30}/>
                <View style={styles.content}>
                <IconSecurity/>
                </View>
                <Gap height={30}/>
            <Text style={styles.title}>Masukkan PIN Baru</Text>
                <View style={styles.textInputContainer}>
                <TextInput keyboardType = 'numeric'  secureTextEntry
                 onChangeText={pin1 => setPin1(pin1)} />
                </View>
            <Text style={styles.title}>Masukkan Kembali PIN</Text>
                <View style={styles.textInputContainer}>
                <TextInput keyboardType = 'numeric' secureTextEntry
                onChangeText={pin2 => setPin2(pin2)} />
                </View>
                <Gap height={80}/>
                <View style={styles.content}>
                <Button title="Simpan PIN" onPress={createPin} />
                </View>          
        </ScrollView>
             
        <Modal  isVisible={isModalVisible} animationOutTiming={300}  >
        <View style={styles.modal}>
          <Text style={{ fontSize:18, fontWeight:'bold' }}>BUAT PIN BARU</Text>
          <Gap height={20} />
            <IconCeklisBig/>
            <Gap height={20} />
            <Text style={{ fontSize:14, textAlign:'center' }}>Pembuatan/Update PIN Baru {'\n'} BERHASIL</Text>
            <Gap height={25} />

            {/* <View style={{ flexDirection:'row' }}> */}
              {/* <TouchableOpacity style={styles.buttonModal} onPress={toggleModal}>
              <Text>Oke</Text>
            </TouchableOpacity>  */}
            <Gap width={10}/>
            <TouchableOpacity style={styles.buttonModal} onPress={()=> navigation.navigate('MainApp')}>
              <Text>Lanjut</Text>
            </TouchableOpacity> 
            {/* </View> */}
          
        </View>
      </Modal>
        </SafeAreaView>
    )
}

export default BuatPIN

const styles = StyleSheet.create({
    page:{ flex:1, backgroundColor:'#5A0000' },
    container:{
        flex:1,
        backgroundColor:'white',
    },
    content:{
        justifyContent:'center',
        alignItems:'center'
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
      title:{ marginLeft:10, marginVertical:10 },
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
})

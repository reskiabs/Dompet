import React, {useState , useEffect} from 'react'
import { SafeAreaView, StyleSheet, Text, View, ScrollView,TextInput, TouchableOpacity} from 'react-native'
import { IconHpRed, IconCeklisBig, IconStore, IconTopUp } from '../../assets'
import { Gap, Header, Button, DompetContainerSelect } from '../../components'
import Modal from 'react-native-modal';
import * as api from "../../services/auth";
import DropDownPicker from 'react-native-dropdown-picker'
import Constants from 'expo-constants';
import RNPickerSelect from 'react-native-picker-select';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import { RadioButton } from 'react-native-paper'


const TrMerchant = ({navigation, route}) => {

  const [pilih , setPilih] = useState('saldo');
  
  const [isBonus , setisBonus] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const [error , setError]= useState(null)
  const [loading , setLoading] = useState(false)
  const [payMerhant , setPay] = useState({})
  const [saldo , setSaldo] = useState({})
  const [saldo_bonus , setSaldoBonus] = useState({})

  const [nominal, setNominal] = useState('');
  const [pesanSaldo, setPesanSaldo] = useState("");
  const [isTransferEnable, setTransferEnable] = useState(false);

  useEffect(() => {
    async function cekSaldo() {
      setLoading(true);
      try {
        let response = await api.getSaldo();
        setSaldo(response.saldo);
        setSaldoBonus(response.saldo_bonus)
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }
    cekSaldo();
  }, []);
  
  async function checkSaldo() {
    setLoading(true);
    try {
      let response = await api.getSaldo();
      setSaldo(response.saldo);
      setSaldoBonus(response.saldo_bonus)
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }


  async function payMerchant(){
    console.log('test')
    setLoading(true);
    try{
      let response = await api.pay(data);
      setPay(response); 
      toggleModal();
      console.log('pindah')
      navigation.navigate('TopUp')
    }catch(error){
      console.log('okemi')
      setError(error.message)
      setLoading(false)
    }finally{
      checkSaldo();
    }
  }
    const onNominalChage = (nominal) => {

      
      if (pilih == 'bonus'){
        if (nominal > saldo_bonus) {
          setPesanSaldo("Saldo tidak cukup");
          setTransferEnable(false);
        }
        else {
          setTransferEnable(true)
          setNominal(nominal)
          setisBonus(true)
          // toggleModal();
        }
      }else if( pilih == 'saldo'){
        if (nominal > saldo) {
          setPesanSaldo("Saldo tidak cukup");
          setTransferEnable(false);
        }
        else {
          setTransferEnable(true)
          setNominal(nominal)
          setisBonus(false)
          // toggleModal();
        }
      }
    };
    console.log("Is Saldo :" + isBonus)
  const MerchantName = route.params.merchantName
  const qrUserName = route.params.qrUserName
  const data = {
    tujuan : qrUserName,
    nominal : nominal,
    isBonus : isBonus
  }
    return (  
    <SafeAreaView style={{ flex:1, backgroundColor:'#5A0000'}}>
    <Header title='Bayar Ke' onPress={()=> navigation.navigate('MainApp')} />
    <View style={{flex:1, backgroundColor:'#f0f0f0', justifyContent:'space-between'}}>
    <View style={styles.pageSelect}>
              <View style={{ marginVertical:20 }}>
                  <Text style={styles.titleSelect}>Pembayaran</Text>
                  <View style={styles.pageContainer}>


                      <TouchableOpacity
                      onPress={checkSaldo}  
                      style={styles.containerSelect}>
                          <IconTopUp/>
                          <View style={{ marginLeft:10}}>
                          <View style={styles.selectContent}>
                          <Text>{`Saldo Rp.${saldo.toLocaleString('id-ID', {
                                  style: 'currency',
                                  currency: 'IDR',
                                  style: 'decimal',
                                })}`}</Text>
                          <Gap width={25}/>
                            <RadioButton
                                value="saldo"
                                status={ pilih === 'saldo' ? 'checked' : 'unchecked' }
                                onPress={() => setPilih('saldo')}
                            />
                            </View>
                            
                        <View style={styles.selectContent}>
                            <Text>{`Bonus Rp.${saldo_bonus.toLocaleString('id-ID', {
                                    style: 'currency',
                                    currency: 'IDR',
                                    style: 'decimal',
                                  })}`}</Text>
                            <Gap width={25}/>
                            <RadioButton
                                value="bonus"
                                status={ pilih === 'bonus' ? 'checked' : 'unchecked' }
                                onPress={() => setPilih('bonus')}
                            />
                            </View>
                        </View>

                      </TouchableOpacity>
                  </View>
              </View> 
          </View>
    
    <ScrollView>
        <View style={{ justifyContent:'center', alignItems:'center', backgroundColor:'white', paddingVertical:15 }}>
        <IconStore/>
        <Gap height={12}/>
        <Text style={{ fontSize:20 }}>{MerchantName}</Text>
        </View>
      
    <Gap height={10}/>
    <View style={{ backgroundColor:'white', paddingVertical:10 }}>
    <Text style={{ color:'#8d92a3', marginLeft:20, }}>Harga</Text>
    <View style={{ marginLeft:20, flexDirection:'row', marginTop:5 }}>
        <Text style={{ fontWeight:'500', fontSize:32, color:'#ff0000'}}>Rp. </Text>
        <TextInput 
        placeholder='0'
        keyboardType='numeric'
        onChangeText={(nominal) => onNominalChage(nominal)}
        // onChangeText={nominal => setNominal(nominal)} 
        style={styles.textNominal}/>
      </View>
      <Text style={{ marginLeft: 20, color: "#cc3300", marginTop: 8 }}>
        {pesanSaldo}
      </Text>
    </View>

    <Gap height={10}/>
    <View style={{ backgroundColor:'white', paddingVertical:15, paddingLeft:20 }}>
        <TextInput placeholder='Deskripsi (Opsional)'/>
    </View>
    <Gap height={10}/>
    </ScrollView>
    <View style={{ justifyContent:'center', alignItems:'center',backgroundColor:'white', paddingVertical:10, }}>
      <Button onPress={(payMerchant)} 
      title="Lanjutkan" 
      disabled={!isTransferEnable}/>
    </View>
    

      <Modal  isVisible={isModalVisible} animationInTiming={900} animationOutTiming={1000}  >
        <View style={styles.modal}>
          <Text style={{ fontSize:18, fontWeight:'bold' }}>PEMBAYARAN SUKSES</Text>
          <Gap height={20} />
            <IconCeklisBig/>
            <Gap height={20} />
            <Text style={{ fontSize:16,  textAlign:'center' }}>Selamat, Pembayaran Ke Merchant {'\n'}sebesar{'\n'} BERHASIL</Text>
            <Gap height={15} />
          <TouchableOpacity style={styles.buttonModal} onPress={toggleModal}>
            <Text>Oke</Text>
          </TouchableOpacity> 
        </View>
      </Modal> 

    
    </View>
  </SafeAreaView>
    )
}

export default TrMerchant 

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        // flex: 1,
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
    
      },
      content:{
        height:227,
        width:'90%',
        backgroundColor:'white',
        shadowOffset: {
            width: 0,
            height: 9,
          },
          shadowOpacity: 0.25,
          shadowRadius: 8,
          elevation: 5,
          paddingHorizontal:15,
          marginHorizontal:17,
          borderRadius:5 
      },
      textInput:{ 
        backgroundColor:'white', 
        marginHorizontal:10, 
        paddingLeft:10, 
        paddingVertical:10, 
        borderRadius:10, 
        height:40, width:'80%',
        shadowOffset: {
          width: 0,
          height: 2,
        },
      shadowOpacity: 0.35,
      shadowRadius: 3.84,
      elevation: 5, 
      },
      iconUser:{ 
        backgroundColor:'white', 
        height:40, borderRadius:8, 
        justifyContent:'center', 
        alignItems:'center', 
        paddingHorizontal:5, 
        paddingVertical:5,
        shadowOffset: {
          width: 0,
          height: 2,
        },
      shadowOpacity: 0.35,
      shadowRadius: 3.84,
      elevation: 5, 
      },
      textNominal:{
        // fontWeight:'bold',
        fontSize:32,
        color:'#8d92a3'
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
      },
      pageSelect:{
        backgroundColor:'white',
        shadowOffset: {
          width: 0,
          height: 9,
        },
        shadowOpacity: 0.15,
        shadowRadius: 3.84,
        elevation: 5,
      },
      titleSelect:{ 
          fontWeight:'700', 
          fontSize:14, 
          marginLeft:20 
        },
      pageContainer:{ 
          alignItems:'center', 
          marginTop:10 
        },
      containerSelect:{ 
          borderWidth:1, 
          borderColor:'#8d92a3', 
          height:90, 
          width:'87%', 
          borderRadius:8, 
          flexDirection:'row', 
          alignItems:'center',
          paddingHorizontal:10
        },
        selectContent:{ 
            flexDirection:'row', 
            alignItems:'center', 
            justifyContent:'space-between',
            
        }
})

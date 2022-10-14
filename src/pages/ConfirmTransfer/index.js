import React , {useEffect , useState} from 'react'
import { 
    StyleSheet, 
    Text, View, 
    SafeAreaView, 
    StatusBar,
    Modal, 
    ScrollView,
    ProgressBarAndroid
} from 'react-native'
import { IconAtm } from '../../assets';
import {HeaderMainApp, Gap, HorizontalLine, Button} from '../../components';
import * as api from "../../services/auth";
const ConfirmTransfer = ({navigation , route}) => {
    const user = route.params?.user;
    const nominal = route.params?.nominal;
    const authpin = route.params?.auhtpin;
    const [loading , setLoading] = useState(false);
    const [transaksi , setTransaksi] = useState({});
    const [modalVisible, setModalVisible] = useState(false);
    const data = {
        tujuan: user.id,
        nominal: nominal,
        // pin : authpin
      };      
      useEffect(() => {
        if (typeof(authpin) != "undefined"){
        setLoading(true)
          Transaksi = async() =>{
            setLoading(true)
               try{
                   let response = await api.transaksi(data);
                   setTransaksi(response);
                   console.log(response)
                   setLoading(false);
                   navigation.navigate('Nota' , {transaksi})
               }catch(error){
                   console.log(error.message)
                   setLoading(false)
               }
           }
           Transaksi();
        }
    },[typeof(authpin)])


    return (
        <SafeAreaView style={styles.page}>
            <StatusBar barStyle="dark-content" />
            <HeaderMainApp title="Konfirmasi Transfer" />
            {/* <Gap height={20}/> */}
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <Text style={styles.title}>Penerima</Text>
            <Gap height={15}/>
            <View style={{ flexDirection:'row', alignItems:'center' }}>
                <View style={styles.iconContainer}>
                    <IconAtm/>
                </View>
                <Gap width={10}/>
                <View>
                    <Text style={styles.name}>{user.nama_lengkap}</Text>
                    <Gap height={7}/>
                    <Text style={styles.title}>{user.no_hp}</Text>
                </View>
            </View>
            <Gap height={27}/>
            <View>
                <Text style={styles.title}>Sumber Dana</Text>
                <Gap height={7}/>
                <Text style={styles.subTitle}>Saldo</Text>
            </View>
            <Gap height={27}/>
            <View>
                <Text style={styles.title}>Deskripsi (Opsional)</Text>
                <Gap height={7}/>
                <Text style={styles.subTitle}>Deskripsi</Text>
            </View>
            <Gap height={27}/>
            <View>
                <Text style={styles.subTitle}>Detail</Text>
                <Gap height={7}/>
                <View style={{ flexDirection:'row', justifyContent:'space-between' }}>
                    <Text style={styles.title}>Nominal Transaksi</Text>
                    <Text style={styles.title}>{`Rp. ${nominal.toLocaleString('id-ID', {
                        style: 'currency',
                        currency: 'IDR',
                        style: 'decimal',
                        })}`}</Text>
                </View>
                <Gap height={2}/>
                <View style={{ flexDirection:'row', justifyContent:'space-between' }}>
                    <Text style={styles.title}>Biaya</Text>
                    <Text style={styles.title}>Rp.0</Text>
                </View>
                <Gap height={7}/>
                <HorizontalLine width='100%'/>
                <Gap height={7}/>
                <View style={{ flexDirection:'row', justifyContent:'space-between' }}>
                    <Text style={styles.subTitle}>Total</Text>
                    <Text style={styles.title}>{`Rp. ${nominal.toLocaleString('id-ID', {
                        style: 'currency',
                        currency: 'IDR',
                        style: 'decimal',
                        })}`}</Text>
                </View>
                <Gap height={25}/>
                <View style={{justifyContent:'center', alignItems:'center'}}>
                <Button title="Transfer" onPress={()=> navigation.navigate('PinScreen')}/>
                <Gap height={15}/>

                <Button title="Batalkan" color='grey' onPress={()=> navigation.navigate('Transaksi')} />
                </View>
                {/* <Button title="Batalkan" color='grey' onPress={()=> navigation.navigate('Nota')} /> */}
            </View>
            <Gap height={15}/>
            <Modal
        animationType="slide"
        transparent={true}
        visible={loading}
        animationOutTiming={1000}
        
        // onRequestClose={() => {
        //   setModalVisible(loading);
        // }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Sedang diProses</Text>
            <ProgressBarAndroid />
          </View>
        </View>
      </Modal>
        </ScrollView>
        
        </SafeAreaView>
    )
}

export default ConfirmTransfer

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    page:{
        flex:1,
        backgroundColor:'white'
    },
    container:{
        marginHorizontal:30,
        marginTop:20
    },
    iconContainer:{
        width:55,
        height:55,
        borderRadius:55,
        backgroundColor:'rgba(120,120,120,0.4)',
        // backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center'
    },
    name:{
        fontWeight:'600',
        fontSize:17  
    },
    title:{
        color:'grey',
        fontWeight:'500',
        fontSize:14
    },
    subTitle:{
        // color:'grey',
        fontWeight:'500',
        fontSize:16  
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
})



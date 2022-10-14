import React , {useState} from 'react'
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity, SafeAreaView , TextInput, ScrollView, Alert} from 'react-native'
import { IconButton, IconDompetBig } from '../../assets'
import { Button, Form, Gap} from '../../components'
import * as api from "../../services/auth";
import { useAuth } from "../../providers/auth";
import {useForm} from '../../utils';
import { LinearGradient } from 'expo-linear-gradient';
// import Modal from 'react-native-modal';


const SignIn = ({navigation}) => {

//     const [isModalVisible, setModalVisible] = useState(false);

//   const toggleModal = () => {
//     setModalVisible(!isModalVisible);
//   };

    //1 - DECLARE VARIABLES
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const { handleLogin } = useAuth();
    const [form , setForm] = useForm({
        username:'',
        password:''
    })
   
    const { getAuthState } = useAuth();

    async function onSubmit() {
        setLoading(true);
        try {
            const response = await api.login(form);
            await handleLogin(response);
            const {user, pin} = await getAuthState();
            // console.log('PIN Async '+pin)
            // console.log('Async username '+user.username)
            // console.log('Response username '+response.user.username)
            // console.log(response)
            setLoading(false);
            //check if username is null
            // const isUserName = (user.username !== null);
           
            // bagian ini harusnya cek pin dulu trus ke main
            // if (username) navigation.navigate('MainApp')
            // else navigation.replace('Username');
            if (user.username && user) {

                if(pin === 'NULL')  navigation.navigate('BuatPIN')
                else navigation.navigate('SecurityCode')
                // // console.log("PIN NULL")
                
                // // navigate('BuatPIN')
                // else 
                // // navigate('SecurityCode')
                // Alert.alert('Dompet+', 'Login Success')
            }
            
        } catch (error) {
            setError(error.message);
            setLoading(false)
            Alert.alert('Dompet+', 'User ID atau Password Salah / Belum Terisi')
            // {toggleModal}
        }
    }
    return (
        <SafeAreaView style={styles.container}>
        <LinearGradient  colors={['#FF0000', '#FF0000', '#FF9292', '#FFFFFF',]}
        style={styles.background}>
        <Gap height={80}/>
           <IconDompetBig/>
           <View style={{justifyContent:'space-between' }}>
           <Gap height={27} />
           <View>
               <Text style={styles.labelForm}>User ID</Text>
           <TextInput style={styles.form}
               placeholder='username'
               value={form.username}
               onChangeText={value => setForm('username', value)}/>
           </View>
               <Gap height={15} />
               <View>
               <Text style={styles.labelForm}>Password</Text>
               <TextInput
               secureTextEntry
                style={styles.form}
               placeholder='password'
               value={form.password}
               onChangeText={value => setForm('password' , value )}/>
               </View>
               

               {/* <Form
               placeholder='username'
               onChangeText={user => setUsername(user)}/>
                <Gap height={15} />
               <Form
               placeholder='pass'
               onChangeText={pass , setPassword(pass)}/> */}
           </View>
           <Gap height={27}/>
                <Button 
                 title="MASUK" 
                 color='#4E0000' 
                 onPress={onSubmit} />
                 <Gap height={30}/>
            <View style={{ marginBottom:30 }}>
                <Button title="GOOGLE" color='#ff0000'/>
                <Gap height={17}/>
                <Button title="FACEBOOK" color='#0C25CB'/>
            </View>  
            </LinearGradient>  
        {/* </ImageBackground> */}
        {/* <Modal  isVisible={isModalVisible} animationOutTiming={300}  >
        <View style={styles.modal}>
          <Text style={{ fontSize:18, fontWeight:'bold' }}>WITHDRAW SUKSES</Text>
          <Gap height={20} />
            <IconCeklisBig/>
            <Gap height={20} />
            <Text style={{ fontSize:16, fontWeight:'bold', textAlign:'center' }}>Selamat, Penarikan Saldo {'\n'} BERHASIL</Text>
            <Gap height={10} />
            <Text style={{ fontSize:14, fontWeight:'700', textAlign:'center' }}>Dana Anda akan di transfer sesuai {'\n'} dengan jam kerja bank, paling lambat {'\n'} 2 x 24 jam, diluar hari libur bank.</Text>
            <Gap height={15} />
          <TouchableOpacity style={styles.buttonModal} onPress={toggleModal}>
            <Text>Oke</Text>
          </TouchableOpacity> 
        </View>
      </Modal> */}
    </SafeAreaView>
        
    )
}

export default SignIn

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: 'white',
      },
    imgBackground:{
        width:'100%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
        flex:1
        // marginTop:400
    },
    form:{
        backgroundColor:'white',
        width:250,
        height:35,
        paddingLeft:10,
        borderRadius:8
    },
    labelForm:{
        color:'white',
        fontWeight:'700',
        marginBottom:7
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      },
})

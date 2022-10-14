import React , {useState}from 'react'
import { StyleSheet, SafeAreaView, View, Text , TextInput, ScrollView } from 'react-native'
import { Header, Button, Gap } from '../../components';
import { useAuth } from '../../providers/auth';
import * as api from "../../services/auth"
const BuatPin = ({navigation}) => {

    const [pinAwal , setAwal] = useState('');
    const [pin , setPin] = useState('');
    const [pin2 , setPin2] = useState('');
    const [error, setError] = useState(null);
    const {pinAsyn , updatePin } = useAuth();
    const [loading , setLoading] = useState(false);

    const data = {
        oldPin : pinAwal,
        pin1 : pin,
        pin2 :pin2
    }
    async function changePIN(){
        setLoading(true)

        try{
            const res = await api.changePin(data);
            console.log(res)
            // updatePin(res)
            setLoading(false);
        }catch(error){
            setError(error.message)
            setLoading(false)
        }
    }
    return (
        <SafeAreaView style={{ flex:1, backgroundColor:'#5A0000' }}>
            <ScrollView style={{ flex:1, backgroundColor:'white' }}>
                <Header title='Ganti PIN' onPress={()=> navigation.navigate('Profile')}/>

                <Gap height={20}/>
                <Text style={styles.title}>Masukkan PIN Sebelumnya</Text>
                <View style={styles.textInputContainer}>
                <TextInput
                secureTextEntry
                keyboardType='numeric'
                placeholder='******'
                onChangeText={pinAwal => setAwal(pinAwal)}/>
                </View>

                <Gap height={20}/>
                <Text style={styles.title}>Buat PIN Baru</Text>
                <View style={styles.textInputContainer}>
                <TextInput
                secureTextEntry
                keyboardType='numeric'
                placeholder='******'
                onChangeText={pin => setPin(pin)}/>
                </View>

                <Gap height={20}/>
                <Text style={styles.title}>Konfirmasi PIN Baru</Text>
                <View style={styles.textInputContainer}>
                <TextInput
                secureTextEntry
                keyboardType='numeric'
                placeholder='******'
                onChangeText={pin1 => setPin2(pin1)}
                />
                </View>
                
                <Gap height={50}/>
                <View style={{ justifyContent:'center', alignItems:'center' }}>
                    <Button 
                    title='Submit'
                    onPress={changePIN}/>
                </View> 
            </ScrollView>
            </SafeAreaView>
    )
}

export default BuatPin

const styles = StyleSheet.create({
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
})


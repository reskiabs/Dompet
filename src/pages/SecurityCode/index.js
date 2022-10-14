import React , {useState,useEffect} from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View ,Alert, StatusBar } from 'react-native';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import { useFonts } from 'expo-font';
import { Button, Gap } from '../../components';
import { useAuth } from "../../providers/auth";
import { TextInput } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';


export default function App (props ) {
 
  const {navigate} = props.navigation;
  const {state} = useAuth();
  const [code , setCode] = useState('');
  const user = state.user;
  const {handleLogout} = useAuth();
  const [isDisable , setDisable] = useState(false);

  const sha512 = require('js-sha512');
  const md5 = require('md5');

  const inputPin = sha512(md5(code));
  const { getAuthState } = useAuth();
  
  
  cekPin = async ()  => {
    const {pin} = await getAuthState();
    // console.log("Input PIN = "+inputPin)
    // console.log("State PIN = "+pin)

      if(inputPin == pin){
        navigate('MainApp')
        let clear =''
        setCode(clear)
        setDisable(true)
      }
      else{
        
        Alert.alert('Dompet+','Pin yang anda masukkan salah!!!');
        let clear =''
        setCode(clear)
      } 
      
  }

  const [loaded] = useFonts({
    Quicksand: require('../../assets/fonts/Quicksand-Bold.ttf'),
    // Poppins2: require('../../assets/fonts/Poppins-Regular.ttf'),
  });
  if (!loaded) {
    return null;
  }
      return (
        <View style={styles.container}>
          <StatusBar barStyle="light-content"/>
          <LinearGradient  colors={['#060000', '#400000', '#5D0000', '#FF0000',]}
        style={styles.background}>
          <Gap height={75}/>
          <View style={styles.section}>

          {/* <Button title='Logout' onPress={() => {
                handleLogout();
                navigate("SplashScreen");
            }}/> */}

            <Text style={styles.title}>Masukkan Security Code Anda</Text>
            <Gap height={40}/>
            {/* <TextInput placeholder='okelah'
            onChangeText={code => setCode(code)}></TextInput>
            <Button
            title="Submit"
            onPress={cekPin}/> */}
            <SmoothPinCodeInput
              placeholder={<View style={{
                width: 15,
                height: 15,
                borderRadius: 25,
                // opacity: 0.3,
                // backgroundColor: 'blue',
                borderWidth:2,
                borderColor:'white'
              }}></View>}
              mask={<View style={{
                width: 15,
                height: 15,
                borderRadius: 25,
                backgroundColor: 'white',
              }}></View>}
              maskDelay={1000}
              password={true}
              codeLength={6}
              cellStyle={null}
              cellStyleFocused={null}
              value={code}
              onTextChange={code => setCode(code)}
            />
            <Gap height={30}/>
            <Button title='Submit' onPress={cekPin} 
            // disabled={isDisable}
            />
          <Gap height={20}/>
          <TouchableOpacity onPress={() => navigate('BuatPIN') }>
            <Text style={styles.subTitle}>Lupa Security Code</Text>
          </TouchableOpacity>
        
          </View>
          </LinearGradient>
        </View>
      );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // alignItems: 'center',
    // paddingTop:70
    // justifyContent: 'center',
  },
  section: {
    alignItems: 'center',
    margin: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color:'white',
    fontFamily:'Quicksand'
  },
  subTitle:{
    color:'#2D9CBD',
    fontSize:14,
    fontWeight:'700',
    fontFamily:'Quicksand'
  },
  submit:{
    backgroundColor:'white'
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

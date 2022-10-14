import React, { useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ImageBackground, SafeAreaView } from 'react-native'
import { IconDompetRed, TextDompet, OK, Splash} from '../../assets'
import { Button, Gap } from '../../components'
import TestLogo from '../../assets/Background/testLogo.svg'
import { useFonts } from 'expo-font';
import { Tokolapak } from '../../assets'

const SplashScreen = ({navigation}) => {

    useEffect(() => {
        setTimeout(() => {
          navigation.navigate('SignIn');
        }, 2000);
      }, []);

    const [loaded] = useFonts({
        Quicksand: require('../../assets/fonts/Quicksand-Bold.ttf'),
        // Poppins2: require('../../assets/fonts/Poppins-Regular.ttf'),
      });
      if (!loaded) {
        return null;
      }
    return (
        <SafeAreaView style={styles.container}>
            <Splash/>
            <Text style={styles.titleDP}>Dompet Plus</Text>
            {/* <View style={{ flexDirection:'row', marginBottom:100, alignItems:'flex-end'}}>
                <IconDompetRed/>
                <Gap width={10} />
                <Text style={{ fontFamily:'Quicksand', fontWeight:'bold', fontSize:40, color:'#FF2323',}}>ompet{'\n'}Plus</Text>
            </View>
            <Tokolapak/> */}
        </SafeAreaView>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        justifyContent:'space-around',
        alignItems:'center'
    },
    imgBackground:{
        // flex:1,
        width:'90%',
        height:'90%',
        marginBottom:-10
    },
    title:{
        color:'white',
        textAlign:'center',
        fontWeight:'500',
        fontFamily:'Poppins'
        // fontSize:12
    },
    subTitle:{
        color:'white',
        textAlign:'center',
        fontWeight:'500',
        marginTop:15,
        fontFamily:'Poppins'
    },
    titleDP:{ fontFamily:'Quicksand', fontWeight:'bold', fontSize:18, color:'#FF2323',}
})

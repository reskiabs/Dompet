import React from 'react'
import { ImageBackground, StyleSheet, View } from 'react-native'
import { IconDompetBig, IconDompetRed } from '../../assets/icons'
import { Button } from '../../components'
import TestLogo from '../../assets/Background/testLogo.svg'

const WelcomeScreen = ({navigation}) => {
    return (
        <ImageBackground style={ styles.imgBackground } 
                 resizeMode='cover' 
                 source={require('../../assets/Background/Rectangle.png')}>
                     <View style={{ marginBottom:280, marginTop:50}}>
                        
                        <IconDompetRed/>
                     </View>
                     
                     <TestLogo
                        style={{
                            position: 'absolute',
                            // top: 300,
                            left: 0,
                            right: 16,
                            bottom: 0,
                        }}
                        />
                    <Button title='DAFTAR' onPress={()=> navigation.navigate('SignIn')} />   
        </ImageBackground>
    )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    imgBackground:{
        flex:1,
        width:'100%',
        height:'100%',
        justifyContent:'space-around',
        alignItems:'center',
        // marginTop:400
    },
    button:{
        width:260,
        height:44,
        backgroundColor:'#ff0000',
        borderRadius:50,
        justifyContent:'space-around',
        alignItems:'center',
        paddingLeft:50,
        // marginTop:300,
        // marginBottom:10,
        flexDirection:'row'
    },
    buttonTitle:{
        fontWeight:'700',
        color:'white',
        textAlign:'center',
        // marginRight:90
    },
})

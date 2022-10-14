import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import AuthProvider from "../providers/auth";
import React from 'react';
import {
  Barcode, 
  History, 
  Home, 
  More, 
  SplashScreen, 
  WelcomeScreen, 
  TopUp, 
  Transaksi, 
  User, 
  WithDraw, 
  SignIn, 
  ToastMessage, 
  LoginScreen, 
  Notification, 
  HalamanTest,
  SecurityCode,
  AuthLoading,
  AuthPin,
  TestProfile,
  TransaksiTest,
  BarcodeTest,
  BuatPIN,
  TrMerchant, 
  GantiPin, 
  ConfirmTopUp,
  Test,
  TranksaksiDetail,
  ConfirmTransfer,
  PinScreen,
  Nota
} from '../pages';
 


import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native'
import { Qris, QRcode, IconHome, IconUser, IconMore, IconTransaksi, IconHomeOn, IconUserOn, IconTransaksiOn, IconMoreOn, QrCodeOn, } from '../assets/icons';
import Qrcode from '../pages/Qrcode';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress, focused}) => (
    <TouchableOpacity activeOpacity={0.7}
    style={{ 
      top:-30,
      justifyContent:'center',
      alignItems:'center',
      marginBottom:-23,
      // backgroundColor:'red'
     }}
     onPress={onPress}
  >
    <View style={{ 
      width:53,
      height:53,
      borderRadius:35,
      backgroundColor:'#ff0000',
      borderColor:'#ffffff',
      borderWidth:3
     }}>
       {children}
    </View>
    <View>
      <Qris/>
    </View>
  </TouchableOpacity>
)
const MainApp = ()=>{
    return(
    <Tab.Navigator tabBarOptions={{
      showLabel: false,
      style:{
        // position:'absolute',
        // bottom:25,
        // left:20,
        // right:20,
        // elevation:0,
        backgroundColor:'#ffffff',
        // borderRadius:15,
        // borderTopWidth:3,
        // borderTopColor:'#ff0000'
        
        // height:90,
        // ...styles.shadow
      }}
    
    }>
      <Tab.Screen name="Home" component={Home} options={{ 
        tabBarIcon:({focused})=>(
          <View style={{ alignItems:'center', justifyContent:'center' }}>
            {focused ? <IconHomeOn/> : <IconHome/>}
            <Text style={{ color: focused ? '#ff0000' :'#B6B7B7',fontSize:10 }}>Home</Text> 
            </View>
        ),
       }}  />
      <Tab.Screen name="Transaksi" component={TransaksiTest} options={{ 
        tabBarIcon:({focused})=>(
          <View style={{ alignItems:'center', justifyContent:'center' }}>
            {focused ? <IconTransaksiOn/> : <IconTransaksi/>}
            <Text style={{ color: focused ? '#ff0000' :'#B6B7B7',fontSize:10 }}>Transaksi</Text> 
            </View>
        ),
       }} />
      <Tab.Screen name="Barcode" component={Barcode} options={{ 
        tabBarIcon:({focused})=>(
          <View>
            {focused ? <QrCodeOn/> : <QrCodeOn/> }
          </View>
          
            // <Image 
            // source={require('../assets/icons/QRcode.png')}
            // resizeMode='contain'
            // style={{ 
            //   width:28,
            //   height:28,
            //   tintColor: '#020202'
            //  }}
            // />
            // {/* <Text style={{ color: focused ? '#ff0000' :'#B6B7B7',fontSize:12 }}>Home</Text> */} 
        ),
        tabBarButton: (props) => (
          <CustomTabBarButton {...props} />
        ),
       }} 
       />
      <Tab.Screen name="Profile" component={User} options={{ 
        tabBarIcon:({focused})=>(
          <View style={{ alignItems:'center', justifyContent:'center' }}>
            {focused ? <IconUserOn/> : <IconUser/>}
              
            <Text style={{ color: focused ? '#ff0000' :'#B6B7B7',fontSize:10 }}>Profile</Text> 
            </View>
        ),
       }} />
      <Tab.Screen name="More" component={Test} options={{ 
        tabBarIcon:({focused})=>(
          <View style={{ alignItems:'center', justifyContent:'center' }}>
            {focused ? <IconMoreOn/> : <IconMore/>}
            <Text style={{ color: focused ? '#ff0000' :'#B6B7B7',fontSize:10 }}>More</Text> 
            </View>
        ),
       }} />
    </Tab.Navigator>
    )
}

const Router = () => (
  <AuthProvider>
    <Stack.Navigator>
      <Stack.Screen name="AuthLoading" component={AuthLoading} options={{ headerShown: false }} />
      <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{ headerShown: false }} />
      {/* <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{ headerShown: false }} /> */}
      <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
      <Stack.Screen name="AuthPin" component={AuthPin} options={{ headerShown: false }} />
      <Stack.Screen name="SecurityCode" component={SecurityCode} options={{ headerShown: false }} />
      <Stack.Screen name="Notification" component={Notification} options={{ headerShown: false }} />
      <Stack.Screen name="Qrcode" component={Qrcode} options={{ headerShown: false }} />
      {/* <Stack.Screen name="Home" component={HomePage} options={{ headerShown: false }} />
      <Stack.Screen
        name="DetailProduk"
        component={DetailProduk}
        options={{ headerShown: false }}
      /> */}
      
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="TopUp" component={TopUp} options={{ headerShown: false }} />
      <Stack.Screen name="WithDraw" component={WithDraw} options={{ headerShown: false }} />
      <Stack.Screen name="History" component={History} options={{ headerShown: false }} />
      <Stack.Screen name="ToastMessage" component={ToastMessage} options={{ headerShown: false }} />
      <Stack.Screen name="BuatPIN" component={BuatPIN} options={{ headerShown: false }} />
      <Stack.Screen name="TrMerchant" component={TrMerchant} options={{ headerShown: false }} />
      <Stack.Screen name="GantiPin" component={GantiPin} options={{ headerShown: false }} />
      <Stack.Screen name="ConfirmTopUp" component={ConfirmTopUp} options={{ headerShown: false }} />
      <Stack.Screen name="ConfirmTransfer" component={ConfirmTransfer} options={{ headerShown: false }} />
      <Stack.Screen name="PinScreen" component={PinScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Nota" component={Nota} options={{ headerShown: false }} />
    </Stack.Navigator>
    </AuthProvider>
  );
  
  export default Router;

  const styles = StyleSheet.create({
    shadow:{
      shadowColor:'#7f5df0',
      shadowOffset:{
        width:0,
        height:10,
      },
      shadowOpacity:0.25,
      shadowRadius:3.5,
      elevation:5
    }
  });
import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, StatusBar, ScrollView } from 'react-native'
import { Header, Gap, Button } from '../../components'

const Nota = ({navigation , route}) => {

    const transaksi = route.params?.transaksi;
    return (
        <SafeAreaView>
            <StatusBar barStyle='dark-content'/>
            <Header onPress={()=> navigation.navigate('ConfirmTransfer')} title='Transaksi Berhasil'/>
            <View  style={styles.page}>
            <ScrollView style={styles.container}>
            <Gap height={10}/>
                <View style={styles.list}>
                <Text>Tanggal</Text>
                <Text>11-12-1999</Text>
                </View>
                <Gap height={10}/>
                <View style={styles.list}>
                <Text>No Referensi</Text>
                <Text>48741058539</Text>
                </View>
                <Gap height={15}/>
                <View style={styles.HorizontalLine}/>
                <Gap height={20}/>
                <View style={styles.list}>
                    <Text style={styles.title}>Sumber Dana</Text>
                    <View>
                    <Text style={styles.subTitle}>Reski Abbas</Text>
                    <Gap height={5}/>
                    <Text style={styles.subTitle}>082195157186</Text>
                    </View>
                </View>
                <Gap height={15}/>
                <View style={styles.list}>
                    <Text style={styles.title}>Jenis Transaksi</Text>
                    <Text style={styles.subTitle}>Transfer</Text>
                </View>
                <Gap height={25}/>
                <View style={styles.list}>
                    <Text style={styles.title}>Bank Tujuan</Text>
                    <Text style={styles.subTitle}>BANK BRI</Text>   
                </View>
                <Gap height={25}/>
                <View style={styles.list}>
                    <Text style={styles.title}>No Tujuan</Text>
                    <Text style={styles.subTitle}>48741058539</Text>
                </View>
                <Gap height={25}/>
                <View style={styles.list}>
                    <Text style={styles.title}>Nama Tujuan</Text>
                    <Text style={styles.subTitle}>Andi Agung</Text>
                </View>
                <Gap height={25}/>
                <View style={styles.HorizontalLine}/>
                <Gap height={15}/>
                <View style={styles.list}>
                    <Text>Nominal</Text>
                    <Text>Rp.10001001</Text>
                </View>
                <Gap height={7}/>
                <View style={styles.list}>
                    <Text>Biaya Admin</Text>
                    <Text>RP.500</Text>
                </View>
            </ScrollView>
            
            </View>
        <View style={styles.button}>
        <Button title='OK' onPress={()=> navigation.navigate('Home')} />
        </View>
        </SafeAreaView>
    )
}

export default Nota

const styles = StyleSheet.create({
    page:{
        justifyContent:'center',
        alignItems:'center',
    },
    container:{
        width:'85%',
        paddingHorizontal:15,
        backgroundColor:'white',
        height:'78%',
        shadowColor: "#000",
        shadowOffset: {
            width: 3,
            height: 2,
        },
        shadowOpacity: 0.35,
        shadowRadius: 3.84,

        elevation: 5,
            },
            HorizontalLine:{
                width:"100%",
                
                borderStyle:'dashed',
                borderWidth:1,
                borderColor:'grey',
                
            },
            button:{ 
                justifyContent:'center', 
                alignItems:'center', 
                marginVertical:10,
                bottom:0
            },
            list:{
             
                    flexDirection:'row', 
                alignItems:'center', 
                justifyContent:'space-between'
            },
            subTitle:{
                fontSize:15,
                fontWeight:'600'
            },
            title:{
                fontSize:15
            }
})

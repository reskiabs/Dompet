import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView, StatusBar } from 'react-native'
import { IconAtm, IconTransaksi, BawahGray } from '../../assets'
import { Header, Button,Gap, HorizontalLine, Angka } from '../../components'
import DropDownItem from 'react-native-drop-down-item';

const ConfirmTopUp = ({navigation}) => {
    this.state = {
        contents: [
          {
            title: 'Top Up Via ATM',
            body: 'Pilih Lainnya > Lainnya > Multi Payment',
            body: 'Masukkan Nomor Virtual Accoun 082195157186 dan pilih benar',
            body: 'Masukkan Jumlah Top Up Dompet+ yang di inginkan Min. Rp 50.000',
            body: 'Periksa Informasi Yang tertera di layar. Pastikan Merchant adalah Dompet+ dan username kamu reskiabs. jika benar pilih ya',
            isAuthenticated: false
          },
          {
            title: 'Top Up Via Mobile Banking',
            body: 'Yes. You can have more items.',
            isAuthenticated: false
          },
          {
            title: 'Top Up Via Indomaret',
            body: 'What about very long text? What about very long text?',
            isAuthenticated: false
          },
        ],
      };
    return (
        <SafeAreaView style={styles.page}>
            <StatusBar barStyle="dark-content"/>
            <Header title='Pembayaran' onPress={()=> navigation.navigate('TopUp')} />
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <Gap height={10}/>
                <View style={styles.content}>
                    <View style={{ paddingTop:10, paddingLeft:10, flexDirection:'row', alignItems:'center' }}>
                    <IconAtm/>
                    <Gap width={8}/>
                    <Text style={{ fontWeight:'600', fontSize:14 }}>Transfer Melalui ATM</Text>
                    </View>
                    <Gap height={10}/>

                    <View style={{
                        width:'90%',
                        height:1,
                        backgroundColor: '#8d92a3',
                        marginLeft:50
                    }}
                    />

                    <View style={{ marginLeft:50, marginTop:10 }}>
                        <Text>No. Rekening</Text>
                        <Text style={{ fontWeight: "500", fontSize: 23, color: "#ff0000", marginTop:10 }}>08219157186</Text>
                        
                        <View style={{
                        width:'100%',
                        height:1,
                        backgroundColor: '#8d92a3',
                        marginTop:10
                        }}
                        />
                    </View>
                </View>
                <View style={styles.content2}>
                        <Text style={{ marginTop:10, marginLeft:10, fontSize:16 }}>Petunjuk Top Up</Text>
                        {/* <View style={{
                        width:'100%',
                        height:1,
                        backgroundColor: '#8d92a3',
                        marginTop:15
                        }}
                        /> */}
                        <View style={{ borderColor: '#8d92a3', borderStyle:'dashed', borderWidth:1, marginVertical:15, }}></View>
                        {/* <Angka nomor='1' title='Pilih Pembayaran' />
                        <Angka nomor='2' title='Pilih Lainnya > Lainnya > Multi Payment' />
                        <Angka nomor='3' title='Masukkan Nomor Virtual Accoun 082195157186 dan pilih benar' />
                        <Angka nomor='4' title='Masukkan Jumlah Top Up Dompet+ yang di inginkan Min. Rp 50.000' />
                        <Angka nomor='5' title='Periksa Informasi Yang tertera di layar. Pastikan Merchant adalah Dompet+ dan username kamu reskiabs. jika benar pilih ya' /> */}
                        <View >
                    <ScrollView style={{ alignSelf: 'stretch' }}>
                        {
                        this.state.contents
                            ? this.state.contents.map((param, i) => {
                            return (
                                <DropDownItem
                                key={i}
                                style={styles.dropDownItem}
                                contentVisible={false}
                            
                                header={
                                    <View>
                                    <Text style={{fontSize: 16, color: 'blue',}}>{param.title}</Text>
                                    {/* <BawahGray/> */}
                                    </View>
                                }>
                                <Text style={[styles.txt,{fontSize: 20, }]}>
                                    {param.body}
                                </Text>
                                </DropDownItem>
                            );})
                            : null
                        }
                        <View style={{ height: 96, }}/>
                    </ScrollView>
                    </View>
                </View>
                <Gap height={10}/>
            </ScrollView>
        <View style={{ justifyContent:'center', alignItems:'center', marginVertical:10}}>
        <Button title='Konfirmasi' onPress={()=> navigation.navigate('ConfirmTopUp')} />
        </View>
        </SafeAreaView>
    )
}

export default ConfirmTopUp

const styles = StyleSheet.create({
    page:{
        flex:1,
        backgroundColor:'white'
    },
    container:{
        backgroundColor:'#e5e5e5'
    },
    content:{
        height:150,
        backgroundColor:'white'
    },
    content2:{
        height:400,
        backgroundColor:'white',
        marginTop:10,
        // borderTopWidth:1,
        // borderTopColor:'red',
        // borderStyle:'dashed'
    },
})

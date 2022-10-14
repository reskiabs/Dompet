import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IconHpRed } from '../../../assets'
import { Gap } from '../../atoms'

const ContentPayment = ({label, title, color='black', bank, toPay}) => {
    return (
        <View style={styles.container}>
            <Gap height={20}/>
            <View style={{ flexDirection:'row', alignItems:'center' }}>
                <IconHpRed/>
                <Gap width={10}/>
                <Text style={styles.label(color)}>Konfirmasi Withdraw</Text>
            </View>
            <Gap height={20}/>

            <View style={{ justifyContent:'center', alignItems:'center'}}>
            <View style={{ width:190,}}>
                <Text>{toPay}</Text>
                <Text>{bank}</Text>
                <Gap height={15} />
                <View style={{ flexDirection:'row', justifyContent:'space-between' }}>
                    <Text>Withdraw</Text> 
                    <Text>Rp. 500.000</Text>
                </View>

                <View style={{ flexDirection:'row', justifyContent:'space-between' }}>
                    <Text>Biaya Admin</Text>   
                    <Text>Rp. 7.500</Text>
                </View>

                <View style={{ flexDirection:'row', justifyContent:'space-between' }}>
                     <Text>Total</Text>         
                     <Text>Rp. 507.500</Text>
                </View>       
            </View>
            </View>
            
            
        </View>
    )
}

export default ContentPayment

const styles = StyleSheet.create({
    container:{
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
        //   alignItems:'center',
        //   justifyContent:'space-between',
        //   flexDirection:'row',
        //   marginTop:7,
          paddingHorizontal:15,
          marginHorizontal:17,
          borderRadius:5 
    },
    label: (color) => ({
        fontWeight:'bold',
        color:color
    })
})

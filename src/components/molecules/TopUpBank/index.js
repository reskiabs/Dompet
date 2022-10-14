import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IconIpaymu, KananGray } from '../../../assets/icons'

const TopUpBank = ({title, icon}) => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection:'row', alignItems:'center',}}>
                {icon}
                <View style={{ marginLeft:20 }}>
                  <Text>{title}</Text>
                </View>      
            </View>     
            <KananGray/>
        </View>
    )
}

export default TopUpBank

const styles = StyleSheet.create({
    container:{
        height:67,
        width:'90%',
        backgroundColor:'white',
        shadowOffset: {
            width: 0,
            height: 9,
          },
          shadowOpacity: 0.15,
          shadowRadius: 8,
          elevation: 5,
          alignItems:'center',
          justifyContent:'space-between',
          flexDirection:'row',
          marginTop:7,
          paddingHorizontal:15,
          marginHorizontal:17,
          borderRadius:5      
    },
})

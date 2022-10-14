import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { PanahKanan } from '../../../assets'

const AktivasiDompet = ({onPress}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
              <View>
                <Text style={styles.title}>Aktivasi Dompet+</Text>
                <Text style={styles.subTitle}>Dan dapatkan lebih banyak keuntungan</Text>
              </View>
              <View style={{ marginLeft:10 }}>
              <PanahKanan/>
              </View>  
        </TouchableOpacity>
    )
}

export default AktivasiDompet

const styles = StyleSheet.create({
    container:{ 
        backgroundColor:'#ff0000', 
        height:52, 
        borderRadius:8, 
        width:'85%', 
        marginTop:15, 
        flexDirection:'row', 
        alignItems:'center', 
        paddingHorizontal:10, 
        paddingVertical:7,
        justifyContent:'center' 
    },
    title:{ 
        color:'white', 
        fontSize:15
    },
    subTitle:{ 
        color:'white', 
        fontSize:9.7, 
        marginTop:3 
    }
})

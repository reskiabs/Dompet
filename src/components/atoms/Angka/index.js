import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Angka = ({nomor, title}) => {
    return (
        <View style={styles.container}>
        <View style={styles.subContainer}>
            <Text style={styles.nomor}>{nomor}</Text> 
        </View>
        <Text style={styles.title}>{title}</Text>
        </View>
    )
}

export default Angka

const styles = StyleSheet.create({
    container:{flexDirection:'row', alignItems:'center', marginLeft:15},
    subContainer:{ backgroundColor:'red', width:20, height:20, justifyContent:'center', alignItems:'center', marginRight:10, marginVertical:15, borderRadius:20 },
    nomor:{ color:'white', fontWeight:'bold', },
    title:{
        color:'#8d92a3',
        // fontSize:15
        marginRight:50 
    }
})

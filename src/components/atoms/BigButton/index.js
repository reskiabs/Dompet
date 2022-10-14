import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const BigButton = ({title, onPress}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
            <Text style={styles.title}>{title}</Text>
            </TouchableOpacity>
        </View>
        
    )
}

export default BigButton

const styles = StyleSheet.create({
    container:{
        justifyContent:'center', alignItems:'center'
    },
    buttonContainer:{ backgroundColor:'#ff0000', height:60, width:'90%', paddingHorizontal:50, borderRadius:20, justifyContent:'center', alignItems:'center', marginVertical:15 },
    title:{ fontWeight:'700', fontSize:18, color:'white' }
})

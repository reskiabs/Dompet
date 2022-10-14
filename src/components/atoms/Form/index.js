import React , {useState} from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

const Form = ({label, placeholder , data }) => {

    return (
        <View style={styles.container}>
                   <Text style={styles.label}>{label}</Text>
                   <View style={styles.subContainer}>
                   <TextInput 
                   placeholder={placeholder}
                   onChangeText={data}
                   />
                   </View>
        </View>
    )
}

export default Form

const styles = StyleSheet.create({
    container:{ flexDirection:'row', justifyContent:'space-between', alignItems:'center' },
    label:{ color:'white', fontWeight:'700', fontSize:16 },
    subContainer:{ width:220, height:29, borderRadius:8, backgroundColor:'white', paddingHorizontal:10, justifyContent:'center', marginLeft:10, borderWidth:1, borderColor:'#8d92a3' }
})

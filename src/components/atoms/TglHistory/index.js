import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const TglHistory = ({title}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

export default TglHistory

const styles = StyleSheet.create({
    container:{
        height:26,
        width:'100%',
        backgroundColor:'#F98E8E'
    },
    title:{
        fontWeight:'bold',
        color:'#092058',
        paddingTop:5,
        textAlign:'center'
    }
})

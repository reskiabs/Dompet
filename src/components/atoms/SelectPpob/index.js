import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const SelectPpob = ({icon, title, onPress, marginTop, marginTitle}) => {
    return (
        <TouchableOpacity style={styles.container(marginTop)} onPress={onPress}>
            {icon}
            <Text style={styles.title(marginTitle)}>{title}</Text>
        </TouchableOpacity>
    )
}

export default SelectPpob

const styles = StyleSheet.create({
    container: (marginTop) => (
        { 
            marginTop:marginTop,
            alignItems:'center', 
            justifyContent:'space-around', 
        }
    ) ,
    title: (marginTitle) => (
        { 
            fontSize:14, 
            fontWeight:'700',
            marginTop:marginTitle
        }
    )
    
})

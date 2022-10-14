import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { color } from 'react-native-reanimated'
import { IconButton } from '../../../assets'

const Button = ({title, color='#ff0000', textColor='white', onPress, disabled}) => {
    return (
        <TouchableOpacity style={styles.container(color)} activeOpacity={disabled ? 0.2 : 0.3} onPress={onPress} disabled={disabled}>
            <Text style={styles.title(textColor)}>{title}</Text>
            {/* <IconButton/> */}
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    container: (color) => ({
        width:260,
        height:44,
        backgroundColor: color,
        borderRadius:50,
        alignItems:'center',
        justifyContent:'space-around',
        flexDirection:'row',
        
    }),
    title: (color) =>  ({
        fontWeight:'600',
        color:color
    }),
})

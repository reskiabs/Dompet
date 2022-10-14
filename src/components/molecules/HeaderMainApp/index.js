import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { IconBack } from '../../../assets/icons'
// import { WithDraw } from '../../../pages'

const Header = ({title, onPress}) => {
    return (
        <View style={styles.container} >
            <TouchableOpacity onPress={onPress}>
            {/* <IconBack/> */}
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#ff0000',
        flexDirection:'row',
        alignItems:'center',
        height:55,
        // paddingTop:20,
        paddingHorizontal:20,
        justifyContent:'center'
    },
    title:{
        color:'white',
        fontSize:18,
        fontWeight:'600',
        // marginLeft:20
        // textAlign:'center'
    }
})

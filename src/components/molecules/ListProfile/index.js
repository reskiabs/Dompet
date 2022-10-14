import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { KananGray } from '../../../assets'
import { Gap, HorizontalLine } from '../../atoms'

const ListProfile = ({title, onPress}) => {
    return (
        <View>
            <TouchableOpacity onPress={onPress}>
            <View style={styles.subContainer}>
            <Text style={styles.title}>{title}</Text>
            <KananGray/>
             </View>
             <HorizontalLine width='100%'/>
             </TouchableOpacity>
        </View>
        
    )
}

export default ListProfile

const styles = StyleSheet.create({
    
    subContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:313,
        // backgroundColor:'red',
        paddingVertical:20,
        paddingHorizontal:5
        
    },
    title:{
        fontSize:14,
        fontWeight:'bold'
    }
})

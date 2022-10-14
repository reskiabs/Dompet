import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { color } from 'react-native-reanimated'
import { Gap, HorizontalLine } from '../../atoms'

const ListHistory = ({title, subTitle, harga, color=''}) => {
    return (
        <View style={styles.container}>
            <Gap height={10}/>
            <Text style={styles.title}>{title} </Text>
            <View style={styles.subContainer}>
                <Text style={styles.subTitle}>{subTitle} </Text>
                <Text style={styles.harga(color)}>{harga} </Text>
            </View>
            <Gap height={10}/>
            <HorizontalLine width='100%'/>
        </View>
    )
}

export default ListHistory

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        marginHorizontal:10,
    },
    subContainer:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    title:{
        fontWeight:'bold',
        fontSize:14,
        marginBottom:7
    },
    subTitle:{
        // fontWeight:'600',
        fontSize:12,
        // marginBottom:7
    },
    harga: (color) => ({
        color:color
    })
})

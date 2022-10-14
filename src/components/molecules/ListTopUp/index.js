import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'


const ListTopUp = ({title}) => {
    return (
        <View style={styles.firstRouteContainer2}>
        <View style={{ marginVertical:20 }}>
            <Text style={{ fontWeight:'700', fontSize:14, marginLeft:20, marginTop:-15 }}>{title}</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexDirection:'row', marginTop:10, backgroundColor:'white'}}>
            <TouchableOpacity  style={{ borderWidth:1, marginLeft:13, borderColor: '#8d92a3', borderRadius:30, height:33, width:114, justifyContent:'center', alignItems:'center' }}>
                <Text style={{ fontSize:12 }}>Rp. 100.000</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ borderWidth:1, marginLeft:13, borderColor:'#8d92a3', borderRadius:30, height:33, width:114, justifyContent:'center', alignItems:'center' }}>
                <Text style={{ fontSize:12 }}>Rp. 200.000</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ borderWidth:1, marginLeft:13, borderColor:'#8d92a3', borderRadius:30, height:33, width:114, justifyContent:'center', alignItems:'center' }}>
                <Text style={{ fontSize:12 }}>Rp. 300.000</Text>
            </TouchableOpacity>
        </ScrollView>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexDirection:'row', marginTop:10, backgroundColor:'white'}}>
            <TouchableOpacity style={{ borderWidth:1, marginLeft:13, borderColor: '#8d92a3', borderRadius:30, height:33, width:114, justifyContent:'center', alignItems:'center' }}>
                <Text style={{ fontSize:12 }}>Rp. 400.000</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ borderWidth:1, marginLeft:13, borderColor:'#8d92a3', borderRadius:30, height:33, width:114, justifyContent:'center', alignItems:'center' }}>
                <Text style={{ fontSize:12 }}>Rp. 500.000</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ borderWidth:1, marginLeft:13,  borderColor:'#8d92a3', borderRadius:30, height:33, width:114, justifyContent:'center', alignItems:'center' }}>
                <Text style={{ fontSize:12}}>Rp. 1.000.000</Text>
            </TouchableOpacity>
        </ScrollView>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexDirection:'row', marginTop:10, backgroundColor:'white'}}>
            <TouchableOpacity  style={{ borderWidth:1, marginLeft:13, borderColor: '#8d92a3', borderRadius:30, height:33, width:114, justifyContent:'center', alignItems:'center' }}>
                <Text style={{ fontSize:12 }}>Rp. 2.500.000</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ borderWidth:1, marginLeft:13, borderColor:'#8d92a3', borderRadius:30, height:33, width:114, justifyContent:'center', alignItems:'center' }}>
                <Text style={{ fontSize:12 }}>Rp. 5.000.000</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ borderWidth:1, marginLeft:13, borderColor:'#8d92a3', borderRadius:30, height:33, width:114, justifyContent:'center', alignItems:'center' }}>
                <Text style={{ fontSize:12 }}>Rp. 10.000.000</Text>
            </TouchableOpacity>
        </ScrollView>
        </View>
        </View>
    )
}

export default ListTopUp

const styles = StyleSheet.create({
    firstRouteContainer2:{
        marginTop:20,
        backgroundColor:'white',
      shadowOffset: {
        width: 0,
        height: 9,
      },
      shadowOpacity: 0.15,
      shadowRadius: 3.84,
      elevation: 5,
    },
})

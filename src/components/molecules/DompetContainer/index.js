import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { IconTopUp } from '../../../assets/icons'
import { Gap } from '../../atoms'
import RNPickerSelect from 'react-native-picker-select';
import HeaderLogin from '../HeaderLogin';


const DompetContainer = ({title, balance, onPress }) => {
    return (
        <View style={styles.firstRouteContainer1}>
              <View style={{ marginVertical:20 }}>
                  <Text style={{ fontWeight:'700', fontSize:14, marginLeft:20 }}>{title}</Text>
                  <View style={{ alignItems:'center', marginTop:10 }}>
                      <TouchableOpacity onPress={onPress} style={{ borderWidth:1, borderColor:'#8d92a3', height:70, width:'87%', borderRadius:8, flexDirection:'row', alignItems:'center' }}>
                          <IconTopUp/>
                          <View style={{ marginLeft:10 }}>
                              <Text style={{ fontWeight:'700' }}>Dompet+</Text>
                              <Gap height={7}/>
                            <Text>{balance}</Text> 
                            
                          </View>
                      </TouchableOpacity>
                  </View>
              </View> 
          </View>
    )
}

export default DompetContainer

const styles = StyleSheet.create({
    firstRouteContainer1:{
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

import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { IconTopUp } from '../../../assets/icons'
import { Gap } from '../../atoms'
import RNPickerSelect from 'react-native-picker-select';
import HeaderLogin from '../HeaderLogin';
import { RadioButton } from 'react-native-paper'


const DompetContainerSelect = ({title, saldo, saldo_bonus, onPress , onValueChange }) => {
    const [checked, setChecked] = React.useState('first');
    return (
        <View style={styles.pageSelect}>
              <View style={{ marginVertical:20 }}>
                  <Text style={styles.titleSelect}>{title}</Text>
                  <View style={styles.pageContainer}>

                      <TouchableOpacity onPress={onPress} style={styles.containerSelect}>
                          <IconTopUp/>
                          <View style={{ marginLeft:10}}>

                          <View style={styles.selectContent}>
                          <Text>{saldo}</Text>
                          <Gap width={25}/>
                            <RadioButton
                                value="first"
                                status={ checked === 'first' ? 'checked' : 'unchecked' }
                                onPress={() => setChecked('first')}
                            />
                            </View>
                            
                        <View style={styles.selectContent}>
                            <Text>{saldo_bonus}</Text>
                            <Gap width={25}/>
                            <RadioButton
                                value="second"
                                status={ checked === 'second' ? 'checked' : 'unchecked' }
                                onPress={() => setChecked('second')}
                            />
                            </View>
                        </View>

                      </TouchableOpacity>
                  </View>
              </View> 
          </View>
    )
}

export default DompetContainerSelect

const styles = StyleSheet.create({
    pageSelect:{
        backgroundColor:'white',
        shadowOffset: {
          width: 0,
          height: 9,
        },
        shadowOpacity: 0.15,
        shadowRadius: 3.84,
        elevation: 5,
      },
      titleSelect:{ 
          fontWeight:'700', 
          fontSize:14, 
          marginLeft:20 
        },
      pageContainer:{ 
          alignItems:'center', 
          marginTop:10 
        },
      containerSelect:{ 
          borderWidth:1, 
          borderColor:'#8d92a3', 
          height:90, 
          width:'87%', 
          borderRadius:8, 
          flexDirection:'row', 
          alignItems:'center',
          paddingHorizontal:10
        },
        selectContent:{ 
            flexDirection:'row', 
            alignItems:'center', 
            justifyContent:'space-between',
            
        }
})

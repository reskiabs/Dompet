import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const ListPpob = ({icon, onPress, title, marginTop=-10}) => {
    return (
        <View style={styles.ppobCard} onPress={()=> navigation.navigate('ToastMessage')}>
              {icon}
              <Text style={styles.title(marginTop)}>{title}</Text>
        </View>
    )
}

export default ListPpob

const styles = StyleSheet.create({
    ppobCard:{
        justifyContent:'space-around',
        alignItems:'center',
        marginHorizontal:7,
        width:'20%',
        height:57,
        backgroundColor:'white',
        borderRadius:8,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.35,
        shadowRadius: 3.84,
        elevation: 5,
      },
      title: (marginTop) => (
        { 
            fontSize:10, 
            marginTop:marginTop 
        }
      )
})

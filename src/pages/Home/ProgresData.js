import React from 'react'
import { StyleSheet, Text, View ,ProgressBarAndroid} from 'react-native'

const ProgresData = ({loading , style}) => {
    function CheckLoading() {
        if(loading == true){
          return(
            <Text style={style}>{value}</Text>
          )
        }else{
          return(
            <View style={styles.progress}>
            <ProgressBarAndroid
             styleAttr="Small"
             color="#ffff"
            />
            </View>
          )
        }
    }
  
    return (
        <View>
            {CheckNull()}
        </View>
    )
}

export default ProgresData

const styles = StyleSheet.create({
  progress: {
    marginVertical: 29,
  }
})

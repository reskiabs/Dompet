import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const ButtonLogin = ({text, color = '#ff0000', icon, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
      <View style={styles.container(color)}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonLogin;

const styles = StyleSheet.create({
  container: color => ({
    backgroundColor: color,
    padding: 12,
    borderRadius: 50,
    width: 307,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
  }),
  text: {
    // fontFamily: 'Poppins-Medium',
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

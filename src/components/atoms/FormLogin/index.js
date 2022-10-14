import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

const FormLogin = ({placeholder}) => {
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        // {...restProps}
      />
    </View>
  );
};

export default FormLogin;

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#f0f0f0',
    borderRadius: 50,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 25,
    width: 307,
    height: 56,
    // fontFamily: 'Poppins-Light',
    fontSize: 16,
  },
});

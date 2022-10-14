import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import { useFonts } from 'expo-font';
import { Gap } from '../../components';

export default class App extends React.Component {

  state = {
    code: '',
    password: '',
  };
  pinInput = React.createRef();

  _checkCode = (code) => {
    if (code != '1234') {
      this.pinInput.current.shake()
        .then(() => this.setState({ code: '' }));
    }
  }

  render() {
    const { code, password } = this.state;
      return (
        <View style={styles.container}>
          <View style={styles.section}>
            <Text style={styles.title}>Masukkan Security Code Anda</Text>
            <Gap height={20}/>
            <SmoothPinCodeInput
              placeholder={<View style={{
                width: 15,
                height: 15,
                borderRadius: 25,
                opacity: 0.3,
                // backgroundColor: 'blue',
                borderWidth:2,
                borderColor:'white'
              }}></View>}
              mask={<View style={{
                width: 15,
                height: 15,
                borderRadius: 25,
                backgroundColor: 'white',
              }}></View>}
              maskDelay={1000}
              password={true}
              codeLength={6}
              cellStyle={null}
              cellStyleFocused={null}
              value={code}
              onTextChange={code => this.setState({ code })}
            />
          <Gap height={20}/>
          <TouchableOpacity onPress={() => { this.props.navigation.navigate('BuatPIN') }}>
            <Text style={styles.subTitle}>Lupa Security Code</Text>
          </TouchableOpacity>
          </View>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5A0000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  section: {
    alignItems: 'center',
    margin: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color:'white',
    // fontFamily:'Quicksand'
  },
  subTitle:{
    color:'#2D9CBD',
    fontSize:14,
    fontWeight:'700'
  }
});

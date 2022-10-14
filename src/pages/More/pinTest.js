import React, { Component, useState, useEffect } from "react";
import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width, height } = Dimensions.get("window");


const PinScreen = ({ navigation }) => {
  const [passcode, setPasscode] = useState(['','','','','','']);
  const [pass , setPass] = useState('');
  console.log("panjang passcode :" + passcode)

  async function onPressNumber(num){
    let tempCode = passcode
    console.log(tempCode)
    try{
      for(var i=0 ; i<tempCode.length; i++){
        if (tempCode[i] == "") {
          tempCode[i] = num;
          break;
        }else if(tempCode[5]=!""){
          break;
        }
         else {
          continue;
        }
      }
      setPass(tempCode)
    }catch{
      let clear =''
      setPasscode(clear)
    }finally{

    }
  }
  function _onPressNumber(num){
    let tempCode = passcode;
    
    for (var i = 0; i < tempCode.length; i++) {
      if (tempCode[i] == "") {
        tempCode[i] = num;
        break;
      } else {
        continue;
      }
    }
    setPass(tempCode);
  };

  console.log(pass)

  function _onPressCancel(){
    let tempCode = passcode;
    for (var i = tempCode.length - 1; i >= 0; i--) {
      if (tempCode[i] != '') {
        tempCode[i] = '';
        break;
      } else {
        continue;
      }
    }
    setPasscode(tempCode);
    console.log('temp delete:' + tempCode)
  };
  let numbers = [
    { id:'1' },
    { id:'2' },
    { id:'3' },
    { id:'4' },
    { id:'5' },
    { id:'6' },
    { id:'7' },
    { id:'8' },
    { id:'9' },
    { id:'0' },
  ];

  console.log("inimi pass code :" + passcode)
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        source={require("../../assets/Background/hd.jpeg")}
        style={{ position: "absolute", top: 0, width: width, height: height }}
        blurRadius={15}
      />
      <View style={styles.swipe}>
        <View>
          <View>
            <Text style={styles.passcodeText}>Enter Pass Code</Text>
          </View>
          <View style={styles.codeContainer}>
            {passcode.map((p) => {
              let style = p != '' ? styles.code2 : styles.code1;
              return <View style={style}></View>;
            })}
          </View>
        </View>
      </View>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <View style={styles.numbersContainer}>
          {numbers.map((num) => {
            return (
              <TouchableOpacity
                style={styles.number}
                key={num.id}
                onPress={() => onPressNumber(num.id)}
              >
                <Text style={styles.numberText}>{num.id}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity>
          <Text
            style={styles.buttonText}
            onPress={() => {
              navigation.goBack();
            }}
          >
            Batal
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => _onPressCancel()}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PinScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  swipe: {
    marginTop: 10,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  swipeUpText: {
    // fontFamily:'Poppins',
    fontSize: 17,
    color: "white",
    letterSpacing: -0.41,
    lineHeight: 22,
  },
  passcodeText: {
    fontSize: 22,
    color: "white",
    letterSpacing: 0.34,
    lineHeight: 25,
  },
  codeContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 18,
    flexDirection: "row",
  },
  code1: {
    width: 15,
    height: 15,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "white",
  },
  code2: {
    width: 15,
    height: 15,
    borderRadius: 15,
    backgroundColor: "white",
  },
  number: {
    height: 75,
    width: 75,
    borderRadius: 75,
    backgroundColor: "rgba(255,255,255,0.1)",
    justifyContent: "center",
    alignItems: "center",
    margin: 7,
  },
  numbersContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
    height: 348,
    width: 282,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    fontSize: 36,
    color: "white",
    letterSpacing: 0,
    textAlign: "center",
    fontWeight: "600",
  },
  buttons: {
    marginTop: 30,
    marginLeft: 46,
    marginRight: 46,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  buttonText: {
    fontSize: 16,
    color: "white",
    fontWeight: "700",
    letterSpacing: -0.39,
    textAlign: "center",
  },
});

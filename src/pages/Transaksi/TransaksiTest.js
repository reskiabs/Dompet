import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView, 
  Alert , 
  ToastAndroid,
  Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import { BawahGray, IconCeklisBig, IconAtm } from "../../assets/icons";
import {
  Button,
  ContentPayment,
  DompetContainer,
  Gap,
  HeaderMainApp,
} from "../../components";
import {
  Ellips,
  IconHpRed,
  IconSearch,
  IconUser,
  IconUserOn,
} from "../../assets/icons";
import * as api from "../../services/auth";
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";
import Modal from "react-native-modal";
import Barcode from "../Barcode";
import { useFonts } from "expo-font";
import DropDownPicker from 'react-native-dropdown-picker'
import RNPickerSelect from 'react-native-picker-select';
const TransaksiTest = ({ navigation, route }) => {

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    
  };

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [user, setUser] = useState({});
  const [saldo, setSaldo] = useState({});
  const [nominal, setNominal] = useState("");

  const [tranksaksi, setTranksaksi] = useState({});
  const [userName, onChangeUserName] = useState("");
  const [pesanSaldo, setPesanSaldo] = useState("");
  const [isTransferEnable, setTransferEnable] = useState(false);
  const [pilih , setPilih] = useState('');
  const transfer = true;
  // const [get, setGet] = useState("");
  useEffect(() => {
    if (route.params?.qrUserName) {
      fetchData = async () => {
        try {
          let response = await api.searchUser(route.params?.qrUserName);
          setUser(response);
          // console.log(user)
        } catch (error) {
          // setError(error.message);
          console.log(error.message);
          setLoading(false);
        }
      };
      fetchData();
      onChangeUserName(route.params?.qrUserName);

    }
  }, [route.params?.qrUserName]);

  const getUser = async () => {
    try {
      let response = await api.searchUser(userName);
      setUser(response);
      // console.log(user)
    } catch (error) {
      ToastAndroid.showWithGravity(
        "Username Tidak Ditemukan",
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
      
      setLoading(false);
    }
    return null;
  };

  const data = {
    tujuan: user.id,
    nominal: nominal,
  };

  useEffect(() => {
    async function cekSaldo() {
      setLoading(true);
      try {
        let response = await api.getSaldo();
        setSaldo(response.saldo);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }
    cekSaldo();
  }, []);

  async function checkSaldo() {
    setLoading(true);
    try {
      let response = await api.getSaldo();
      setSaldo(response.saldo);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }
  const onTranksaksi = async () => {
    setLoading(true);

    console.log("Transfer")
    if (data == null) {
      console.log("data kosong");
    }
    try {
      let response = await api.transaksi(data);
      setTranksaksi(response);
      
      toggleModal();
      
    } catch (error) {
      setError(error.message);
      setLoading(false);
    } finally {
      checkSaldo();
    }
  };
  const onNominalChage = (nominal) => {

    if (nominal < 3000 && user.id == null) {
      setPesanSaldo("Transaksi Min Rp 3.000");
      setTransferEnable(false);
      ToastAndroid.showWithGravity(
        "Username Belum Terisi",
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
      setTransferEnable(false);
    } else if (nominal > saldo && user.id == null) {
      setPesanSaldo("Saldo tidak cukup");
      ToastAndroid.showWithGravity(
        "Username Belum Terisi",
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
      setTransferEnable(false);
    }else if(nominal < 3000 && user.id != null){
      setPesanSaldo("Transaksi Min Rp 3.000");
      setTransferEnable(false);
    }else if( nominal > saldo && user.id != null){
      setPesanSaldo("Saldo tidak cukup");
    }
    else if(nominal < saldo && user.id == null) {
      ToastAndroid.showWithGravity(
        "Username Belum Terisi",
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
      setTransferEnable(false);
    }else{
      setPesanSaldo("")
      setTransferEnable(true)
      setNominal(nominal)
    }
  };

  const [loaded] = useFonts({
    Montserrat: require("../../assets/fonts/Montserrat-Regular.ttf"),
    // Poppins2: require('../../assets/fonts/Poppins-Regular.ttf'),
  });
  if (!loaded) {
    return null;
  }

  function pesan(){
    let clear = '';
      setUser(null);
      onChangeUserName(clear)
    setModalVisible(!isModalVisible)
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#5A0000" }}>
      <HeaderMainApp
        title="Transaksi"
        onPress={() => navigation.navigate("MainApp")}
      />
      {/* <TouchableOpacity
        onPress={ ()=>navigation.navigate('ConfirmTransfer')}
      >
        <Text>pindah</Text>
      </TouchableOpacity> */}
      <DompetContainer
        onPress={checkSaldo}
        title="Transfer"
        balance={`Saldo Rp. ${saldo.toLocaleString('id-ID', {
          style: 'currency',
          currency: 'IDR',
          style: 'decimal',
        })}`}
      />
      
      <ScrollView style={{ flex: 1, backgroundColor: "#f0f0f0" }}>
        <View>
          <Gap height={20} />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TextInput
              placeholder="Username"
              // defaultValue={value}
              onChangeText={onChangeUserName}
              value={userName}
              style={styles.textInput}
            />

            <TouchableOpacity onPress={getUser} style={styles.iconUser}>
              <IconUserOn />
            </TouchableOpacity>
          </View>
          <Gap height={25} />
          <View style={styles.container}>
            <View style={styles.content}>
              <Gap height={20} />
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <IconHpRed />
                <Gap width={10} />
                <Text style={{ fontWeight: "bold" }}>Konfirmasi Transaksi</Text>
              </View>
              <Gap height={20} />
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <View style={{ width: 270 }}>
                  <View style={styles.subContent}>
                    <Text style={styles.titleCont}>Username : </Text>
                    <Text style={styles.titleContent}>{user.username}</Text>
                  </View>
                  <Gap height={5} />
                  {/* <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text>Id : </Text>
                    <Text>{user.id}</Text>
                  </View> */}
                  {/* <Gap height={5} /> */}
                  <View style={styles.subContent}>
                    <Text style={styles.titleCont}>Nama Lengkap : </Text>
                    <Text style={styles.titleContent}>{user.nama_lengkap}</Text>
                  </View>
                  <Gap height={5} />
                  <View style={styles.subContent}>
                    <Text style={styles.titleCont}>No Hp : </Text>
                    <Text style={styles.titleContent}>{user.no_hp}</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          {/* <View>
      <Text>{error}</Text>
    </View> */}

          <Gap height={20} />
          <View style={{ backgroundColor: "white", paddingVertical: 15 }}>
            <View style={{ marginLeft: 20, flexDirection: "row" }}>
              <Text
                style={{ fontWeight: "500", fontSize: 32, color: "#ff0000" }}
              >
                Rp.{" "}
              </Text>
              <TextInput
                placeholder='0'
                onChangeText={(nominal) => onNominalChage(nominal)}
                style={styles.textNominal}
                keyboardType="phone-pad"
              />
            </View>
            <Text style={{ marginLeft: 20, color: "#cc3300", marginTop: 8 }}>
              {pesanSaldo}
            </Text>
          </View>
          <Gap height={27} />
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Button
              // onPress={navigation.navigate("Transaksi", {qrUserName});
              onPress={ ()=>navigation.navigate('ConfirmTransfer', {user ,nominal})}
              // onPress = {onTranksaksi}
              title="Lanjutkan"
              disabled={!isTransferEnable}
            />
          </View>

          <Modal
            isVisible={isModalVisible}
            animationInTiming={900}
            animationOutTiming={1000}
          >
            <View style={styles.modal}>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                Konfirmasi Pembayaran
              </Text>
              <Gap height={20} />
              <IconCeklisBig />
              <Gap height={20} />
              <Text style={{ fontSize: 16, textAlign: "center" }}>
               Selamat , transaksi Saldo {"\n"}sebesar {nominal} {"\n"} ke{" "}
                {user.nama_lengkap}
                {"\n"} Lanjutkan
              </Text>
              <Gap height={10} />
              {/* <Text style={{ fontSize:14, fontWeight:'700', textAlign:'center' }}>Dana Anda akan di transfer sesuai {'\n'} dengan jam kerja bank, paling lambat {'\n'} 2 x 24 jam, diluar hari libur bank.</Text> */}
              <Gap height={15} />
              {/* <TouchableOpacity
                style={styles.buttonModal}
                onPress={ 
                  // ()=>navigation.navigate('MainApp')
               console.log('testes')
              }
              >
                <Text>Oke</Text>
              </TouchableOpacity> */}

              <Pressable
              style={styles.buttonModal}
               onPress={() => setModalVisible(!isModalVisible)}
              // onPress ={(toggleModal)}
            > 
             <Text>Oke</Text> 
               </Pressable>
              
            </View>
          </Modal>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          {/* <View>
      <Text>Hasil dari Transaksi</Text>
      <Text>{tranksaksi.status}</Text>
      <Text>{tranksaksi.sumber.username}</Text>
      <Text>{tranksaksi.sumber.saldo_awal}</Text>
      <Text>Tujuan Transaksi</Text>
      <Text>{tranksaksi.tujuan.username}</Text>
      <Text>{tranksaksi.tujuan.saldo_awal}</Text>
    </View> */}
        </View>

        <Gap height={40} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default TransaksiTest;

const styles = StyleSheet.create({
  // container: {
  //   justifyContent: "center",
  //   alignItems: "center",
  //   // flex: 1,
  // },
  title: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 18,
  },
  subTitle: {
    marginTop: 10,
    fontWeight: "400",
    fontSize: 15,
    textAlign: "center",
    color: "#8d92a3",
  },
  content: {
    height: 227,
    backgroundColor: "white",
  },
  textInput: {
    backgroundColor: "white",
    marginHorizontal: 10,
    paddingLeft: 10,
    paddingVertical: 10,
    borderRadius: 10,
    height: 40,
    width: "80%",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.35,
    shadowRadius: 3.84,
    elevation: 5,
    fontFamily: "Montserrat",
  },
  iconUser: {
    backgroundColor: "white",
    height: 40,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 5,
    paddingVertical: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.35,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textNominal: {
    // fontWeight:'bold',
    fontSize: 32,
  },
  modal: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    height: 350,
    borderRadius: 10,
  },
  buttonModal: {
    height: 36,
    width: 114,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#707070",
  },
  subContent: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titleCont: {
    color: "#8d92a3",
    fontSize: 15,
    marginTop: 10,
    fontFamily: "Montserrat",
  },
  titleContent: {
    fontSize: 15,
    marginTop: 10,
    fontFamily: "Montserrat",
  },
});

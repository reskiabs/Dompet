import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet, Text, View, SafeAreaView,ProgressBarAndroid, RefreshControl } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Kupon } from "../../assets";
import {
  Ellips,
  IconAirBersih,
  IconBPJS,
  IconDonasi,
  IconHistory,
  IconLainnya,
  IconListrik,
  IconPendidikan,
  IconPulsa,
  IconTopUp,
  IconTv,
  IconWithDraw,
  Notif,
  PayPlus,
} from "../../assets/icons";
import { AktivasiDompet, ListPpob, SelectPpob, Gap } from "../../components";
import * as api from "../../services/auth";
import UserAvatar from "react-native-user-avatar-component";
import { useFonts } from "expo-font";
import HomePromo from './HomePromo';
import ProgresData from "./ProgresData";

import { useAuth } from "../../providers/auth";
const Home = ({ navigation }) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [users, setProfile] = useState({});

  const [Refreshing , setRefreshing] = useState(false)
  const [saldo, setSaldo] = useState('');
  const [saldo_bonus , setSaldo_Bonus] = useState('')
  useEffect(() => {
    async function ambilUser() {
      setLoading(true);
      try {
        let response = await api.getProfile();
        setProfile(response);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }
    ambilUser();
  }, []);

  useEffect(() => {
    async function cekSaldo() {
      setLoading(true);
      try {
        let response = await api.getSaldo();
        setSaldo(response.saldo);
        setSaldo_Bonus(response.saldo_bonus)
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }
    cekSaldo();
  }, []);

  async function cekSaldoPress() {
    setLoading(true);
    try {
      let response = await api.getSaldo();
      setSaldo(response.saldo);
      setSaldo_Bonus(response.saldo_bonus)
    } catch (error) {
      setError(error.message);
      setLoading(false);
    } finally {
      console.log("Cek Saldo Ok")
    }
  }
  const [loaded] = useFonts({
    Quicksand: require("../../assets/fonts/Quicksand-Bold.ttf"),
    Montserrat: require("../../assets/fonts/Montserrat-Regular.ttf"),
  });
  if (!loaded) {
    return null;
  }

  const onRefresh = () => {
    setRefreshing(true);
    cekSaldoPress();
    setRefreshing(false)
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#5A0000" }}>
      <ScrollView
      refreshControl={
        <RefreshControl
        refreshing={Refreshing}
        onRefresh={onRefresh}/>
      }
      style={styles.container}>
        <View style={styles.redContainer}>
          <View style={styles.iconHead}>
            <PayPlus />
            <TouchableOpacity
              onPress={() => navigation.navigate("Notification")}
            >
              <Notif />
            </TouchableOpacity>
          </View>

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
           {/* <ProgresData
           value = {users.username}
           style = {styles.admin}
           /> */}
            <View style={styles.containerPay}>
              <Text style={styles.titlePay}>Saldo Dompet+</Text>
              <TouchableOpacity  onPress={cekSaldoPress}>
                <View style={{ flexDirection:'row' }}>
                <Text style={styles.Rupiah}>Rp </Text>
                <Text style={styles.RupiahJm}>{`${saldo.toLocaleString(
                  "id-ID",
                  {
                    style: "currency",
                    currency: "IDR",
                    style: "decimal",
                  }
                )}`}
                </Text>
                </View>
                <Text style={styles.titlePay}>Bonus</Text>
                <View style={{ flexDirection:'row' }}>
                <Text style={styles.Rupiah}>Rp </Text>
                <Text style={styles.RupiahJm}>{`${saldo_bonus.toLocaleString(
                  "id-ID",
                  {
                    style: "currency",
                    currency: "IDR",
                    style: "decimal",
                  }
                )}`}</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{ alignItems: "flex-end", marginTop: -20 }}>
              <TouchableOpacity
                style={{
                  borderWidth: 3,
                  borderColor: "white",
                  borderRadius: 50,
                }}
                onPress={() => navigation.navigate("Profile")}
              >
                <UserAvatar
                  size={50}
                  name={`${users.nama_lengkap}`}
                  color="#2d9cbd"
                />
              </TouchableOpacity>
              <Gap height={5} />
              <Text style={styles.admin}>{users.nama_lengkap}</Text>
              <Text style={styles.bli}>{users.id_bli}</Text>
              {/* <Text style={styles.bli}>{users.pin}</Text> */}
            </View>
          </View>
        </View>
        <View style={styles.ppobContainer}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "80%",
              marginTop: 15,
            }}
          >
            <SelectPpob
              icon={<IconTopUp />}
              title="Top-Up"
              marginTop={-10}
              onPress={() => navigation.navigate("TopUp")}
            />
            <SelectPpob
              icon={<IconWithDraw />}
              title="Withdraw"
              marginTitle={10}
              onPress={() => navigation.navigate("WithDraw")}
            />
            <SelectPpob
              icon={<IconHistory />}
              title="History"
              marginTitle={7}
              onPress={() => navigation.navigate("History")}
            />
          </View>
          <AktivasiDompet />
          <View style={{ marginTop: 27, alignItems: "center" }}>
            <View style={{ flexDirection: "row" }}>
              <ListPpob icon={<IconListrik />} title="Listrik" />
              <ListPpob icon={<IconAirBersih />} title="Air Bersih" />
              <ListPpob icon={<IconPulsa />} title="Pulsa" />
              <ListPpob icon={<IconDonasi />} title="Donasi" />
            </View>
            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <ListPpob icon={<IconBPJS />} title="BPJS" />
              <ListPpob
                icon={<IconPendidikan />}
                title="Pendidikan"
                marginTop={-20}
              />
              <ListPpob icon={<IconTv />} title="NetTV" />
              <ListPpob icon={<IconLainnya />} title="Lainnya" />
            </View>
          </View>
        </View>
        {/* <Kupon/> */}
        <HomePromo/>
        <Gap height={10}/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  redContainer: {
    backgroundColor: "#C20808",
    // width: 391,
    height: 220,
    paddingHorizontal: 20,
    paddingTop: 20,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  iconHead: {
    flexDirection: "row",
    justifyContent: "space-between",
    // alignItems:'center'
  },
  containerPay: {
    marginTop: 18,
  },
  titlePay: {
    fontSize: 13,
    fontWeight: "700",
    color: "yellow",
    fontFamily: "Quicksand",
  },
  Rupiah: {
    fontSize: 12,
    fontWeight: "700",
    color: "white",
    paddingVertical: 3,
    fontFamily: "Quicksand",
  },
  RupiahJm: {
    fontSize: 16,
    fontWeight: "700",
    color: "white",
    paddingVertical: 3,
    fontFamily: "Quicksand",
  },
  admin: {
    paddingTop: 5,
    fontSize: 15,
    fontWeight: "700",
    color: "white",
    fontFamily: "Quicksand",
  },
  bli: {
    fontSize: 12,
    // fontWeight:'700',
    color: "white",
    paddingTop: 5,
  },
  ppobContainer: {
    // justifyContent:'center',
    alignItems: "center",
    height: 307,
    backgroundColor: "white",
    marginBottom: 27,
    marginHorizontal: 10,
    borderRadius: 8,
    marginTop: -20,
    shadowColor: "#000",
    alignItems: "center",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.35,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

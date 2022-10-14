import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Alert, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

export default function Barcode({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  console.log("Halo sy masuk form QR");

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    const qr = data.split(":");

    const jenis = qr[0];
    const qrUserName = qr[1];
    const merchantName = qr[2];
    


    if (jenis === "TRF") {
      
      // Alert.alert("Dompet+", `Data ${userName} telah dipindai!`);
      console.log("User Name Scanned= "+qrUserName)
      navigation.navigate("Transaksi", {qrUserName});
      setTimeout(() => {
        setScanned(false);
      }, 1000);
      
      // setTimeout(() => {
      //   navigation.navigate("Transaksi", { userName });
      // }, 1000);
    } else if (jenis === "PAY") {
      
      
      // Alert.alert(
      //   "Dompet+",
      //   `Pembayaran ke ${merchantName} dengan username ${qrUserName} telah dipindai!`
      // );
      navigation.navigate("TrMerchant", { qrUserName, merchantName });
      setTimeout(() => {
        setScanned(false);
      }, 1000);
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      <Text
        style={{
          color: "white",
          marginTop: 30,
          fontSize: 18,
          fontWeight: "500",
        }}
      >
        Scan Untuk Membayar
      </Text>
      <View style={styles.button}>
        {scanned && (
          <Button
            color="black"
            title={"Invalid QR-Dopet, Scan Lagi..."}
            onPress={() => setScanned(false)}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    alignItems: "center",
    flex: 1,
    backgroundColor: "#36896e",
  },
  title: {
    // fontFamily: 'Poppins-Medium',
    fontSize: 32,
  },
  button: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 8,
    backgroundColor: "white",
    marginTop: 200,
  },
});

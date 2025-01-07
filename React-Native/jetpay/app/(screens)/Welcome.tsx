import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "@/components/Button";

export default function Welcome() {
  const handlePress = () => {
    console.log("Button Pressed!");
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.view1}>
          {" "}
          <Image
            source={require("../../assets/icons/logo1.svg")}
            resizeMode="contain"
          />
        </View>
        <View>
          {" "}
          <Image
            source={require("../../assets/icons/logimg.svg")}
            resizeMode="cover"
            style={styles.img}
          />
        </View>
      </View>
      <View style={styles.view3}>
        <Text style={styles.welcome}>Welcome to JetPay!</Text>
        <Text style={styles.transfer}>Transfer Money in a Flash</Text>
        <Button
          title="Get started"
          onPress={handlePress}
          buttonStyle={styles.customButtonStyle}
          textStyle={styles.customTextStyle}
        />
        <Text style={styles.account}>
          Already have an account? <Text style={styles.login}>Login</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#292A65",
  },
  view1: {
    paddingTop: 40,
    paddingBottom: 20,
  },
  img: {
    width: 360,
  },
  view3: { justifyContent: "center", alignItems: "center", marginTop: 50 },
  welcome: {
    fontSize: 30,
    marginBottom: 8,
    color: "#292A65",
    fontWeight: 600,
  },
  transfer: {
    color: "#292A65",
    fontWeight: 700,
    fontSize: 12,
    letterSpacing: 2,
    marginBottom: 50,
  },
  customButtonStyle: {
    backgroundColor: "#292A65",
    width: "90%",
    padding: 18,
    borderRadius: 15,
    marginBottom: 20,
  },
  customTextStyle: {
    fontSize: 15,
    fontWeight: 700,
    textAlign: "center",
  },
  account: { fontSize: 15, fontWeight: 700 },
  login: {
    fontSize: 15,
    fontWeight: 600,
    textDecorationLine: "underline",
    color: "#4E49C7",
  },
});

import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Button from "@/components/Button";

export default function Signup3() {
  const handlePress = () => {
    console.log("Button Pressed!");
  };
  return (
    <View style={styles.container}>
      <View style={styles.arrowContainer}>
        <Image
          source={require("../../assets/icons/arrowleft.svg")}
          resizeMode="cover"
          style={styles.arrowLeft}
        />
      </View>
      <View style={styles.logoContainer}>
        <Image source={require("../../assets/icons/logo2.svg")} />
      </View>{" "}
      <View style={styles.verifyContainer}>
        <Text style={styles.verify}>Verify your Email Address</Text>
        <Text style={styles.otp}>
          Kindly enter the 4-Digit OTP sent to your Email Address
        </Text>
      </View>
      <View style={styles.boxContainer}>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
      </View>
      <View style={styles.codeContainer}>
        <Text style={styles.code}>Code Expires in 5 mins</Text>
      </View>
      <Button
        title={"Finish"}
        onPress={handlePress}
        variant="disabled"
        buttonStyle={styles.customButtonStyle}
        textStyle={styles.customTextStyle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  arrowContainer: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#F6F6F7",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },
  arrowLeft: {
    width: 25,
    height: 25,
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 60,
  },
  verifyContainer: {
    marginBottom: 24,
  },
  verify: {
    fontSize: 24,
    fontWeight: 600,
    marginBottom: 6,
  },
  otp: {
    fontSize: 16,
    fontWeight: 400,
  },
  boxContainer: {
    marginBottom: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  box: {
    width: 70,
    height: 70,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#CCCCCC",
  },
  codeContainer: {
    backgroundColor: "#F6F6F7",
    width: "60%",
    padding: 15,
    borderRadius: 10,
    fontWeight: 700,
  },
  code: { fontWeight: 500, fontSize: 16, textAlign: "center" },
  customButtonStyle: {
    backgroundColor: "#292A654D",
    width: "100%",
    height: 70,
    padding: 18,
    borderRadius: 12,
    marginTop: 250,
  },
  customTextStyle: {
    fontSize: 18,
    fontWeight: 700,
    textAlign: "center",
  },
});

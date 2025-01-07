import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Input from "@/components/Input";
import Button from "@/components/Button";

export default function Signup1() {
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
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.firstname}>First name:</Text>
        <Input
          placeholder="Enter first name"
          keyboardType="phone-pad"
          style={styles.input}
        />
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.firstname}>Last name:</Text>
        <Input
          placeholder="Enter last name"
          keyboardType="phone-pad"
          style={styles.input}
        />
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.firstname}>Phone number:</Text>
        <View style={styles.flagContainer}>
          <View style={styles.flag}>
            {" "}
            <Image
              source={require("../../assets/images/flag.svg")}
              resizeMode="cover"
            />
            <Text style={styles.code}>+234</Text>
            <Image
              source={require("../../assets/icons/arrowdown.svg")}
              resizeMode="cover"
            />
          </View>
          <View>
            <Input
              placeholder="0000 000 000"
              keyboardType="phone-pad"
              style={styles.input1}
            />
          </View>
        </View>
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.firstname}>Email Address:</Text>
        <Input
          placeholder="Enter Email Address"
          keyboardType="phone-pad"
          style={styles.input}
        />
      </View>
      <Button
        title={"Continue"}
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
    marginBottom: 20,
  },
  arrowLeft: {
    width: 25,
    height: 25,
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
  },
  nameContainer: {
    marginBottom: 10,
  },

  firstname: {
    fontWeight: 400,
    fontSize: 18,
  },
  input: {
    color: "#CCCCCC",
    height: 55,
    borderColor: "#CCCCCC",
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 10,
    fontSize: 18,
  },
  flagContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  flag: {
    width: "35%",
    height: 55,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderWidth: 1,
    borderColor: "#CCCCCC",
    gap: 5,
  },
  code: {
    color: "CCCCCC",
    fontSize: 18,
  },
  input1: {
    width: "100%",
    height: 55,
    borderColor: "#CCCCCC",
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 10,
    fontSize: 18,
    color: "#CCCCCC",
  },
  customButtonStyle: {
    backgroundColor: "#292A654D",
    width: "100%",
    height: 70,
    padding: 18,
    borderRadius: 12,
    marginTop: 100,
  },
  customTextStyle: {
    fontSize: 18,
    fontWeight: 700,
    textAlign: "center",
  },
});

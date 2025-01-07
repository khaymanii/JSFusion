import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Input from "@/components/Input";
import Button from "@/components/Button";

export default function Signup2() {
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
        <Text style={styles.firstname}>Enter password:</Text>
        <Input
          placeholder="Enter Password"
          keyboardType="phone-pad"
          style={styles.input}
        />
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.firstname}>Confirm password:</Text>
        <Input
          placeholder="Confirm Password"
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
    marginBottom: 30,
  },
  arrowLeft: {
    width: 25,
    height: 25,
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 160,
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

  customButtonStyle: {
    backgroundColor: "#292A654D",
    width: "100%",
    height: 70,
    padding: 18,
    borderRadius: 12,
    marginTop: 190,
  },
  customTextStyle: {
    fontSize: 18,
    fontWeight: 700,
    textAlign: "center",
  },
});

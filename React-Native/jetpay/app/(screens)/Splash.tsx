import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Splash() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/icons/logo1.svg")}
        resizeMode="contain"
      />
      <Text style={styles.text}>Transfer Money in a Flash</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#292A65",
  },
  text: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "600",
    marginTop: 5,
    letterSpacing: 2,
  },
});

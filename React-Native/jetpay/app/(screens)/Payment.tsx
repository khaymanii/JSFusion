import { StyleSheet, Text, View, Image } from "react-native";
import Button from "@/components/Button";

import React from "react";

export default function Payment() {
  const handlePress = () => {
    console.log("Button Pressed!");
  };
  return (
    <View style={styles.container}>
      {" "}
      <View style={styles.arrowContainer1}>
        {" "}
        <View style={styles.arrowContainer}>
          <Image
            source={require("../../assets/icons/arrowleft.svg")}
            resizeMode="cover"
            style={styles.arrowLeft}
          />
        </View>{" "}
        <View style={styles.paymentContainer}>
          {" "}
          <Text style={styles.paymentText}>Payment method</Text>
        </View>
      </View>{" "}
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/images/mywallet.svg")}
          resizeMode="cover"
          style={styles.image}
        />
        <Image
          source={require("../../assets/images/master.svg")}
          resizeMode="cover"
          style={styles.image}
        />{" "}
        <Image
          source={require("../../assets/images/visa.svg")}
          resizeMode="cover"
          style={styles.image}
        />{" "}
      </View>
      <View style={styles.addCard}>
        {" "}
        <Image
          source={require("../../assets/images/addcard.svg")}
          resizeMode="cover"
        />{" "}
      </View>
      <Button
        title={"Proceed"}
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
  arrowContainer1: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    gap: 50,
  },
  arrowContainer: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#F6F6F7",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  arrowLeft: {
    width: 25,
    height: 25,
  },
  paymentContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  paymentText: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: 700,
    marginBottom: 10,
    color: "#292A65",
  },
  imageContainer: { marginTop: 30 },
  image: {
    width: "100%",
    marginBottom: 20,
  },
  addCard: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 20,
  },
  customButtonStyle: {
    backgroundColor: "#292A65",
    width: "100%",
    height: 70,
    padding: 18,
    borderRadius: 12,
    marginTop: 200,
  },
  customTextStyle: {
    fontSize: 18,
    fontWeight: 600,
    textAlign: "center",
  },
});

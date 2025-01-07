import { StyleSheet, View } from "react-native";
import React from "react";
import Payment from "./(screens)/Payment";

export default function Index() {
  return (
    <View style={styles.container}>
      <Payment />{" "}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

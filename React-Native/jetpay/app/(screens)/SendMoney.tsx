import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function SendMoney() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.name}>Hello, Anwuri</Text>
        <View>
          <Image
            source={require("../../assets/icons/bell.svg")}
            resizeMode="contain"
            style={styles.notificationContainer}
          />
        </View>
      </View>{" "}
      <View style={styles.acctBalanceContainer}>
        <View>
          <View style={styles.totalBalanceContainer}>
            <Text style={styles.totalBalance}>Total balance</Text>
            <Image
              source={require("../../assets/icons/eye.svg")}
              resizeMode="contain"
              style={styles.eye}
            />
          </View>
          <Text style={styles.amount}>$10,500.00</Text>
        </View>
        <View style={styles.acctNumberContainer}>
          <Text style={styles.acctNumber}>2109783267</Text>
          <Image
            source={require("../../assets/icons/copy.svg")}
            resizeMode="contain"
            style={styles.copy}
          />
        </View>
      </View>
      <View style={styles.heroContainer}>
        <View style={styles.usdContainer}>
          <View>
            <Text style={styles.inDollars}>In Dollars</Text>
            <Text style={styles.dollars}>$31.00</Text>
          </View>
          <View style={styles.usdContainer1}>
            {" "}
            <Text style={styles.usd}>USD</Text>
            <Image
              source={require("../../assets/icons/arrowdownwhite.svg")}
              resizeMode="cover"
            />
          </View>
        </View>
        <Text style={styles.usdText}>1 USD - NGN 1591, Fees = $0</Text>
        <View style={styles.usdContainer}>
          <View>
            <Text style={styles.inDollars}>In Naira</Text>
            <Text style={styles.dollars}>$50,000</Text>
          </View>
          <View style={styles.usdContainer1}>
            {" "}
            <Text style={styles.usd}>NGN</Text>
            <Image
              source={require("../../assets/icons/arrowdownwhite.svg")}
              resizeMode="cover"
            />
          </View>
        </View>
        <View style={styles.transaction}>
          <View>
            <View style={styles.add}>
              {" "}
              <Image
                source={require("../../assets/icons/add.svg")}
                resizeMode="cover"
              />
            </View>
            <Text style={styles.sendText}>Send</Text>
          </View>
          <View>
            <View style={styles.add}>
              {" "}
              <Image
                source={require("../../assets/icons/add.svg")}
                resizeMode="cover"
              />
            </View>
            <Text style={styles.sendText}>Add</Text>
          </View>{" "}
          <View>
            <View style={styles.add}>
              {" "}
              <Image
                source={require("../../assets/icons/wallet.svg")}
                resizeMode="cover"
              />
            </View>
            <Text style={styles.sendText}>Wallet</Text>
          </View>
        </View>
      </View>
      <View style={styles.recentContainer}>
        <Text style={styles.recent}>Recent</Text>
        <View style={styles.seeMoreContainer}>
          <Text style={styles.seeMore}>See more</Text>
          <Image
            source={require("../../assets/icons/arrowrightblue.svg")}
            resizeMode="cover"
            style={styles.arrowRight}
          />
        </View>
      </View>
      <View style={styles.heroContainer1}>
        <View>
          <Text style={styles.heroTime}>12:45pm</Text>
          <Text style={styles.heroName}>Umasoye Douglas</Text>
          <View style={styles.heroSentContainer}>
            <Text style={styles.heroSent}>Sent</Text>
          </View>
        </View>
        <View>
          <Text style={styles.hundred}>100 USD</Text>
          <Text style={styles.fees}>Fees 0.00</Text>
        </View>
      </View>
      <View style={styles.footerContainer}>
        <Image
          source={require("../../assets/icons/profile.svg")}
          resizeMode="cover"
          style={styles.footerIcons}
        />
        <Image
          source={require("../../assets/icons/book.svg")}
          resizeMode="cover"
          style={styles.footerIcons}
        />{" "}
        <Image
          source={require("../../assets/icons/profile.svg")}
          resizeMode="cover"
          style={styles.footerIcons}
        />{" "}
        <Image
          source={require("../../assets/icons/settings.svg")}
          resizeMode="cover"
          style={styles.footerIcons}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  name: {
    fontSize: 22,
    fontWeight: 500,
  },
  notificationContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  acctBalanceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  totalBalanceContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  totalBalance: {
    fontSize: 18,
    color: "gray",
    marginRight: 10,
  },
  eye: {
    width: 25,
    height: 25,
    marginTop: 3,
  },
  amount: {
    fontSize: 26,
    fontWeight: "bold",
  },
  acctNumberContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
  },
  acctNumber: { fontWeight: "bold" },
  copy: { width: 25, height: 25, marginTop: 3 },
  heroContainer: {
    width: "100%",
    height: "auto",
    marginVertical: 15,
    borderRadius: 18,
    backgroundColor: "#F6F6F7",
    padding: 20,
  },
  usdContainer: {
    width: "100%",
    height: "auto",
    borderRadius: 18,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  inDollars: { color: "#566BFB" },
  dollars: { fontSize: 26, color: "#566BFB", fontWeight: 600 },
  usdContainer1: {
    backgroundColor: "#292A65",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    width: "auto",
    height: "auto",
    paddingHorizontal: 18,
    paddingVertical: 12,
    gap: 4,
  },
  usd: {
    fontSize: 18,
    color: "#FFFFFF",
    fontWeight: "semibold",
    textAlign: "center",
  },
  usdText: { textAlign: "center", color: "#292A65", marginVertical: 10 },
  transaction: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 10,
  },
  add: {
    width: "auto",
    height: "auto",
    padding: 15,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
  },
  sendText: { textAlign: "center", color: "#292A65", marginTop: 3 },
  recentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  recent: { fontSize: 22, fontWeight: 700 },
  seeMoreContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  seeMore: {
    color: "#4E49C7",
    fontSize: 14,
    marginTop: 2,
  },
  arrowRight: {
    marginTop: 4,
  },
  heroContainer1: {
    width: "100%",
    height: "auto",
    marginVertical: 15,
    borderRadius: 18,
    backgroundColor: "#F6F6F7",
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  heroTime: { color: "gray", fontSize: 12 },
  heroName: { fontSize: 18, fontWeight: 600 },
  heroSentContainer: {
    width: "40%",
    height: "auto",
    padding: 4,
    backgroundColor: "#EFFAF2",
    borderRadius: 4,
    marginTop: 4,
  },
  heroSent: { color: "#3CC35C", fontSize: 12, textAlign: "center" },
  hundred: { fontSize: 14, fontWeight: 700 },
  fees: { color: "gray", fontSize: 14 },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingTop: 40,
    height: 50,
  },
  footerIcons: {
    width: 28,
    height: 28,
  },
});

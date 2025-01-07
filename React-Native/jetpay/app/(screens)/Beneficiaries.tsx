import { StyleSheet, Text, View, Image } from "react-native";
import Input from "@/components/Input";

export default function Beneficiaries() {
  return (
    <View style={styles.container}>
      <View style={styles.arrowContainer1}>
        {" "}
        <View style={styles.arrowContainer}>
          <Image
            source={require("../../assets/icons/arrowleft.svg")}
            resizeMode="cover"
            style={styles.arrowLeft}
          />
        </View>{" "}
        <View style={styles.beneficiariesContainer}>
          {" "}
          <Text style={styles.beneficiariesText}>Beneficiaries</Text>
        </View>
      </View>
      <View style={styles.searchContainer}>
        <Image
          source={require("../../assets/icons/search.svg")}
          resizeMode="cover"
        />{" "}
        <Input
          placeholder="Search"
          keyboardType="phone-pad"
          style={styles.input}
        />
      </View>{" "}
      <View>
        <Image
          source={require("../../assets/images/alabi.svg")}
          resizeMode="cover"
          style={styles.image}
        />
        <Image
          source={require("../../assets/images/oliver.svg")}
          resizeMode="cover"
          style={styles.image}
        />{" "}
        <Image
          source={require("../../assets/images/ebube.svg")}
          resizeMode="cover"
          style={styles.image}
        />{" "}
        <Image
          source={require("../../assets/images/douglas.svg")}
          resizeMode="cover"
          style={styles.image}
        />{" "}
        <Image
          source={require("../../assets/images/ali.svg")}
          resizeMode="cover"
          style={styles.image}
        />
        <Image
          source={require("../../assets/images/egogo.svg")}
          resizeMode="cover"
          style={styles.image}
        />
      </View>
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
    gap: 70,
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
  beneficiariesContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  beneficiariesText: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: 700,
    marginBottom: 10,
    color: "#292A65",
  },
  searchContainer: {
    marginBottom: 30,
    width: "100%",
    borderColor: "#CCCCCC",
    borderWidth: 1,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 4,
    gap: 10,
  },

  input: {
    borderWidth: 0,
    fontSize: 18,
    width: "100%",
    color: "#CCCCCC",
  },
  image: {
    width: "100%",
    marginBottom: 20,
  },
});

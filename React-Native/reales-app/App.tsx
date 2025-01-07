import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, View } from "react-native";
import Header from "./component/Header";
import Hero from "./component/Hero";
import tw from "twrnc";
import Home from "./component/Home";
import Footer from "./component/Footer";

export default function App() {
  return (
    <View style={tw`flex-1`}>
      <Header />
      <ScrollView>
        <Hero />
        <Home />
        <Footer />
        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}

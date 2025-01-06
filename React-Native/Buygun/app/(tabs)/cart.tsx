import { View, Text, ScrollView, Pressable } from "react-native";
import tw from "twrnc";
import Table from "@/components/Table";
import { useRouter } from "expo-router";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";

export default function cart() {
  const router = useRouter();
  const { subtotal } = useCart();

  return (
    <ScrollView style={tw`bg-white`}>
      <View style={tw`bg-black w-full h-64 items-center justify-center mb-14`}>
        <Text style={tw`text-white font-semibold text-3xl`}>Cart</Text>
      </View>
      <View style={tw`rounded-lg border border-b h-auto py-4 px-2 mx-4 mb-4`}>
        <Table />
      </View>
      <View
        style={tw`h-72 bg-black text-white rounded-lg p-4 pt-5 tracking-wider mx-4`}
      >
        <View style={tw`flex-row justify-between items-center mb-6`}>
          {" "}
          <Text style={tw`text-2xl font-semibold tracking-wider text-white`}>
            Subtotal:
          </Text>
          <Text style={tw`text-2xl font-semibold tracking-wider text-white`}>
            ${subtotal.toFixed(2)}{" "}
          </Text>
        </View>
        <Text style={tw`text-white tracking-wider text-lg mb-6`}>
          Taxes and shipping will calculate in checkout
        </Text>
        <Pressable
          onPress={() => router.push("/checkout")}
          style={tw`w-full p-2 bg-white text-black text-xl rounded-md text-center mb-4`}
        >
          Checkout
        </Pressable>
        <Pressable
          onPress={() => router.push("/shop")}
          style={tw`w-full p-2 bg-white text-black text-xl rounded-md  text-center`}
        >
          Continue Shopping{" "}
        </Pressable>{" "}
      </View>
      <Footer />
    </ScrollView>
  );
}

import { View, Text, Image } from "react-native";
import React from "react";
import tw from "twrnc";

export default function OrderComplete() {
  return (
    <View>
      <View style={tw`flex-row items-center justify-center pt-20`}>
        {" "}
        <Image
          source="../assets/images/good.png"
          style={tw`w-[200px] h-[200px]`}
        />{" "}
      </View>
      <View style={tw`items-center justify-center text-center mt-8`}>
        <Text style={tw`text-2xl font-semibold pb-4`}>Congratulations!!!</Text>
        <Text style={tw`text-lg text-center`}>
          Your order have been taken and is being attended to.
        </Text>
      </View>
      <View style={tw`items-center justify-center mt-16`}>
        <View
          style={tw`w-[40%] h-auto flex items-center justify-center py-4 bg-[#FFA451] text-white text-lg rounded-lg`}
        >
          Track order{" "}
        </View>
        <View
          style={tw`w-[60%] h-auto flex items-center justify-center py-4 border border-[#FFA451] text-[#FFA451] bg-white text-lg rounded-lg mt-12`}
        >
          Continue shopping{" "}
        </View>
      </View>
    </View>
  );
}

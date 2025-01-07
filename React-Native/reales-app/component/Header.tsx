import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";

export default function Header() {
  return (
    <View style={tw`flex-row justify-between items-center shadow-md px-4 py-5`}>
      <Text style={tw`font-semibold text-3xl`}>
        Real<Text style={tw`text-green-500`}>ES</Text>
      </Text>
      <TouchableOpacity style={tw`bg-green-500 p-2 px-6`}>
        <Text style={tw`font-semibold text-white text-lg`}>Connect</Text>
      </TouchableOpacity>
    </View>
  );
}

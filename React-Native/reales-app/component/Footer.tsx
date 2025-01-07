import { View, Text } from "react-native";
import React from "react";
import tw from "twrnc";

export default function Footer() {
  return (
    <View style={tw`bg-black p-4 py-20 items-center`}>
      <Text style={tw`text-white text-md`}>
        © 2025 RealES. All rights reserved.
      </Text>
      <Text style={tw`text-white text-md mt-2`}>
        Designed and developed by RealES Team.
      </Text>
    </View>
  );
}

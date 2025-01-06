import { View, Image } from "react-native";
import React from "react";
import tw from "twrnc";

export default function Splash() {
  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <Image
        source={require("../assets/images/logo.png")}
        style={tw`w-[200px] h-[200px]`}
        resizeMode="cover"
      />
    </View>
  );
}

import { View, Image, Text, TextInput } from "react-native";
import React from "react";
import tw from "twrnc";

export default function Authentication() {
  return (
    <View>
      <View
        style={tw`flex justify-center items-center pt-20 pb-8 bg-[#FFA451]`}
      >
        {" "}
        <Image
          source={require("../assets/images/welcome.png")}
          style={tw`w-[300px] h-[300px] mb-2`}
          resizeMode="cover"
        />
        <Image
          source={require("../assets/images/shadow.png")}
          resizeMode="cover"
        />
      </View>{" "}
      <View style={tw`mx-5 mt-16`}>
        <Text style={tw`font-semibold text-xl mb-4`}>
          What is your firstname?{" "}
        </Text>
        <TextInput
          placeholder="Tony"
          style={tw`bg-[#F3F1F1] text-lg py-4 mb-10 px-4 rounded-lg text-[#C2BDBD]`}
        />
        <View
          style={tw`w-[100%] h-auto flex items-center justify-center py-4 bg-[#FFA451] text-white text-lg rounded-lg`}
        >
          Start Ordering{" "}
        </View>
      </View>
    </View>
  );
}

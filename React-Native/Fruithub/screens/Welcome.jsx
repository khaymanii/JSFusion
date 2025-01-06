import { View, Image, Text } from "react-native";
import React from "react";
import tw from "twrnc";

export default function Welcome() {
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
        <Text style={tw`font-semibold text-xl mb-2`}>
          Get The Freshest Fruit Salad Combo
        </Text>
        <Text style={tw`text-lg mb-16`}>
          We deliver the best and freshest fruit salad in town. Order for a
          combo today!!!{" "}
        </Text>
        <View
          style={tw`w-[100%] h-auto flex items-center justify-center py-4 bg-[#FFA451] text-white text-lg rounded-lg`}
        >
          Let{"'"}s Continue
        </View>
      </View>
    </View>
  );
}

import {
  View,
  Text,
  TextInput,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import tw from "twrnc";

export default function Hero() {
  return (
    <ImageBackground
      source={require("../assets/images/b2.jpg")}
      style={tw`w-full h-[300px]`}
      resizeMode="cover"
    >
      <View style={tw`items-center py-20`}>
        <Text style={tw`font-semibold text-xl text-white`}>
          Search it. Explore it. Buy it.
        </Text>
        <View style={tw`w-full px-4 mt-4 mb-4`}>
          {" "}
          <TextInput
            placeholder="Search for your dream home"
            style={tw`bg-white p-3 outline-none`}
          />
        </View>
        <View style={tw`flex-row gap-3`}>
          {" "}
          <TouchableOpacity style={tw`bg-green-500 py-1 px-6`}>
            <Text style={tw` text-white text-md`}>Buy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={tw`bg-green-500 py-1 px-6`}>
            <Text style={tw` text-white text-md`}>Rent</Text>
          </TouchableOpacity>{" "}
          <TouchableOpacity style={tw`bg-green-500 py-1 px-6`}>
            <Text style={tw` text-white text-md`}>Sell</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

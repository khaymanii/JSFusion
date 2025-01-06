import { View, Text, Pressable } from "react-native";
import React from "react";
import tw from "twrnc";
import { useRouter } from "expo-router";

export default function Hero() {
  const router = useRouter();
  return (
    <View style={tw`bg-black mb-12`}>
      <View style={tw`w-full h-64 items-center justify-center my-20`}>
        <Text style={tw`text-white font-semibold text-3xl mb-4 text-center`}>
          More Than a tool. It's a Statement.
        </Text>
        <Text style={tw`text-white w-[90%] text-lg text-center mb-8`}>
          {" "}
          Whether you’re a first-time buyer, a seasoned collector, or a
          professional marksman, your choice of firearm is as unique as you are.
          Every piece tells a story and becomes an extension of your skill,
          precision, and purpose.
        </Text>
        <Pressable
          onPress={() => router.push("/shop")}
          style={tw`bg-green-500 flex items-center justify-center p-2 rounded-lg w-[50%] `}
        >
          <Text style={tw`text-white`}>Shop Now</Text>
        </Pressable>
      </View>
    </View>
  );
}

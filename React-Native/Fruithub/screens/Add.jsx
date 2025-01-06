import { View, Text, Image } from "react-native";
import React from "react";
import tw from "twrnc";

export default function Add() {
  return (
    <View style={tw`py-10 bg-[#FFA451] flex-1`}>
      <View
        style={tw`rounded-full w-20 px-2 py-2 bg-white text-center mb-4 mx-4 `}
      >
        Go back
      </View>{" "}
      <View style={tw`items-center mb-6 px-4 `}>
        {" "}
        <Image
          source="../assets/images/plate.png"
          style={tw`w-[200px] h-[200px]`}
        />{" "}
      </View>
      <View style={tw`rounded-t-2xl bg-white h-[100%] px-4`}>
        <Text style={tw`pt-8 text-3xl font-semibold`}>Quinoa Fruit Salad</Text>
        <View style={tw`flex-row justify-between items-center mt-8 mb-8`}>
          <View style={tw`flex-row justify-between items-center gap-6`}>
            <Image
              source="../assets/icons/minus.png"
              style={tw`w-[40px] h-[40px]`}
            />
            <Text style={tw`text-2xl`}>1</Text>
            <Image
              source="../assets/icons/plus.png"
              style={tw`w-[40px] h-[40px]`}
            />
          </View>
          <Text style={tw`font-semibold text-2xl`}>#2,000</Text>
        </View>
        <View>
          <Text
            style={tw`font-semibold text-2xl mb-6 border-b-2 pb-1 w-[60%] border-[#FFA451]`}
          >
            One Pack Contains:
          </Text>
          <Text style={tw`text-lg font-semibold mb-4`}>
            Red Quinoa, Lime, Honey, Blueberries, Strawberries, Mango, Fresh
            mint.
          </Text>
          <Text style={tw`text-md font-semibold mb-10`}>
            If you are looking for a new fruit salad to eat today, quinoa is the
            perfect brunch for you.
          </Text>
        </View>
        <View style={tw`flex-row items-center justify-between`}>
          <Image
            source="../assets/icons/love.png"
            style={tw`w-[50px] h-[50px]`}
          />
          <View
            style={tw`w-[70%] h-auto flex items-center justify-center py-4 bg-[#FFA451] text-white text-lg rounded-lg`}
          >
            Add to basket{" "}
          </View>
        </View>
      </View>
    </View>
  );
}

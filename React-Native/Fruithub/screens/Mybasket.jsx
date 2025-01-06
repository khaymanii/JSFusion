import { View, Text, Image } from "react-native";
import React from "react";
import tw from "twrnc";

export default function Mybasket() {
  return (
    <View style={tw`py-8 bg-[#FFA451] flex-1`}>
      <View style={tw`rounded-full w-20 px-2 py-2 bg-white text-center mx-4 `}>
        Go back
      </View>{" "}
      <Text style={tw`text-white text-lg text-center font-semibold pb-8`}>
        My Basket
      </Text>
      <View style={tw`bg-white h-full mb-4 pt-8`}>
        <View style={tw`flex-row items-center justify-between mx-4 mb-8`}>
          <View style={tw`flex-row gap-4 items-center`}>
            <View style={tw`rounded-xl p-4 bg-orange-100`}>
              <Image
                source="../assets/images/plate.png"
                style={tw`w-[40px] h-[40px]`}
              />{" "}
            </View>
            <View>
              <Text style={tw`font-semibold text-md`}>Quinoa fruit salad</Text>
              <Text style={tw`font-semibold`}>2packs</Text>
            </View>
          </View>
          <Text style={tw`font-semibold text-lg`}>#20,000</Text>
        </View>
        <View style={tw`flex-row items-center justify-between mx-4 mb-8`}>
          <View style={tw`flex-row gap-4 items-center`}>
            <View style={tw`rounded-xl p-4 bg-blue-100`}>
              <Image
                source="../assets/images/melon.png"
                style={tw`w-[40px] h-[40px]`}
              />{" "}
            </View>
            <View>
              <Text style={tw`font-semibold text-md`}>Melon fruit salad</Text>
              <Text style={tw`font-semibold`}>2packs</Text>
            </View>
          </View>
          <Text style={tw`font-semibold text-lg`}>#10,000</Text>
        </View>{" "}
        <View style={tw`flex-row items-center justify-between mx-4 mb-8`}>
          <View style={tw`flex-row gap-4 items-center`}>
            <View style={tw`rounded-xl p-4 bg-pink-100`}>
              <Image
                source="../assets/images/tropical.png"
                style={tw`w-[40px] h-[40px]`}
              />{" "}
            </View>
            <View>
              <Text style={tw`font-semibold text-md`}>
                Tropical fruit salad
              </Text>
              <Text style={tw`font-semibold`}>2packs</Text>
            </View>
          </View>
          <Text style={tw`font-semibold text-lg`}>#40,000</Text>
        </View>
        <View style={tw`flex-row items-center justify-between mx-4 mt-52`}>
          <View style={tw``}>
            <Text style={tw`font-semibold text-lg`}>Total</Text>
            <Text style={tw`font-semibold text-2xl`}>#70,000</Text>
          </View>
          <View
            style={tw`w-[65%] h-auto flex items-center justify-center py-4 bg-[#FFA451] text-white text-lg rounded-lg`}
          >
            Checkout{" "}
          </View>
        </View>
      </View>
    </View>
  );
}

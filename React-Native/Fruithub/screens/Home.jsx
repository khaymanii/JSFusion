import { Text, TextInput, View, Image } from "react-native";
import React from "react";
import tw from "twrnc";

export default function Home() {
  return (
    <View style={tw`mx-4`}>
      <View style={tw`mt-10 mb-4 flex-row justify-between items-center`}>
        {" "}
        <Image source="../assets/icons/bar.png" style={tw`w-[20px] h-[20px]`} />
        <View style={tw`items-center justify-center`}>
          {" "}
          <Image
            source="../assets/icons/basket.png"
            style={tw`w-[30px] h-[30px]`}
          />
          <Text style={tw`text-sm text-center`}>My basket</Text>
        </View>
      </View>
      <Text style={tw`text-lg font-semibold w-[70%] mb-4`}>
        Hello Tony, What fruit salad combo do you want today?
      </Text>
      <View style={tw`flex-row items-center justify-between mb-6`}>
        {" "}
        <TextInput
          placeholder="Search for fruit salad combo"
          style={tw`bg-[#F3F1F1] text-sm py-6  px-4 rounded-xl text-[#C2BDBD] w-[90%]`}
        />
        <Image
          source="../assets/icons/filter.png"
          style={tw`w-[20px] h-[20px] -mt-4`}
        />
      </View>
      <Text style={tw`font-semibold text-2xl mb-6`}>Recommended Combo</Text>
      <View style={tw`flex-row items-center justify-between mb-6`}>
        <Image
          source="../assets/images/fruit.png"
          style={tw`w-[170px] h-[170px]`}
        />
        <Image
          source="../assets/images/quinoa.png"
          style={tw`w-[170px] h-[170px]`}
        />
      </View>
      <View style={tw`flex-row items-center gap-6 mb-6`}>
        {" "}
        <Text style={tw`font-semibold text-2xl`}>Hottest</Text>
        <Text style={tw`font-semibold text-lg text-[#C2BDBD]`}>Popular</Text>
        <Text style={tw`font-semibold text-lg text-[#C2BDBD]`}>New Combo</Text>
        <Text style={tw`font-semibold text-lg text-[#C2BDBD]`}>Top</Text>
      </View>
      <View style={tw`flex-row items-center justify-between`}>
        <Image
          source="../assets/images/fruit.png"
          style={tw`w-[170px] h-[170px]`}
        />
        <Image
          source="../assets/images/quinoa.png"
          style={tw`w-[170px] h-[170px]`}
        />
      </View>
    </View>
  );
}

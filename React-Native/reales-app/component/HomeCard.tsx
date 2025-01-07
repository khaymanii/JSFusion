import { View, Text, Image, FlatList } from "react-native";
import React from "react";
import tw from "twrnc";
import { home } from "../data";

interface Home {
  pictures: any;
  price: string;
  bedrooms: number;
  bathrooms: number;
  size: string;
  location: string;
  id: number;
}

export default function HomeCard() {
  const renderItem = ({ item }: { item: Home }) => (
    <View style={tw`h-[300px] mx-2 border mb-6 shadow-md`}>
      <Image
        source={item.pictures}
        style={tw`w-full h-[150px] mb-2`}
        resizeMode="cover"
      />
      <View style={tw`mx-3`}>
        <Text style={tw`font-bold text-xl`}>{item.price}</Text>
        <Text style={tw`font-semibold text-lg`}>
          {item.bedrooms} bds | {item.bathrooms} ba | {item.size}
        </Text>
        <Text style={tw`font-medium text-lg`}>{item.location}</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={home}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={tw`p-4`}
    />
  );
}

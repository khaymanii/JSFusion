import { View, Text, Image } from "react-native";
import tw from "twrnc";
import { shopCard } from "@/data/Data";

export default function ShopCollection() {
  return (
    <View style={tw`mb-12 mx-4`}>
      <Text style={tw`text-3xl font-semibold text-center mb-8`}>
        Shop Collection
      </Text>
      {shopCard.map((card) => (
        <View
          style={tw`flex-col flex-wrap items-center justify-center bg-gray-100 p-4 rounded-md mb-5`}
          key={card.id}
        >
          <Image source={card.image} style={tw`w-60 h-60`} />
          <Text style={tw`font-semibold text-lg`}>{card.name}</Text>
        </View>
      ))}
    </View>
  );
}

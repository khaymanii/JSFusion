import { View, Text, Image } from "react-native";
import tw from "twrnc";
import { categoriesCard } from "@/data/Data";
export default function ShopCategory() {
  return (
    <View style={tw`mb-12`}>
      <Text style={tw`text-3xl font-semibold text-center mb-8`}>
        Shop by Categories
      </Text>
      <View
        style={tw`mx-4 flex-row items-center justify-center flex-wrap mb-4 gap-6`}
      >
        {categoriesCard.map((category) => (
          <View
            style={tw`items-center justify-center flex-wrap mb-4`}
            key={category.id}
          >
            <View style={tw`justify-center items-center flex-row mb-2`}>
              <Image
                source={category.Image}
                style={tw`w-40 h-32 bg-gray-100 p-2`}
              />
            </View>
            <Text style={tw`text-base`}>{category.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

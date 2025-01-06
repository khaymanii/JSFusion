import { View, Text, Image, Pressable } from "react-native";
import tw from "twrnc";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";
import { useCart } from "@/context/CartContext";

type Product = {
  id: string;
  productName: string;
  category: string;
  brand: string;
  price: number;
  caliber: string;
  weight: string;
  material: string;
  image: any;
  description: string;
  quantity: number;
};

type TransformedProduct = Omit<Product, "image"> & {
  image: { uri: string }; // Transformed image type as object with uri property
};

export default function ShopCard({
  id,
  image,
  name,
  price,
}: {
  id: string;
  image: { uri: string };
  name: string;
  price: number;
}) {
  const router = useRouter();
  const { addToCart } = useCart();
  return (
    <View style={tw`mx-2 mb-4 px-3 `}>
      <Pressable onPress={() => router.push(`/products/${id}` as any)}>
        <View
          style={tw`flex items-center justify-center bg-gray-200 w-full h-48  mb-2 rounded-lg`}
        >
          <Image
            source={image}
            style={tw`w-full h-full`}
            resizeMode="contain"
          />
        </View>{" "}
        <Text style={tw`font-semibold text-xl`}>{name}</Text>
        <Text style={tw`font-semibold text-lg`}>{price}</Text>
      </Pressable>
      <View style={tw`mt-1`}>
        <AntDesign
          name="pluscircle"
          size={24}
          color="black"
          onPress={() => addToCart({ id, name, price, image: image.uri })}
        />
      </View>
    </View>
  );
}

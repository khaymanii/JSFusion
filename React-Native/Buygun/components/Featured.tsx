import { View, Text, Image, Pressable } from "react-native";
import tw from "twrnc";
import { useCart } from "../context/CartContext";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebaseConfig/firebase";
import { useEffect, useState } from "react";
import ToastManager from "toastify-react-native";

type FeaturedCard = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string; // Original image type as string
};

type TransformedCard = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: { uri: string }; // Transformed image type as object with uri property
};

export default function Featured() {
  const [cards, setCards] = useState<TransformedCard[]>([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchFeaturedCards = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "featureCard"));
        const data = querySnapshot.docs.map((doc) => {
          const card = doc.data() as FeaturedCard;
          const { id, ...rest } = card; // Destructure to exclude id from rest
          return {
            id: doc.id, // Ensure id is correctly assigned
            ...rest,
            image: { uri: card.image }, // Transform image to object with uri property
          };
        }) as TransformedCard[];
        setCards(data);
      } catch (error) {
        console.error("Error fetching featured cards:", error);
      }
    };

    fetchFeaturedCards();
  }, []);

  return (
    <View style={tw`mb-12`}>
      <ToastManager />
      <Text style={tw`text-3xl font-semibold text-center mb-8`}>Featured</Text>
      {cards.map((card: TransformedCard) => (
        <View
          style={tw`mx-4 px-3 bg-white rounded-lg shadow-md p-4 mb-6`}
          key={card.id}
        >
          <View style={tw`relative`}>
            <View style={tw`bg-gray-100 w-full items-center justify-center`}>
              <Image
                source={card.image}
                resizeMode="contain"
                style={tw`h-40 w-40`}
              />
            </View>
            <Pressable
              style={tw`absolute bottom-4 left-4 bg-black text-white px-4 py-2 rounded-md opacity-90`}
              onPress={() => {
                addToCart({
                  id: card.id,
                  name: card.name,
                  price: card.price,
                  image: card.image.uri, // Pass the image URI as a string
                });
              }}
            >
              <Text style={tw`text-white`}> Add to Cart</Text>
            </Pressable>
          </View>
          <View style={tw`mt-4`}>
            <Text style={tw`font-semibold text-base`}>{card.name}</Text>
            <Text style={tw`text-sm text-gray-600`}>{card.description}</Text>
            <Text style={tw`font-bold text-gray-900 mt-2`}>${card.price}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

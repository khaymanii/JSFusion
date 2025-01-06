import { View, Text, ScrollView, Image, Pressable } from "react-native";
import tw from "twrnc";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebaseConfig/firebase";
import { Stack } from "expo-router";
import Footer from "@/components/Footer";
import { useLocalSearchParams } from "expo-router";
import { useCart } from "@/context/CartContext";
import ToastManager from "toastify-react-native";

type Product = {
  id: string;
  productName: string;
  image: string;
  price: number;
  brand: string;
  category: string;
  caliber: string;
  weight: string;
  quantity: number;
  description: string;
};

type TransformedProduct = {
  id: string;
  productName: string;
  price: number;
  image: { uri: string };
  brand: string;
  category: string;
  caliber: string;
  weight: string;
  quantity: number;
  description: string;
};

export default function index() {
  const { id } = useLocalSearchParams(); // Retrieve 'id' from the URL

  const [product, setProduct] = useState<TransformedProduct | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (!id) throw new Error("Product ID not provided");
        if (typeof id !== "string") throw new Error("Invalid product ID");
        const productDoc = await getDoc(doc(db, "products", id));
        if (productDoc.exists()) {
          const productData = productDoc.data();
          if (productData) {
            setProduct({
              id: productDoc.id,
              productName: productData.productName,
              image: { uri: productData.image },
              price: productData.price,
              brand: productData.brand,
              category: productData.category,
              caliber: productData.caliber,
              weight: productData.weight,
              quantity: productData.quantity,
              description: productData.description,
            });
          }
        } else {
          setError("Product not found");
        }
      } catch (err) {
        if (err instanceof Error) {
          console.error("Error fetching product:", err.message);
        } else {
          console.error("Error fetching product:", err);
        }
        setError("Failed to fetch product. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  if (!product) {
    return (
      <View style={tw`p-4 flex-1 items-center justify-center`}>
        <Text style={tw`text-red-500`}>Product not found!</Text>
      </View>
    );
  }

  console.log("Product image URL:", product.image.uri); // Log the image URL

  return (
    <ScrollView style={tw`bg-white`}>
      <Stack.Screen options={{ headerShown: false }} />
      <ToastManager />

      <View style={tw`bg-black w-full h-64 items-center justify-center `}>
        <Text style={tw`text-white font-semibold text-3xl`}>
          {product.productName}
        </Text>
      </View>
      <View style={tw`items-center`}>
        <Image
          source={product.image}
          resizeMode="contain"
          style={tw`w-full h-64`}
        />
      </View>
      <View style={tw`mx-4`}>
        <Text style={tw`text-left text-3xl font-semibold mb-2`}>
          {product.productName}
        </Text>
        <Text style={tw`text-left text-xl font-semibold mb-4`}>
          $
          {typeof product.price === "number"
            ? product.price.toFixed(2)
            : product.price}{" "}
        </Text>
        <View style={tw`flex-row flex-wrap justify-between items-center mb-4`}>
          {" "}
          <Text style={tw`text-left text-xl font-semibold  mb-2`}>
            Brand: <Text style={tw`text-lg font-normal`}>{product.brand}</Text>
          </Text>
          <Text style={tw`text-left text-xl font-semibold mb-2`}>
            Category:{" "}
            <Text style={tw`text-lg font-normal`}>{product.category}</Text>
          </Text>{" "}
          <Text style={tw`text-left text-xl font-semibold mb-2`}>
            Caliber:{" "}
            <Text style={tw`text-lg font-normal`}>{product.caliber}</Text>
          </Text>{" "}
          <Text style={tw`text-left text-xl font-semibold mb-2`}>
            Weight:{" "}
            <Text style={tw`text-lg font-normal`}>{product.weight}</Text>
          </Text>
          <Text style={tw`text-left text-xl font-semibold mb-2`}>
            Quantity in Stock:{" "}
            <Text style={tw`text-lg font-normal`}>{product.quantity}</Text>
          </Text>{" "}
        </View>
        <Text style={tw`text-lg text-gray-500 mb-8`}>
          {product.description}
        </Text>
        <Pressable
          style={tw`w-full p-2 bg-black rounded-md`}
          onPress={() =>
            addToCart({
              id: product.id,
              name: product.productName,
              price: product.price,
              image: product.image.uri, // Transform image back to string
            })
          }
        >
          <Text style={tw`text-white text-xl text-center`}> Add to Cart</Text>
        </Pressable>
      </View>
      <Footer />
    </ScrollView>
  );
}

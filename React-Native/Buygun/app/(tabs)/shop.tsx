import { View, Text, ScrollView } from "react-native";
import tw from "twrnc";
import ShopCard from "@/components/ShopCard";
import { products } from "@/data/Data";
import Footer from "@/components/Footer";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebaseConfig/firebase";
import { useEffect, useState } from "react";
import ToastManager from "toastify-react-native";

type Product = {
  id: string;
  image: string;
  productName: string;
  price: number;
};

type TransformedProduct = {
  id: string;
  productName: string;
  price: number;
  image: { uri: string }; // Transformed image type as object with uri property
};

export default function shop() {
  const [products, setProducts] = useState<TransformedProduct[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const productsData = querySnapshot.docs.map((doc) => {
          const product = doc.data() as Product;
          const { id, ...rest } = product; // Destructure to exclude id from rest
          return {
            id: doc.id, // Ensure id is correctly assigned
            ...rest,
            image: { uri: product.image }, // Transform image to object with uri property
          };
        }) as TransformedProduct[];
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);
  return (
    <ScrollView style={tw`bg-white`}>
      <ToastManager />
      <View style={tw`bg-black w-full h-64 items-center justify-center mb-14`}>
        <Text style={tw`text-white font-semibold text-3xl`}>Shop</Text>
      </View>{" "}
      <View style={tw``}>
        {products.map((product: TransformedProduct) => (
          <ShopCard
            id={product.id}
            key={product.id}
            image={product.image}
            name={product.productName}
            price={product.price}
          />
        ))}{" "}
      </View>
      <Footer />
    </ScrollView>
  );
}

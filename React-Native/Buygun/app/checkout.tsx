import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import tw from "twrnc";
import Footer from "@/components/Footer";
import React from "react";
import { useRouter } from "expo-router";
import ToastManager, { Toast } from "toastify-react-native";
import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/firebaseConfig/firebase";
import { useCart } from "../context/CartContext";
import { GestureResponderEvent } from "react-native";

export default function checkout() {
  const router = useRouter();
  const { cartItems, subtotal, cartCount } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "",
  });

  const handleChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: GestureResponderEvent) => {
    e.preventDefault();
    const { name, email, phone, address, city, country } = formData;

    if (!name || !email || !phone || !address || !city || !country) {
      Toast.error("Please fill in all required fields.");
      return;
    }
    try {
      // Add order to Firestore
      const ordersRef = collection(db, "orders");
      await addDoc(ordersRef, {
        customerName: formData.name,
        address: formData.address,
        phone: formData.phone,
        email: formData.email,
        city: formData.city,
        country: formData.country,
        cartItems,
        subtotal,
        cartCount,
        createdAt: serverTimestamp(),
      });

      Toast.success("Order placed successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        country: "",
      });

      // Optionally, clear the cart state or navigate to another page
    } catch (error) {
      console.error("Error adding document: ", error);
      Toast.error("Failed to place order. Please try again.");
    }
  };

  return (
    <ScrollView style={tw`bg-white`}>
      <ToastManager />
      <View style={tw`bg-black w-full h-64 items-center justify-center mb-14`}>
        <Text style={tw`text-white font-semibold text-3xl`}>Checkout</Text>
      </View>
      <View style={tw`mx-4 mb-6`}>
        <TextInput
          style={tw` p-2 border outline-none rounded-lg w-full mb-4`}
          placeholder="Enter your name"
          value={formData.name}
          onChangeText={(text) => handleChange("name", text)}
        />
        <TextInput
          style={tw`p-2 border outline-none rounded-lg w-full mb-4`}
          placeholder="Enter your email"
          value={formData.email}
          onChangeText={(text) => handleChange("email", text)}
        />
        <TextInput
          style={tw`p-2 border outline-none rounded-lg w-full mb-4`}
          placeholder="Phone number"
          value={formData.phone}
          onChangeText={(text) => handleChange("phone", text)}
        />
        <TextInput
          style={tw`p-2 border outline-none rounded-lg w-full mb-4`}
          placeholder="Street address"
          value={formData.address}
          onChangeText={(text) => handleChange("address", text)}
        />
        <TextInput
          style={tw`p-2 border outline-none rounded-lg w-full mb-4`}
          placeholder="City"
          value={formData.city}
          onChangeText={(text) => handleChange("city", text)}
        />
        <TextInput
          style={tw`p-2 border outline-none rounded-lg w-full mb-4`}
          placeholder="Country"
          value={formData.country}
          onChangeText={(text) => handleChange("country", text)}
        />

        <TouchableOpacity
          onPress={handleSubmit}
          style={tw`w-full p-2 bg-black text-white text-xl rounded-lg text-center`}
        >
          Place Order Now{" "}
        </TouchableOpacity>
      </View>
      <View
        style={tw`h-72 bg-black text-white rounded-lg p-4 pt-5 tracking-wider mx-4`}
      >
        <View style={tw`flex-row justify-between items-center mb-2`}>
          {" "}
          <Text style={tw`text-xl  tracking-wider text-white`}>Subtotal:</Text>
          <Text style={tw`text-xl  tracking-wider text-white`}>
            ${subtotal.toFixed(2)}
          </Text>
        </View>
        <View style={tw`flex-row justify-between items-center mb-6`}>
          {" "}
          <Text style={tw`text-xl  tracking-wider text-white`}>Shipping</Text>
          <Text style={tw`text-xl  tracking-wider text-white`}>$0.00</Text>
        </View>
        <View style={tw`flex-row justify-between items-center mb-20`}>
          {" "}
          <Text style={tw`text-2xl font-semibold tracking-wider text-white`}>
            Total:
          </Text>
          <Text style={tw`text-2xl font-semibold tracking-wider text-white`}>
            ${subtotal.toFixed(2)}{" "}
          </Text>
        </View>
        <TouchableOpacity
          onPress={handleSubmit}
          style={tw`w-full p-2 bg-white text-black text-xl rounded-md  text-center`}
        >
          Place Order Now
        </TouchableOpacity>{" "}
      </View>
      <Footer />
    </ScrollView>
  );
}

import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useCart } from "../context/CartContext";
export default function Table() {
  const { cartItems, deleteCartItem } = useCart();

  return (
    <View style={tw`flex-1 p-4 bg-white`}>
      {/* Table Header */}
      <View style={tw`flex-row py-2`}>
        <Text style={tw`w-1/4 text-center font-bold`}>Image</Text>
        <Text style={tw`w-1/4 text-center font-bold`}>Name</Text>
        <Text style={tw`w-1/4 text-center font-bold`}>Price</Text>
        <Text style={tw`w-1/4 text-center font-bold`}>
          <AntDesign name="delete" size={20} color="black" />{" "}
        </Text>
      </View>
      {/* Table Body */}
      {cartItems.length > 0 ? (
        cartItems.map((cartItem) => (
          <View
            style={tw`flex-row items-center justify-between py-6 `}
            key={cartItem.id}
          >
            <View style={tw`w-1/4 items-center`}>
              <Image source={{ uri: cartItem.image }} style={tw`w-16 h-16`} />{" "}
            </View>

            <Text style={tw`w-1/4 text-center`}>{cartItem.name}</Text>

            <Text style={tw`w-1/4 text-center`}>${cartItem.price}</Text>

            <TouchableOpacity
              style={tw`w-1/4 items-center`}
              onPress={() => deleteCartItem(cartItem.id)}
            >
              <AntDesign name="delete" size={20} color="black" />{" "}
            </TouchableOpacity>
          </View>
        ))
      ) : (
        <View style={tw`items-center py-6`}>
          <Text style={tw`text-center text-lg`}>Your cart is empty</Text>
        </View>
      )}
    </View>
  );
}

import { View, Text, TouchableOpacity, Pressable } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import tw from "twrnc";
import { useState } from "react";
import Dropdown from "./Dropdown";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";
import { useRouter } from "expo-router";

export default function Header() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const router = useRouter();
  const { currentUser } = useAuth();
  const { cartCount } = useCart();

  const toggleDropdown = () => {
    setIsDropdownVisible((prev) => !prev);
  };

  return (
    <View
      style={[
        tw`flex-row justify-between items-center py-4 px-4 shadow-lg bg-white`,
        { zIndex: 1000, elevation: 10 },
      ]}
    >
      <Pressable onPress={() => router.push("/(tabs)")}>
        {" "}
        <Text style={tw`text-xl font-semibold`}>Buygun</Text>
      </Pressable>

      <View style={tw`flex-row items-center`}>
        <View style={tw`relative`}>
          <AntDesign name="shoppingcart" size={24} color="black" />
          <View
            style={tw`absolute top-0 right-0 w-4 h-4 rounded-full bg-red-500 text-white items-center justify-center`}
          >
            {cartCount && cartCount > 0 && (
              <Text style={tw`text-xs text-white`}>{cartCount}</Text>
            )}
          </View>
        </View>

        <View style={tw`flex-row items-center ml-4 relative`}>
          <TouchableOpacity
            style={tw`flex-row items-center`}
            onPress={toggleDropdown}
          >
            <AntDesign name="user" size={24} color="black" />
            {currentUser && (
              <Text style={tw`ml-1`}>{currentUser.displayName}</Text>
            )}
          </TouchableOpacity>
          {isDropdownVisible && <Dropdown />}
        </View>
      </View>
    </View>
  );
}

import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";
import tw from "twrnc";
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";

const Dropdown = () => {
  const router = useRouter();
  const { logOut } = useAuth();
  const [isDropdownVisible, setDropdownVisible] = useState(true);

  const handleSignUp = () => {
    router.push("/signup");
    setDropdownVisible(false);
  };

  const handleLogout = () => {
    logOut();
    setDropdownVisible(false);
  };
  return (
    isDropdownVisible && (
      <View
        style={[
          tw`absolute top-16 right-4 bg-white border shadow-md rounded-lg w-40 py-4 text-center`,
        ]}
      >
        <TouchableOpacity
          style={tw`px-4 py-2 border-b text-center`}
          onPress={handleSignUp}
        >
          <Text style={tw`text-sm text-green-500`}>Sign up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`px-4 py-2 text-center`}
          onPress={handleLogout}
        >
          <Text style={tw`text-sm text-red-500`}>Logout</Text>
        </TouchableOpacity>
      </View>
    )
  );
};

export default Dropdown;

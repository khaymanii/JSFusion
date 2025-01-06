import { View, Text } from "react-native";
import tw from "twrnc";

export default function home() {
  return (
    <View style={tw`flex-1 items-center justify-center bg-black`}>
      <Text style={tw`text-white text-3xl font-semibold`}>Buygun</Text>
    </View>
  );
}

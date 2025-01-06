import { View, Text, TextInput, Pressable } from "react-native";
import tw from "twrnc";
export default function Newsletter() {
  return (
    <View
      style={tw`bg-black py-16 px-8 flex-col items-center justify-center mb-12`}
    >
      <Text style={tw`text-white font-semibold text-xl mb-2`}>
        Join Our Newsletter
      </Text>
      <Text style={tw`text-white mb-4 text-lg text-center`}>
        Sign up for deals, new products and promotions{" "}
      </Text>
      <View style={tw`flex-row items-center gap-2`}>
        <TextInput
          placeholder="Email address"
          style={tw`bg-transparent border border-white text-white  w-[100%] p-2`}
        />
        <Pressable style={tw`text-white`}>Signup</Pressable>
      </View>
    </View>
  );
}

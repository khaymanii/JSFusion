import { View, Text } from "react-native";
import tw from "twrnc";
export default function SocialMedia() {
  return (
    <View style={tw`mx-4`}>
      <Text style={tw`text-center font-semibold text-xl mb-2`}>NEWSFEED</Text>
      <Text style={tw`text-center font-semibold text-lg mb-2`}>Instagram</Text>
      <Text style={tw`text-center font-semibold text-lg`}>
        {" "}
        Follow us on social media for more discount & promotions{" "}
        <Text>@buygunofficial</Text>
      </Text>
    </View>
  );
}

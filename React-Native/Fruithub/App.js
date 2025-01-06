import tw from "twrnc";
import { View } from "react-native";
import Deliverystatus from "./screens/Deliverystatus";
export default function App() {
  return (
    <View style={tw`flex-1`}>
      <Deliverystatus />{" "}
    </View>
  );
}

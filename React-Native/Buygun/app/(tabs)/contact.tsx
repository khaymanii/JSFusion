import {
  View,
  Text,
  ScrollView,
  TextInput,
  Pressable,
  Image,
  TouchableOpacity,
  GestureResponderEvent,
} from "react-native";
import tw from "twrnc";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Feather from "@expo/vector-icons/Feather";
import Fontisto from "@expo/vector-icons/Fontisto";
import Footer from "@/components/Footer";
import { useRouter } from "expo-router";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/firebaseConfig/firebase";
import { useAuth } from "@/context/AuthContext";
import ToastManager, { Toast } from "toastify-react-native";

export default function contact() {
  const { currentUser } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: GestureResponderEvent) => {
    e.preventDefault();

    // Check if the user is logged in
    if (!currentUser) {
      Toast.error("You must be logged in to submit the form.");
      setTimeout(() => {
        router.push("/signup");
      }, 2000);
      return;
    }

    try {
      // Save form data along with the user's UID
      await addDoc(collection(db, "contacts"), {
        uid: currentUser.uid, // Include the user's UID
        name,
        email,
        message,
        createdAt: new Date(),
      });

      // Display success toast
      Toast.success("Message sent successfully!");

      // Reset form fields
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error("Error submitting contact form:", err);

      // Display error toast
      Toast.error("Failed to send the message. Please try again.");
    }
  };

  return (
    <ScrollView style={tw`bg-white`}>
      <ToastManager />
      <View style={tw`bg-black w-full h-64 items-center justify-center mb-14`}>
        <Text style={tw`text-white font-semibold text-3xl`}>Contact Us</Text>
      </View>
      <View style={tw`h-44 rounded-lg bg-gray-100 text-center p-6 mx-4 mb-4`}>
        {" "}
        <View style={tw`items-center mb-2`}>
          {" "}
          <EvilIcons name="location" size={28} color="black" />
        </View>
        <Text style={tw`text-gray-500 font-bold text-center`}>ADDRESS</Text>
        <Text style={tw`font-semibold text-center`}>
          234 Hiau Trieu, Hu Chin Mhin City,
        </Text>
        <Text style={tw`font-semibold text-center`}>Viet Nam </Text>
      </View>
      <View style={tw`h-44 rounded-lg bg-gray-100 text-center p-6 mx-4 mb-4`}>
        {" "}
        <View style={tw`items-center mb-2`}>
          {" "}
          <Feather name="phone" size={24} color="black" />{" "}
        </View>
        <Text style={tw`text-gray-500 font-bold text-center`}>CONTACT US</Text>
        <Text style={tw`font-semibold text-center`}>+845 475 2249 </Text>
      </View>
      <View style={tw`h-44 rounded-lg bg-gray-100 text-center p-6 mx-4 mb-6`}>
        {" "}
        <View style={tw`items-center mb-2`}>
          {" "}
          <Fontisto name="email" size={24} color="black" />
        </View>
        <Text style={tw`text-gray-500 font-bold text-center`}>EMAIL</Text>
        <Text style={tw`font-semibold text-center`}>buygun@gmail.com</Text>
      </View>
      <View style={tw`mx-4 mb-6`}>
        <Image
          source={require("@/assets/images/map.png")}
          style={tw`w-full h-[400px] rounded-lg`}
        />
      </View>
      <View style={tw`mx-4 mb-6`}>
        <TextInput
          style={tw` p-2 border outline-none rounded-lg w-full mb-4`}
          placeholder="Your Full Name"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={tw`p-2 border outline-none rounded-lg w-full mb-4`}
          placeholder="Your Email "
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={tw`p-2 border outline-none rounded-lg w-full mb-6 h-40`}
          placeholder="Your Message"
          multiline={true}
          numberOfLines={4}
          value={message}
          onChangeText={(text) => setMessage(text)}
        />

        <TouchableOpacity
          style={tw`w-full p-2 bg-black rounded-lg `}
          onPress={handleSubmit}
        >
          <Text style={tw`text-white text-lg text-center`}> Send Message</Text>
        </TouchableOpacity>
      </View>
      <Footer />
    </ScrollView>
  );
}

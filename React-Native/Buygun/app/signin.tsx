import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Pressable,
} from "react-native";
import tw from "twrnc";
import React from "react";
import { useRouter } from "expo-router";
import { useAuth } from "../context/AuthContext";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import ToastManager, { Toast } from "toastify-react-native";

interface SigninFormInputs {
  email: string;
  password: string;
}
export default function signin() {
  const { signIn, loading } = useAuth();
  const router = useRouter();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninFormInputs>();

  const onSubmit: SubmitHandler<SigninFormInputs> = async (data) => {
    try {
      await signIn(data.email, data.password);
      Toast.success("Signin successful!");
      setTimeout(() => {
        router.push("/(tabs)");
      }, 2000);
    } catch (err) {
      Toast.error(
        "Signin failed. Please check your email and password details and try again."
      );
      console.error("Error during signin:", err);
    }
  };

  return (
    <ScrollView style={tw`flex-1 bg-white`}>
      <ToastManager />
      <Image
        source={require("@/assets/images/ak5.jpg")}
        alt="signin image"
        style={tw`h-[70%] w-[100%]  mb-10`}
      />
      <Text style={tw`text-3xl font-semibold text-center mb-4`}>Buygun</Text>
      <Text style={tw`text-2xl font-semibold mx-2 mb-2`}>Sign In</Text>
      <Text style={tw`text-lg  mx-2 mb-6`}>
        Don't have an account yet?{" "}
        <Pressable onPress={() => router.push("/signup")}>
          <Text style={tw`text-green-500 text-lg`}>Sign Up</Text>
        </Pressable>
      </Text>

      <View style={tw`mx-2`}>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={tw`border-b border-b-gray-300 p-2 rounded w-full mb-4 ring-offset-0`}
              placeholder="Email address"
              onChangeText={onChange}
              value={value}
            />
          )}
          name="email"
          rules={{
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Invalid email address",
            },
          }}
        />
        {errors.email && (
          <Text style={tw`text-red-500 text-sm `}>{errors.email.message}</Text>
        )}
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={tw`border-b border-b-gray-300 p-2 rounded w-full mb-8 ring-offset-0 focus:outline-none`}
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="password"
          rules={{
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters long",
            },
          }}
        />
        {errors.password && (
          <Text style={tw`text-red-500 text-sm`}>
            {errors.password.message}
          </Text>
        )}

        <TouchableOpacity
          style={tw`w-full p-2 bg-black rounded`}
          onPress={handleSubmit(onSubmit)}
          disabled={loading}
        >
          <Text style={tw`text-white text-lg text-center`}>
            {loading ? "Signing In..." : "Sign In"}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

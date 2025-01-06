import {
  View,
  Text,
  Image,
  Pressable,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import tw from "twrnc";
import { useRouter } from "expo-router";
import { useAuth } from "../context/AuthContext";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import ToastManager, { Toast } from "toastify-react-native";

interface SignupFormInputs {
  name: string;
  email: string;
  password: string;
}

export default function Signup() {
  const router = useRouter();
  const { signUp, loading } = useAuth();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormInputs>();

  const onSubmit: SubmitHandler<SignupFormInputs> = async (data) => {
    try {
      await signUp({
        displayName: data.name,
        email: data.email,
        password: data.password,
      });
      Toast.success("Signup successful! Redirecting to signin page...");
      setTimeout(() => {
        router.push("/signin");
      }, 2000);
    } catch (err) {
      Toast.error("Signup failed. Please try again.");
      console.error("Error during signup:", err);
    }
  };

  return (
    <ScrollView style={tw`flex-1 bg-white`}>
      <ToastManager />
      <Image
        source={require("@/assets/images/ak5.jpg")}
        style={tw`h-[70%] w-[100%]  mb-6`}
      />
      <Text style={tw`text-3xl font-semibold text-center mb-4`}>Buygun</Text>
      <Text style={tw`text-2xl font-semibold mx-2 mb-2`}>Sign Up</Text>
      <Text style={tw`text-lg  mx-2 mb-4`}>
        Already have an account?{" "}
        <Pressable onPress={() => router.push("/signin")}>
          <Text style={tw`text-green-500 text-lg`}>Sign In</Text>
        </Pressable>
      </Text>

      <View style={tw`mx-2`}>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={tw`border-b border-b-gray-300 p-2 rounded w-full mb-4 ring-offset-0`}
              placeholder="Your name"
              onChangeText={onChange}
              value={value}
            />
          )}
          name="name"
          rules={{
            required: "Name is required",
            minLength: {
              value: 3,
              message: "Name must be at least 3 characters long",
            },
          }}
        />
        {errors.name && (
          <Text style={tw`text-red-500 text-sm`}>{errors.name.message}</Text>
        )}

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
          style={tw`w-full p-2 bg-black  rounded `}
          onPress={handleSubmit(onSubmit)}
          disabled={loading}
        >
          <Text style={tw`text-white text-lg text-center`}>
            {loading ? "Signing Up..." : "Sign Up"}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

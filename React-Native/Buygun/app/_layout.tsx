import React, { useEffect } from "react";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import tw from "twrnc";
import Header from "@/components/Header";
import { AuthProvider } from "@/context/AuthContext";
import { CartProvider } from "@/context/CartContext";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    PoppinsRegular: require("../assets/fonts/Poppins-Regular.ttf"),
    PoppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
    PoppinsMedium: require("../assets/fonts/Poppins-Medium.ttf"),
    PoppinsLight: require("../assets/fonts/Poppins-Light.ttf"),
    PoppinsSemiBold: require("../assets/fonts/Poppins-SemiBold.ttf"),
    PoppinsBlack: require("../assets/fonts/Poppins-Black.ttf"),
    PoppinsExtraBold: require("../assets/fonts/Poppins-ExtraBold.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <AuthProvider>
      <CartProvider>
        <View style={tw`flex-1`}>
          <Header />
          <Stack>
            <Stack.Screen
              name="(tabs)"
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="home"
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="signup"
              options={{
                headerShown: false,
              }}
            />{" "}
            <Stack.Screen
              name="signin"
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="products"
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="checkout"
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="not-found"
              options={{
                headerShown: false,
              }}
            />{" "}
          </Stack>
          <StatusBar style="auto" />
        </View>
      </CartProvider>
    </AuthProvider>
  );
}

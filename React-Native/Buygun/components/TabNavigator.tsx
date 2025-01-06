import { Tabs } from "expo-router";
import { Platform } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";

const Colors = {
  light: { tint: "#32CD32" },
  dark: { tint: "#ffffff" },
};

const colorScheme = "light";

export default function TabNavigator() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        tabBarInactiveTintColor: "black",
        headerShown: false,
        tabBarStyle: Platform.select({
          default: {
            backgroundColor: "#ffffff",
            color: "#000000",
            paddingTop: 20,
            paddingBottom: 60,
          },
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="home"
              size={24}
              color={focused ? Colors[colorScheme ?? "light"].tint : "black"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="shop"
        options={{
          title: "Shop",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="storefront-outline"
              size={24}
              color={focused ? Colors[colorScheme ?? "light"].tint : "black"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="shoppingcart"
              size={24}
              color={focused ? Colors[colorScheme ?? "light"].tint : "black"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          title: "Contact",
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="contacts-outline"
              size={24}
              color={focused ? Colors[colorScheme ?? "light"].tint : "black"}
            />
          ),
        }}
      />
    </Tabs>
  );
}

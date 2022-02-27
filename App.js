import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./src/screens/Login";
import Register from "./src/screens/Register";
import Categories from "./src/screens/Categories";
import Payment from "./src/screens/Payment";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen component={Login} name="Login" />
        <Stack.Screen component={Register} name="Register" />
        <Stack.Screen component={Categories} name="Categories" />
        <Stack.Screen component={Payment} name="Payment" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

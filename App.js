import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "./src/screens/Welcome";

import Login from "./src/screens/Login";
import Register from "./src/screens/Register";
import Categories from "./src/screens/Categories";
import Payment from "./src/screens/Payment";
import Credit from "./src/screens/Credit";
import add_Card from "./src/screens/add_Card";
import save_Card from "./src/screens/save_Card.js";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen component={Welcome} name="Welcome" />
        <Stack.Screen component={Login} name="Login" />
        <Stack.Screen component={Register} name="Register" />
        <Stack.Screen component={Categories} name="Categories" />
        <Stack.Screen component={Payment} name="Payment" />
        <Stack.Screen component={Credit} name="Credit" />
        <Stack.Screen component={add_Card} name="add_Card" />
        <Stack.Screen component={save_Card} name="save_Card" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

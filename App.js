
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './src/screens/Welcome';
import Info from './src/screens/Info';
import Done from './src/screens/Done';
import Outof from './src/screens/Outof';
import ErrorScreen from './src/screens/ErrorScreen.js';
import ErrorScreens from './src/screens/ErrorScreens.js';

const Stack = createNativeStackNavigator();
export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={Welcome} name='Welcome' />
        <Stack.Screen component={Info} name='Info' />
        <Stack.Screen component={Done} name='Done' />
        <Stack.Screen component={Outof} name='Outof' />
        <Stack.Screen component={ErrorScreen} name='ErrorScreen' />
      </Stack.Navigator>
    </NavigationContainer>
   
  );
}


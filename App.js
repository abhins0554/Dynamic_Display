import React from "react";
import LoginScreen from "./APP/Screen/LoginScreen";
import WebViewScreen from "./APP/Screen/WebViewScreen";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={WebViewScreen}
      >
        <Stack.Screen name="WebViewScreen" component={WebViewScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

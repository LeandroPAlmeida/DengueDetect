import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { TabBar } from "./src/routes";
import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/pages/Login";
import Informacoes from "./src/pages/Informacoes";

const Stack = createNativeStackNavigator(); //Criando uma aba com opções clicáveis

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#FF0000" barStyle="light-content" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="TabBar" component={TabBar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

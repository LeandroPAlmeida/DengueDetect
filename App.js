
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/pages/Login/Login";
import { requestNotificationPermission } from "./firebaseConfig";
import scheduleNotifications from "./notificationScheduler";
import * as Notifications from 'expo-notifications';
import { TabBar } from "./src/routes/TabBar";

const Stack = createNativeStackNavigator();

// Configuração para o comportamento das notificações
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true, // Mostra a notificação na interface
    shouldPlaySound: false, // Sem som por padrão
    shouldSetBadge: false, // Não altera os badges no ícone do app
  }),
});

export default function App() {
  useEffect(() => {
    const setupNotifications = async () => {
      const token = await requestNotificationPermission();
      if (token) {
        console.log("Notificações prontas para uso!");
        scheduleNotifications();
      }
    };

    setupNotifications();
  }, []);

  return (
    <NavigationContainer>
      <StatusBar style="black" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="TabBar" component={TabBar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

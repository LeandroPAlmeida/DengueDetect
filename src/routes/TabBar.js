import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Information from "../pages/Information/Information";
import Map from "../pages/Map/Map";
import Diagnosis from "../pages/Diagnosis/Diagnosis";
import Denunciation from "../pages/Denunciation/Denunciation";
import CustomTabBar from "../CustomTabBar/CustomTabBar";

const Tab = createBottomTabNavigator(); //Criando uma aba com opções clicáveis

export function TabBar() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen
        name="Informações"
        component={Information}
        options={{
          tabBarIcon: "information-circle",
        }}
      />
      <Tab.Screen
        name="Mapa de casos"
        component={Map}
        options={{
          tabBarIcon: "map",
        }}
      />
      <Tab.Screen
        name="Diagnóstico"
        component={Diagnosis}
        options={{
          tabBarIcon: "medical",
        }}
      />
      <Tab.Screen
        name="Denúncia"
        component={Denunciation}
        options={{
          tabBarIcon: "megaphone",
        }}
      />
    </Tab.Navigator>
  );
}

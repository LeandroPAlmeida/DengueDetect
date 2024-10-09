import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home";
import Informacoes from "../pages/Informacoes";
import Mapa from "../pages/Mapa";
import Diagnostico from "../pages/Diagnostico";
import Denuncia from "../pages/Denuncia";
import CustomTabBar from "../components/CustomTabBar";

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
        name="Home"
        component={Home}
        options={{
          tabBarIcon: "home",
        }}
      />
      <Tab.Screen
        name="Informações"
        component={Informacoes}
        options={{
          tabBarIcon: "information-circle",
        }}
      />
      <Tab.Screen
        name="Mapa de casos"
        component={Mapa}
        options={{
          tabBarIcon: "map",
        }}
      />
      <Tab.Screen
        name="Diagnóstico"
        component={Diagnostico}
        options={{
          tabBarIcon: "medical",
        }}
      />
      <Tab.Screen
        name="Denúncia"
        component={Denuncia}
        options={{
          tabBarIcon: "megaphone",
        }}
      />
    </Tab.Navigator>
  );
}

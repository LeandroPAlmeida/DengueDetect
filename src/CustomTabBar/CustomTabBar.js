import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function CustomTabBar({ state, descriptors, navigation }) {
  const handlePress = (route, isFocused) => {
    const event = navigation.emit({
      type: "tabPress",
      target: route.key,
      canPreventDefault: true,
    });

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate({ name: route.name, merge: true });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;

          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole="tab"
              accessibilityState={{ selected: isFocused }}
              accessibilityLabel={
                options.tabBarAccessibilityLabel || `Aba ${route.name}`
              }
              accessibilityHint="Toque para navegar para esta aba"
              onPress={() => handlePress(route, isFocused)}
              style={styles.buttonTab}
            >
              <View style={{ alignItems: "center", padding: 4 }}>
                {/* Nome da Aba */}
                <Text
                  style={{
                    fontSize: 13,
                    alignItems: "center",
                    color: isFocused ? "black" : "#a9a9a9",
                    fontWeight: isFocused ? "bold" : "normal",
                  }}
                >
                  {route.name}
                </Text>

                {/* Ícone da Aba */}
                <View
                  style={[
                    styles.innerButton,
                    {
                      backgroundColor: isFocused
                        ? "rgba(255,0,0,0.9)"
                        : "transparent",
                    },
                  ]}
                >
                  <Ionicons
                    name={options.tabBarIcon || "ellipse-outline"}
                    size={34}
                    color={isFocused ? "black" : "#a9a9a9"}
                  />
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  content: {
    borderRadius: 99,
    flexDirection: "row",
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
    backgroundColor: "rgba(255,255,255,0.9)",
    padding: 4,
  },
  buttonTab: {
    justifyContent: "center",
    alignItems: "center",
    margin: 2,
  },
  innerButton: {
    padding: 5,
    borderRadius: 99,
  },
});

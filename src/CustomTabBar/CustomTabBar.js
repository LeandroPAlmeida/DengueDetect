import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function CustomTabBar({ state, descriptors, navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate({ name: route.name, merged: true });
            }
          };
          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAcessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              style={styles.buttonTab}
            >
              <View style={{ alignItems: "center", padding: 4 }}>
                <Text
                  style={{
                    fontSize: 12,
                    alignItems: "center",
                    color: isFocused ? "black" : "#a9a9a9",
                    fontWeight: isFocused ? "bold" : "normal",
                  }}
                >
                  {route.name}
                </Text>

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
                    name={options.tabBarIcon}
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
    //container do bottomSheet
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  content: {
    borderRadius: 99,
    flexDirection: "row", //colocando os botoes um do lado do outro na horizontal
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
    backgroundColor: "rgba(255,255,255,0.9)",
    gap: 0,
    backgroundColor: "white",
    //elevation: 10,
    padding: 4
  },
  buttonTab: {
    justifyContent: "center",
    alignItems: "center",
    margin : 2
  },
  innerButton: {
    padding: 5,
    borderRadius: 99,
  },
});

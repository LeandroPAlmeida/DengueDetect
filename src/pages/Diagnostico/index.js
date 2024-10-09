import React from "react";
import { View, Text, StyleSheet } from "react-native";
import DengueChecker from "./DengueChecker";

export default function Diagnostico() {
  return (
    <View style={styles.container}>
      <DengueChecker />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
  },
});

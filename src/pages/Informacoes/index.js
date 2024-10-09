import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Accordion from "./Accordion";

export default function Informacoes() {
  return (
    <View style={styles.container}>
      <Accordion />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
});

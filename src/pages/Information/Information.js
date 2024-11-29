import React from "react";
import { View, StyleSheet, ScrollView, Image } from "react-native";
import Accordion from "./Accordion";
import { SafeAreaView } from "react-native-safe-area-context";

const logo = require("../../assets/icone.png");

export default function Information() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={logo} style={styles.logo} />
        <Accordion />
        {/* Adiciona um espaço extra para não atrapalhar a visualização do menu */}
        <View style={{ height: 100, backgroundColor: "white" }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollContent: {
    padding: 20,
    backgroundColor: "white",
  },
  logo: {
    width: 50,
    height: 70,
    alignSelf: "center",
    marginTop: "12%",
  },
});

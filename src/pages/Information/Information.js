import React from "react";
import { View, StyleSheet } from "react-native";
import Accordion from "./Accordion";
import { Image } from "react-native";
const logo = require("../../assets/icone.png");

export default function Information() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo}/>
      <Accordion />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: "white",
  },
  logo: {
    width: 50, 
    height: 70, 
    alignSelf: "center",
  }
});

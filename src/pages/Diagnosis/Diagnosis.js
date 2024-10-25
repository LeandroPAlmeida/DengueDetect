import React from "react";
import { View, Text, StyleSheet } from "react-native";
import DengueChecker from "./DengueChecker";
import { Image } from "react-native";
const logo = require("../../assets/icone.png");

export default function Diagnosis() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo}/>
      <DengueChecker />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
      flex: 1,
      alignItems: 'center',
      marginTop: 20,
      backgroundColor: "white"
  },
    text: {
      fontSize: 25,
      fontWeight: "bold",
    },
    logo: {
      width: 50, 
      height: 70, 
      alignSelf: "center",
    }
  });

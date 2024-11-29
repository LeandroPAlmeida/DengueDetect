import React from "react";
import MapComponent from "./MapComponent";
import { StyleSheet, View, Dimensions } from "react-native";

export default function Map() {
  return (
      <View style={styles.container}>
          <MapComponent />
      </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, // Garante que o container ocupa toda a tela
    margin: 0,
    padding: 0,
    zIndex: 0, // Garante que o mapa fique atrás de outros componentes 
  },
});
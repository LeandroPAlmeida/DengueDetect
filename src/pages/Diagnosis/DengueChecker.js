import React, { useState } from "react";
import { View, StyleSheet, Alert, SafeAreaView } from "react-native";
import Button from "./Button";
import Checkbox from "./Checkbox/Checkbox";

function DengueChecker() {

  function DengueDetect(doencas) {
    if (doencas.length >= 3) {
      Alert.alert(
        "Atenção",
        "Você pode estar com dengue. Procure um médico para avaliação.",
        [{ text: "OK" }]
      );
    } else {
      Alert.alert(
        "Atenção",
        "É improvável que você esteja com dengue, mas consulte um médico para confirmar.",
        [{ text: "OK" }]
      );
    }
  }

  const optionsQuest = [
    { text: "Manchas vermelhas na pele", id: 1 },
    { text: "Náusea", id: 2 },
    { text: "Vômitos", id: 3 },
    { text: "Forte dor de cabeça", id: 4 },
    { text: "Febre alta (40°C)", id: 5 },
    { text: "Dor atrás dos olhos", id: 6 }
  ];

  return (
    <View style={styles.container}>
      <View style={styles.textQuestion}>
        <Checkbox options={optionsQuest} />
      </View>

      <Button text="Verificar" onPress={DengueDetect} />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    top: 100
  },
  textQuestion: {
    alignContent: "center",
    justifyContent: "center",
    padding: 10,
    paddingBottom: 30,
  },
  lastText: {
    paddingBottom: 12,
    alignContent: "center",
    justifyContent: "center",
    marginLeft: 10,
  },
});

export default DengueChecker;

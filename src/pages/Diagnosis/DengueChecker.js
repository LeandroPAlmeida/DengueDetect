import React, { useState } from "react";
import { View, StyleSheet, Alert, SafeAreaView } from "react-native";
import Button from "./Button";
import Checkbox from "./Checkbox/Checkbox";

function DengueChecker() {

  function verificarDengue(doencas) {
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
    { text: "Você apresenta manchas vermelhas pelo corpo", id: 1 },
    { text: "Você sente dores intensas no corpo e nas articulações?", id: 2 },
    { text: "Você tem dor atrás dos olhos?", id: 3 },
    { text: "Você sente dor de cabeça?", id: 4 },
    { text: "Você está com febre alta (acima de 38 graus) ?", id: 5 },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.textQuestion}>
        <Checkbox options={optionsQuest} />
      </View>

      <Button text="Verificar" onPress={verificarDengue} />
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

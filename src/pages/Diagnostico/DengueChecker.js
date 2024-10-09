import React, { useState } from "react";
import { View, Text, StyleSheet, Alert, SafeAreaView } from "react-native";
import Button from "./Button";
import Checkbox from "./Checkbox/Checkbox";

function DengueChecker() {
  const [doencas, setDoencas] = useState([]);
  const [resultado, setResultado] = useState("");

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

  function atualizarArray(num, doencas = []) {
    const newArray = doencas.reduce((acc, item) => {
      if (item === num) {
        console.log(`${num} foi removido do array.`);
        return acc; // Exclui o número simplesmente não o adicionando ao acumulador
      }
      return [...acc, item]; // Adiciona os itens que não são o número
    }, []);

    // Se o número não estiver presente, adiciona no final
    if (!doencas.includes(num)) {
      newArray.push(num);
      console.log(`${num} foi adicionado ao array.`);
    }
    setDoencas(newArray); // Atualiza o estado do array
    console.log(newArray);
  }

  const optionsQuest = [
    { text: "Você apresenta manchas vermelhas pelo corpo", id: 1 },
    { text: "Você sente dores intensas no corpo e nas articulações?", id: 2 },
    { text: "Você tem dor atrás dos olhos?", id: 3 },
    { text: "Você sente dor de cabeça?", id: 4 },
    { text: "Você está com febre alta (acima de 38 graus) ?", id: 5 },
  ];

  return (
    <View>
      <View style={styles.textQuestion}>
        <Checkbox options={optionsQuest} />
      </View>

      <Button text="Verificar" onPress={verificarDengue} />
    </View>
  );
}

const styles = StyleSheet.create({
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

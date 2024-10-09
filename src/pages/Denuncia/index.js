import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function Denuncia() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.title}>
          Saiba como solicitar uma vistoria de local com água parada
        </Text>
      </View>
      <View>
        <Text style={styles.quest}>O que é</Text>
        <Text style={styles.textQuest}>
          É o pedido de vistoria, em local com água limpa e parada acumulada,
          para avaliação de risco de proliferção de insetos. Durante a vistoria
          são fornecidas orientações preventivas. Caso seja necessário, poddem
          ser adotadas outras medidas para controle de infestação.
        </Text>
        <Text style={styles.obs}>
          Obs: A prefeitura não adota medidas de controle em áreas particulares,
          como por exemplo, casas. Nesses casos as(os) são responsáveis por
          manter condições sanitárias que dificultem a presença de animais que
          podem causar doenças.
        </Text>
      </View>
      <View>
        <Text style={styles.quest}>Quando solicitar</Text>
        <Text style={styles.textQuest}>
          Quando existir necessidade de visita em local com água limpa e parada
        </Text>
      </View>
      <View>
        <Text style={styles.quest}>Público-Alvo</Text>
        <Text style={styles.textQuest}>Qualquer pessoa</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "red",
    paddingLeft: 14,
    marginBottom: 10,
  },
  quest: {
    fontWeight: "bold",
    padding: 7,
    fontSize: 19,
    paddingLeft: 7,
  },
  textQuest: {
    marginTop: -10,
    padding: 14,
    fontSize: 14,
  },
  obs: {
    marginTop: -19,
    padding: 14,
  },
});

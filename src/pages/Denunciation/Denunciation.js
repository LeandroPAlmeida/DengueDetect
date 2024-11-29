import React from "react";
import { View, Text, StyleSheet, Linking, ScrollView } from "react-native";
import { Image } from "react-native";

const logo = require("../../assets/icone.png");

export default function Denunciation() {
  return (
    <ScrollView 
      style={styles.container}
      accessible={true} 
      accessibilityLabel="Tela de instruções para denúncias."
    >
      {/* Logo com descrição */}
      <Image 
        source={logo} 
        style={styles.logo}
        accessible={true}
        accessibilityLabel="Logo da prefeitura de São Paulo"
      />

      {/* Introdução */}
      <View style={{ marginBottom: 10 }}>
        <Text style={styles.title} accessible={true} accessibilityLabel="Instruções para realizar denúncias em São Paulo.">
          De acordo com a prefeitura de São Paulo, para realizar uma denúncia existem os seguintes caminhos possíveis:
        </Text>
      </View>

      {/* Opções de denúncia */}
      <View>
        <Text style={styles.quest}>Eletrônico:</Text>
        <Text style={styles.textQuest}>
          Portal de Atendimento SP156:{" "}
          <Text
            style={styles.link}
            onPress={() =>
              Linking.openURL(
                "https://sp156.prefeitura.sp.gov.br/portal/servicos/informacao?servico=810"
              )
            }
            accessible={true}
            accessibilityRole="link"
            accessibilityLabel="Portal de Atendimento SP156"
            accessibilityHint="Abre o portal de serviços da Prefeitura de São Paulo no navegador."
          >
            Clique aqui
          </Text>
        </Text>
      </View>

      <View>
        <Text style={styles.quest}>Presencial:</Text>
        <Text style={styles.textQuest}>
          Praças de atendimento das Subprefeituras (precisa de agendamento
          prévio):{" "}
          <Text
            style={styles.link}
            onPress={() =>
              Linking.openURL(
                "https://agendadesc.prefeitura.sp.gov.br/agendamento/"
              )
            }
            accessible={true}
            accessibilityRole="link"
            accessibilityLabel="Agendamento presencial nas subprefeituras"
            accessibilityHint="Abre o site para agendamento nas subprefeituras."
          >
            Clique aqui
          </Text>
        </Text>
      </View>

      <View>
        <Text style={styles.quest}>Telefônico:</Text>
        <Text 
          style={styles.textQuest}
          accessible={true}
          accessibilityLabel="Central Telefônica 156."
        >
          Central Telefônica 156.
        </Text>
      </View>

      <View>
        <Text style={styles.quest}>Chat SP 156:</Text>
        <Text 
          style={styles.textQuest}
          accessible={true}
          accessibilityLabel="Contato via WhatsApp pelo telefone 11 3230-5156."
        >
          Entre em contato pelo WhatsApp através do telefone: (11) 3230-5156.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "red",
    margin: 20,
    marginTop: 5,
    marginBottom: -10,
  },
  quest: {
    fontWeight: "bold",
    margin: 20,
    marginTop: 20,
    marginBottom: -10,
    fontSize: 20,
  },
  textQuest: {
    margin: 25,
    marginTop: 15,
    fontSize: 18,
  },
  obs: {
    margin: 25,
    marginTop: 0,
    fontSize: 14,
    marginBottom: 0,
  },
  link: {
    color: "blue",
  },
  logo: {
    width: 50,
    height: 70,
    alignSelf: "center",
    marginTop: "12%",
  },
});

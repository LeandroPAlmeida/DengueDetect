import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const TableInBottomRight = () => {
  const levels = [
    { id: 1, name: "Verde", color: "rgba(68, 138, 131, 0.7)" },
    { id: 2, name: "Amarelo", color: "rgba(208, 177, 131, 0.7)" },
    { id: 3, name: "Laranja", color: "rgba(255, 112, 67, 0.7)" },
    { id: 4, name: "Vermelho", color: "rgba(198, 46, 46, 0.7)" },
  ];

  return (
    <View
      style={styles.container}
      accessible={true}
      accessibilityRole="none"
      accessibilityLabel="Tabela de níveis de alerta"
      accessibilityHint="Contém níveis de alerta organizados por cores e descrições"
    >
      <View style={styles.table}>
        {/* Cabeçalho da tabela */}
        <View style={styles.header} accessible={true} accessibilityRole="header">
          <Text style={styles.headerText}>
            Níveis de alerta
          </Text>
        </View>

        {/* Linhas da tabela */}
        {levels.map((level) => (
          <View
            key={level.id}
            style={[styles.row, { backgroundColor: level.color }]}
            accessible={true}
            accessibilityRole="text"
            accessibilityLabel={`Linha ${level.id}, nível: ${level.name}`}
            accessibilityHint="Indica o nível de alerta pela cor correspondente"
          >
            <Text style={styles.rowText}>{level.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: "12%",
    right: 16,
    zIndex: 1000,
    elevation: 5,
  },
  table: {
    width: Dimensions.get("window").width * 0.3,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#fff",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  header: {
    backgroundColor: "#444",
    paddingVertical: 6,
  },
  headerText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 15,
  },
  row: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  rowText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
    textShadowColor: "#000",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 1,
  },
});

export default TableInBottomRight;

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Modal,
  StyleSheet,
} from "react-native";
import CustomCheckBox from "./CustomCheckBox";
import { FontAwesome } from "@expo/vector-icons";
import statesAndCities from "./StateAndCities.js";

const AccordionSelect = ({ onGeocodeSelect }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [selectedItems, setSelectedItems] = useState([]);
  const [expandedState, setExpandedState] = useState(null);
  const [placeholderText, setPlaceholderText] = useState(
    "Selecione seu estado ou cidade"
  );

  const toggleAccordion = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    if (selectedItems.length === 0) {
        setPlaceholderText("Selecione seu estado ou cidade");
    } else {
        const selectedNames = selectedItems.map((geocode) => {
            const stateOrCity = statesAndCities.find(
                (state) =>
                    state.geocode === geocode ||
                    state.cities.some((city) => city.geocode === geocode)
            );
            const city = stateOrCity?.cities.find(
                (city) => city.geocode === geocode
            );
            return city ? city.text : stateOrCity?.state;
        });

        const uniqueStates = new Set();
        const filteredNames = selectedNames.filter((name, index) => {
            const stateOrCity = statesAndCities.find(
                (state) =>
                    state.state === name ||
                    state.cities.some((city) => city.text === name)
            );
            if (stateOrCity && uniqueStates.has(stateOrCity.state)) {
                return false;
            }
            if (stateOrCity) {
                uniqueStates.add(stateOrCity.state);
            }
            return true;
        });

        const abbreviatedNames = filteredNames.length > 1
            ? [`${filteredNames[0]}...`]
            : filteredNames;

        setPlaceholderText(abbreviatedNames.join(", "));
    }
}, [selectedItems]);

  const handleSelectState = (state) => {
    const isSelected = selectedItems.includes(state.geocode);
    const newSelectedItems = isSelected
      ? selectedItems.filter(
          (geocode) =>
            geocode !== state.geocode &&
            !state.cities.some((city) => city.geocode === geocode)
        )
      : [
          ...selectedItems.filter(
            (geocode) => !state.cities.some((city) => city.geocode === geocode)
          ),
          state.geocode,
        ];

    setSelectedItems(newSelectedItems);
    onGeocodeSelect(newSelectedItems);
  };

  const handleSelectCity = (city, state) => {
    setSelectedItems((prevSelectedItems) => {
      const isCitySelected = prevSelectedItems.includes(city.geocode);
      let updatedSelectedItems;

      if (isCitySelected) {
        updatedSelectedItems = prevSelectedItems.filter(
          (geocode) => geocode !== city.geocode
        );
      } else {
        updatedSelectedItems = [...prevSelectedItems, city.geocode];
      }

      updatedSelectedItems = updatedSelectedItems.filter(
        (geocode) => geocode !== state.geocode
      );

      onGeocodeSelect(updatedSelectedItems);
      return updatedSelectedItems;
    });
  };

  return (
    <View style={{ flex: 1, marginRight: 10 }}>
      <TouchableOpacity onPress={toggleAccordion} style={styles.rowContainer}>
  <Text
    style={[
      styles.placeholder,
      { marginRight: placeholderText.length > 20 ? 10 : 30 }, // Ajusta dinamicamente
    ]}
  >
    {placeholderText}
  </Text>
  <FontAwesome
    name="search"
    size={30}
    style={[
      styles.icon,
      { marginLeft: placeholderText.length > 20 ? 10 : 5 }, // Ajusta a posição
    ]}
    onPress={() => {
      console.log("Ícone de busca clicado");
      onGeocodeSelect(selectedItems);
    }}
  />
</TouchableOpacity>

      {/* Modal para o conteúdo do Accordion (lista de estados) */}
      <Modal
        visible={!isCollapsed}
        animationType="fade"
        transparent={true}
        onRequestClose={toggleAccordion}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalPlaceholderText}>
              Para cidades, aperte no estado
            </Text>

            <FlatList
              data={statesAndCities}
              keyExtractor={(item) => item.geocode.toString()}
              contentContainerStyle={{ paddingTop: 5 }}
              renderItem={({ item: state }) => (
                <View style={{ marginVertical: 2 }}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <CustomCheckBox
                      isChecked={selectedItems.includes(state.geocode)}
                      onPress={() => handleSelectState(state)}
                    />
                    <TouchableOpacity onPress={() => setExpandedState(state)}>
                      <Text style={{ fontSize: 16 }}>{state.state}</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            />

            <TouchableOpacity
              onPress={toggleAccordion}
              style={styles.closeButton}
            >
              <Text style={styles.closeButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Modal para exibição das cidades ao clicar em um estado */}
      <Modal
        visible={!!expandedState} // Corrigido para exibir corretamente
        animationType="slide"
        transparent={true}
        onRequestClose={() => setExpandedState(null)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{expandedState?.state}</Text>
            <FlatList
              data={expandedState?.cities}
              keyExtractor={(city) => city.geocode.toString()}
              renderItem={({ item: city }) => (
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginVertical: 5,
                  }}
                >
                  <CustomCheckBox
                    isChecked={selectedItems.includes(city.geocode)}
                    onPress={() => handleSelectCity(city, expandedState)}
                  />
                  <Text>{city.text}</Text>
                </View>
              )}
            />
            <TouchableOpacity
              onPress={() => setExpandedState(null)}
              style={styles.closeButton}
            >
              <Text style={styles.closeButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    zIndex: 10,
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    borderRadius: 18,
  },
  placeholder: {
    flexShrink: 1,
    fontSize: 16,
    color: "#000",
  },
  icon: {
    marginLeft: 20,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "80%",
    maxHeight: "70%",
    backgroundColor: "white",
    borderRadius: 8,
    padding: 20,
  },
  modalPlaceholderText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#FF0000",
    borderRadius: 5,
    alignItems: "center",
  },
  closeButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default AccordionSelect;

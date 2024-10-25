import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet, View, Alert } from "react-native";
import MapView, { Circle, Marker } from "react-native-maps";
import * as Location from "expo-location";
import AccordionSelect from "./AccordionSelect";
import CalendarComponent from "./CalendarComponent";
import StateAndCities from "./StateAndCities"; // Importa os estados e cidades

export default function Map() {
  const [myLocation, setMyLocation] = useState(null); // Localização do usuário
  const [mapRegion, setMapRegion] = useState({
    latitude: -23.55052,
    longitude: -46.633308,
    latitudeDelta: 5,
    longitudeDelta: 5,
  });

  const [selectedLocations, setSelectedLocations] = useState([]); // Localizações selecionadas

  const mapRef = React.useRef();

  // Função para extrair somente latitude e longitude
  const extractLatLng = (location) => {
    const { latitude, longitude } = location;
    return { latitude, longitude };
  };

  // Exemplo de como usar a função
  useEffect(() => {
    const location = {
      accuracy: 100,
      altitude: 741.5,
      altitudeAccuracy: 100,
      heading: 0,
      latitude: -23.5443472,
      longitude: -46.6207788,
      speed: 0,
    };
    const { latitude, longitude } = extractLatLng(location);
    console.log("Extraído:", latitude, longitude); // Apenas latitude e longitude
  }, []);

  // Função para obter a localização do usuário
  const _getLocation = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "Permissão Negada",
          "Você pode buscar um estado ou cidade na barra de pesquisa no topo, para obter informações sobre os mesmos."
        );
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setMyLocation(location.coords);
      console.log("Localização do usuário obtida:", location.coords);
    } catch (err) {
      console.warn("Erro ao obter localização do usuário:", err);
    }
  };

  // Atualiza a localização do mapa para centralizar no estado ou cidade selecionado
  function onFocusLocations(location) {
    return new Promise((resolve, reject) => {
      if (location) {
        try {
          // Definindo o foco no mapa com a localização recebida
          setMapRegion({
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 15, // Ajusta o delta para zoom
            longitudeDelta: 15,
          });
          console.log("Focando no local:", location);
  
          // Resolve a promise com sucesso
          resolve("Foco no local definido com sucesso");
        } catch (error) {
          // Em caso de erro, rejeitamos a Promise
          reject("Erro ao definir o foco no local: " + error.message);
        }
      } else {
        console.log("Nenhuma localização válida fornecida para foco.");
        // Também pode ser rejeitada se a localização não for válida
        reject("Nenhuma localização válida fornecida.");
      }
    });
  }
  

  // Função para seleção de geocodes do AccordionSelect
  const handleGeocodeSelect = async (selectedItems) => {
    console.log('onFocusLocations:', typeof onFocusLocations);
    try {
      const selectedGeocodes = await Promise.all(
        selectedItems.map(async (item) => {
          // Busca no arquivo StateAndCities pela cidade ou estado selecionado
          let state = StateAndCities.find((state) => state.name === item.name);
          console.log("HandleGeocodeSelect: ", state);
          
          if (state) {
            console.log("Entrei 0");
            console.log("onFocusLocations antes da chamada:", typeof onFocusLocations);
            await onFocusLocations(state); // Foca no estado, espera pela conclusão
            return {
              type: "state", // Identifica que é um estado
              name: state.name,
              latitude: state.latitude,
              longitude: state.longitude,
            };
          }
  
          // Caso seja uma cidade dentro de um estado
          state = StateAndCities.find((state) =>
            state.cities.some((city) => city.name === item.name)
          );
          
          if (state) {
            console.log("Entrei 1");
  
            const city = state.cities.find((city) => city.name === item.name);
            console.log("onFocusLocations antes da chamada (cidade):", typeof onFocusLocations);
            await onFocusLocations(city); // Foca na cidade, espera pela conclusão
            return {
              type: "city", // Identifica que é uma cidade
              name: city.name,
              latitude: city.latitude,
              longitude: city.longitude,
              stateName: state.name, // Adiciona o nome do estado para filtragem
            };
          }
          
          return null;
        })
      );
  
      // Remove entradas nulas
      const filteredGeocodes = selectedGeocodes.filter(Boolean);
      
      // Armazena os geocodes selecionados
      setSelectedLocations(filteredGeocodes);
      console.log("Geocodes selecionados:", filteredGeocodes);
    } catch (error) {
      console.error("Erro ao focar nas localizações:", error);
    }
  };
  

  // Verifica se as coordenadas são válidas
  const isValidCoordinate = (latitude, longitude) => {
    return (
      typeof latitude === "number" &&
      typeof longitude === "number" &&
      !isNaN(latitude) &&
      !isNaN(longitude)
    );
  };

  // Função para renderizar os Círculos e Marcadores
  const renderCirclesAndMarkers = () => {
    // Identifica estados selecionados para evitar renderização duplicada
    const selectedStates = selectedLocations
      .filter((loc) => loc.type === "state")
      .map((loc) => loc.name);

    return selectedLocations.map((location, index) => {
      const { latitude, longitude, name, type, stateName } = location;

      // Se o estado for selecionado, as cidades associadas não serão renderizadas
      if (type === "city" && selectedStates.includes(stateName)) {
        return null;
      }

      // Verifica se as coordenadas são válidas antes de renderizar
      if (!isValidCoordinate(latitude, longitude)) {
        console.warn(
          `Coordenadas inválidas para ${name}:`,
          latitude,
          longitude
        );
        return null;
      }

      return (
        <React.Fragment key={index}>
          <Marker
            coordinate={{ latitude, longitude }}
            title={`Dados de ${name}`}
            description={name}
          />
          <Circle
            center={{ latitude, longitude }}
            radius={5000} // Raio do círculo
            fillColor="rgba(198, 46, 46, 0.7)" // Cor padrão do círculo
          />
        </React.Fragment>
      );
    });
  };

  // Efeito para buscar a localização do usuário
  useEffect(() => {
    _getLocation();
  }, []);

  // Função para renderizar o mapa
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={mapRegion}
        ref={mapRef}
        provider="google"
      >
        {/* Renderiza a localização do usuário */}
        {myLocation &&
          isValidCoordinate(myLocation.latitude, myLocation.longitude) && (
            <>
              <Marker
                coordinate={{
                  latitude: myLocation.latitude,
                  longitude: myLocation.longitude,
                }}
                title="Minha localização"
                description="Estou aqui"
              />
              <Circle
                center={{
                  latitude: myLocation.latitude,
                  longitude: myLocation.longitude,
                }}
                radius={1000}
                fillColor="rgba(0, 150, 255, 0.3)"
              />
            </>
          )}

       

        {/* Renderiza os Círculos e Marcadores com base nas seleções */}
        {renderCirclesAndMarkers()}
      </MapView>

      <View style={styles.titleButton}>
        <View>
          <CalendarComponent onDateRangeSelect={() => {}} />
        </View>
        <View>
          <AccordionSelect onGeocodeSelect={handleGeocodeSelect} />
        </View>
      </View>
    </View>
  );
}

// Estilos do componente
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  titleButton: {
    position: "absolute",
    top: 50,
    flexDirection: "row",
    alignItems: "center",
  },
});

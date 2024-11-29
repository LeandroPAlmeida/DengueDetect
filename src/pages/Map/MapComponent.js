import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet, View, Alert } from "react-native";
import MapView, { Circle, Marker } from "react-native-maps";
import * as Location from "expo-location";
import AccordionSelect from "./AccordionSelect";
import statesAndCities from "./StateAndCities"; // Certifique-se de usar o caminho correto

export default function Map() {
  const [myLocation, setMyLocation] = useState(null);
  const [mapRegion, setMapRegion] = useState({
    latitude: -23.55052,
    longitude: -46.633308,
    latitudeDelta: 5,
    longitudeDelta: 5,
  });
  const [selectedLocations, setSelectedLocations] = useState([]);
  const mapRef = React.useRef();

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
      const coords = location.coords;
      setMyLocation(coords);
      console.log("Localização do usuário obtida:", coords);

      setMapRegion({
        latitude: coords.latitude,
        longitude: coords.longitude,
        latitudeDelta: 5,
        longitudeDelta: 5,
      });
      mapRef.current.animateToRegion({
        latitude: coords.latitude,
        longitude: coords.longitude,
        latitudeDelta: 5,
        longitudeDelta: 5,
      });
    } catch (err) {
      console.warn("Erro ao obter localização do usuário:", err);
    }
  };

  const handleGeocodeSelect = async (selectedGeocodes) => {
    console.log("Geocodes recebidos para busca:", selectedGeocodes);
  
    if (!Array.isArray(selectedGeocodes) || selectedGeocodes.length === 0) {
      console.warn("Nenhum geocode válido selecionado.");
      return;
    }
  
    try {
      const selectedLocations = selectedGeocodes.map((geocode) => {
        // Verificar se o geocode corresponde a um estado
        const state = statesAndCities.find((entry) => entry.geocode === geocode);
        if (state) {
          console.log("Estado encontrado:", state);
          return {
            type: "state",
            name: state.state,
            latitude: state.latitude,
            longitude: state.longitude,
            nivel: state.nivel ?? null, // Garantir que `nivel` seja tratado corretamente
            casos: state.casos ?? 0,    // Garantir que `casos` seja tratado corretamente
          };
        }

        // Verificar se o geocode corresponde a uma cidade
        for (const entry of statesAndCities) {
          const city = entry.cities?.find((city) => city.geocode === geocode);
          if (city) {
            console.log("Cidade encontrada:", city);
            return {
              type: "city",
              name: city.text,
              latitude: city.latitude,
              longitude: city.longitude,
              stateName: entry.state,
              nivel: city.nivel ?? null, // Garantir que `nivel` seja tratado corretamente
              casos: city.casos ?? 0,    // Garantir que `casos` seja tratado corretamente
            };
          }
        }
  
        console.warn(`Geocode não encontrado: ${geocode}`);
        return null;
      });
  
      const filteredLocations = selectedLocations.filter(Boolean);
      setSelectedLocations(filteredLocations);
      console.log("Localizações selecionadas filtradas:", filteredLocations);
  
      // Focar na primeira localização encontrada
      if (filteredLocations.length > 0) {
        const firstLocation = filteredLocations[0];
        console.log("Focando na localização:", firstLocation);
        onFocusLocations(firstLocation, firstLocation.type);
      }
    } catch (error) {
      console.error("Erro ao processar geocodes:", error);
    }
  };  
  
  const onFocusLocations = (location, type) => {
    let delta = 7; // Ajuste do zoom para estados e cidades
    console.log(`Focando em ${type} com delta:`, delta);
  
    setMapRegion({
      latitude: location.latitude,
      longitude: location.longitude,
      latitudeDelta: delta,
      longitudeDelta: delta,
    });
  
    if (mapRef.current) {
      mapRef.current.animateToRegion({
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: delta,
        longitudeDelta: delta,
      });
    }
  };
  

  const renderCirclesAndMarkers = () => {
    return selectedLocations.map((location, index) => {
      const { latitude, longitude, name, type, casos, nivel } = location;
  
      // Mapeando cores baseadas no nível
      const fillColorMap = {
        1: "rgba(68, 138, 131, 0.7)", // Verde
        2: "rgba(208, 177, 131, 0.7)", // Amarelo
        3: "rgba(255, 112, 67, 0.7)", // Laranja
        4: "rgba(198, 46, 46, 0.7)",  // Vermelho
      };
  
      // Definindo a cor com base no nível
      const fillColor = fillColorMap[nivel] || "rgba(198, 46, 46, 0.7)"; // Default é vermelho
  
      return (
        <React.Fragment key={index}>
          <Marker
            coordinate={{ latitude, longitude }}
            title={`Dados de ${name}`}
            description={`Casos: ${casos || 0 }`} // Exibindo casos no marcador
          />
          <Circle
            center={{ latitude, longitude }}
            radius={type === "city" ? 55555 : 550000}
            fillColor={fillColor} // Cor baseada no nível
          />
        </React.Fragment>
      );
    });
  };
  

  useEffect(() => {
    console.log("Efeito inicial: buscando localização do usuário.");
    _getLocation();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={mapRegion}
        ref={mapRef}
        provider="google"
      >
        {myLocation && (
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
        {renderCirclesAndMarkers()}
      </MapView>

      <View style={styles.titleButton}>
        <View style={styles.linha}>
            <AccordionSelect onGeocodeSelect={handleGeocodeSelect} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { width: Dimensions.get("window").width, height: Dimensions.get("window").height },
  titleButton: { position: "absolute", top: 50, flexDirection: "row", alignItems: "center", justifyContent: "center", paddingLeft: 50 },
  linha: {
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 50
  },
});

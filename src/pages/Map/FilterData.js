import React, { useContext, useEffect } from "react";
import { DataContext } from "../../../DataContext";
import StateAndCities from "./StateAndCities0";
import api from "../../../api";

const FiltroDados = ({
  geocode,
  ew_start,
  ew_end,
  ey_start,
  ey_end,
  onLocationUpdate,
}) => {
  const { fetchData } = useContext(DataContext);

  const defaultLocation = {
    latitude: -23.55052,
    longitude: -46.633308,
  };

  const getCoordinatesByGeocode = (geocode) => {
    const stateOrCity = StateAndCities.find(
      (state) =>
        state.geocode === geocode ||
        state.cities.some((city) => city.geocode === geocode)
    );

    if (stateOrCity) {
      if (stateOrCity.geocode === geocode) {
        return {
          latitude: stateOrCity.latitude,
          longitude: stateOrCity.longitude,
        };
      } else {
        const city = stateOrCity.cities.find(
          (city) => city.geocode === geocode
        );
        return {
          latitude: city.latitude,
          longitude: city.longitude,
        };
      }
    } else {
      console.warn(`Geocode ${geocode} não encontrado em StateAndCities.`);
      return null;
    }
  };

  const fetchCoordinatesFromAPI = async (geocode) => {
    try {
      console.log(
        `Fazendo requisição para API externa com geocode: ${geocode}`
      );
      const response = await api.get(`geocode/api_endpoint?address=${geocode}`);
      const { lat, lng } = response.data.results[0].geometry.location;
      console.log(`Coordenadas recebidas da API: lat ${lat}, lng ${lng}`);
      return {
        latitude: lat,
        longitude: lng,
      };
    } catch (error) {
      console.error("Erro ao buscar coordenadas via API externa:", error);
      return null;
    }
  };

  useEffect(() => {
    if (
      geocode &&
      ew_start &&
      ew_end &&
      ey_start &&
      ey_end &&
      "dengue" &&
      "csv"
    ) {
      let coordinates = getCoordinatesByGeocode(geocode);

      if (!coordinates) {
        fetchCoordinatesFromAPI(geocode).then((apiCoordinates) => {
          if (apiCoordinates && onLocationUpdate) {
            console.log(
              "Atualizando localização com coordenadas da API externa"
            );
            onLocationUpdate(apiCoordinates);
          } else if (onLocationUpdate) {
            console.log("Usando localização padrão de São Paulo.");
            onLocationUpdate(defaultLocation);
          }
        });
      } else if (onLocationUpdate) {
        console.log(
          "Atualizando localização com coordenadas de StateAndCities"
        );
        onLocationUpdate(coordinates);
      }

      const parametros = {
        geocode: geocode.trim(),
        disease: "dengue",
        format: "csv",
        ew_start: ew_start.trim(),
        ew_end: ew_end.trim(),
        ey_start: ey_start.trim(),
        ey_end: ey_end.trim(),
      };

      console.log(
        "Enviando requisição para o endpoint com os parâmetros:",
        parametros
      );
      fetchData(parametros);
    } else {
      if (onLocationUpdate) {
        console.log(
          "Parâmetros incompletos. Usando localização padrão de São Paulo."
        );
        onLocationUpdate(defaultLocation);
      }
    }
  }, [geocode, ew_start, ew_end, ey_start, ey_end]);

  return null;
};

export default FiltroDados;

import React, { createContext, useState, useEffect } from "react";
import api from "./api";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async (params = {}) => {
    setLoading(true);
    try {
      const response = await api.get("alertcity", { params });
      const receivedData = response.data;
      console.log("Requisiçao: ", receivedData)

      // Verifique se receivedData é realmente um array antes de chamar .map
      if (Array.isArray(receivedData)) {
        const processedData = receivedData.map((item) => ({
          geocode: item.geocode,
          latitude: item.latitude || null,
          longitude: item.longitude || null,
          title: item.state || item.city || "Localização desconhecida",
          description: item.disease || "Sem descrição",
          ey_end: item.ey_end || null,
        }));
        console.log("ProcessedData: ", processedData)

        setData(processedData);
      } else {
        console.error("Resposta inesperada da API:", receivedData);
        setError("A resposta da API não contém os dados esperados.");
      }
    } catch (err) {
      setError("Erro ao buscar dados.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <DataContext.Provider value={{ data, loading, error, fetchData }}>
      {children}
    </DataContext.Provider>
  );
};

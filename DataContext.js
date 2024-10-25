import React, { createContext, useState } from "react";
import api from "./api";  // Supondo que o `api` seja a instância do Axios ou a função de fetch

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async (processedData = []) => {
    setLoading(true);
    setError(null); // Resetando o erro ao iniciar nova requisição
    try {
      console.log("Iniciando requisição com dados processados:", processedData);
  
      // Faz a requisição para a API
      const response = await api.post("alertcity", processedData, {
        headers: {
          'Content-Type': 'application/json',
        },
        responseType: 'blob',
      });
  
      console.log("Response completo:", response);
  
      if (response && response.data) {
        const contentType = response.headers['content-type'];
        console.log("Content-Type:", contentType);
  
        const blob = response.data;
        const responseText = await blob.text();
        console.log("Texto da resposta:", responseText);
  
        if (contentType.includes('application/json')) {
          const parsedData = JSON.parse(responseText);
          setData(parsedData);
        } else if (contentType.includes('text/csv')) {
          const rows = responseText.split('\n').map(row => row.split(','));
          setData(rows);
        } else {
          setError("Tipo de conteúdo desconhecido");
        }
      } else {
        throw new Error("Resposta inválida da API");
      }
  
    } catch (err) {
      console.error("Erro ao buscar dados:", err);
      setError("Erro ao buscar dados.");
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

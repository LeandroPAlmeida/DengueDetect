import React, { createContext, useState } from "react";
import api from "./api";  

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
      });
  
      console.log("Response completo:", response);
      console.log("Content-Type:", response.headers['content-type']);

      let responseData;
  
      // Verifica o tipo de conteúdo na resposta
      if (response.headers && response.headers['content-type'] && response.headers['content-type']) {
        const contentType = response.headers['content-type'];
        console.log("Content-Type:", contentType);
        
        // Verifica se é JSON
        if(contentType.includes('application/json')) {
          responseData = JSON.parse(response.data);         // Parse para JSON
          setData(responseData); 
          // Verifica se é CSV
        } else if (response.headers && response.headers['content-type'] && response.headers['content-type'].includes('text/csv')) {
          // Processa CSV para array de linhas e colunas
          const rows = response.data.split('\n').map(row => row.split(','));
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

import React, { useContext, useEffect } from 'react';
import { DataContext } from './DataContext';

const TestComponent = () => {
  const { data, loading, error, fetchData } = useContext(DataContext);

  useEffect(() => {
    const processedData = [
      {
        geocode: "3550308",
        title: "São Paulo",
        description: "dengue",
        ew_start: 1,
        ew_end: 50,
        ey_start: 2024,
        ey_end: 2024,
      }
    ];
    fetchData(processedData); // Faz a requisição quando o componente é montado
  }, [fetchData]);
  console.log("processed -> ", fetchData);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>Erro: {error}</div>;
  console.log("ddadta -> ", data);

  return (
    <div>
      <h1>Dados Recebidos:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      
    </div>
  );
};

export default TestComponent;

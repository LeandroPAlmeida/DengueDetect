import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { DataProvider, DataContext } from './DataProvider';
import api from './api';  // Certifique-se de importar o mock correto

// Simula o módulo `api`
jest.mock('./api');

describe('DataProvider', () => {
  it('deve enviar processedData e receber um arquivo JSON', async () => {
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

    // Simula a resposta da API com status 200 OK e um JSON válido
    api.post.mockResolvedValue({
      status: 200,
      statusText: 'OK',
      data: processedData,  // A resposta esperada da API
    });

    const wrapper = ({ children }) => <DataProvider>{children}</DataProvider>;
    const { result, waitForNextUpdate } = renderHook(() => React.useContext(DataContext), { wrapper });

    // Executa o fetchData com os dados processados
    act(() => {
      result.current.fetchData(processedData);
    });

    await waitForNextUpdate();

    // Verifica se os dados foram definidos corretamente
    expect(result.current.data).toEqual(processedData);  // Espera que os dados retornados sejam iguais aos enviados
    expect(result.current.error).toBeNull();
    expect(result.current.loading).toBe(false);
  });

  it('deve enviar processedData e receber um arquivo CSV', async () => {
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

    // Simula a resposta da API com status 200 OK e um CSV
    const mockCsvResponse = `geocode,title,description,ew_start,ew_end,ey_start,ey_end
3550308,São Paulo,dengue,1,50,2024,2024`;

    api.post.mockResolvedValue({
      status: 200,
      statusText: 'OK',
      data: mockCsvResponse,  // A resposta é um CSV
    });

    const wrapper = ({ children }) => <DataProvider>{children}</DataProvider>;
    const { result, waitForNextUpdate } = renderHook(() => React.useContext(DataContext), { wrapper });

    // Executa o fetchData com os dados processados
    act(() => {
      result.current.fetchData(processedData);
    });

    await waitForNextUpdate();

    // Verifica se os dados CSV foram processados corretamente (pode adaptar conforme a lógica de processamento de CSV)
    expect(result.current.data).toEqual([]);
    expect(result.current.error).toBeNull();
    expect(result.current.loading).toBe(false);
  });
});

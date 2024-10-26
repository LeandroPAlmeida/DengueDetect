import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { DataProvider, DataContext } from '../../DataContext';
import api from '../../api';  // Certifique-se de importar o mock correto

// Simula o módulo `api`
jest.mock('../../api');

describe('DataProvider', () => {
  it('deve enviar processedData e receber um arquivo JSON', async () => {
    const processedData = [
      {
        geocode: 3550308,
        disease: "dengue",
        format: 'json',
        ew_start: 1,
        ew_end: 50,
        ey_start: 2017,
        ey_end: 2017,
      }
    ];

    // Simula a resposta da API com JSON real
    const mockJSONResponse = {
      data_iniSE: "number",
      SE: "number",
      casos_est: "number",
      casos_est_min: "number",
      casos_est_max: "number",
      casos: "number",
      p_rt1: "number",
      p_inc100k: "number",
      Localidade_id: "number",
      nivel: "number",
      id: "number",
      versao_modelo: "data",
      tweet: "null",
      Rt: "number",
      pop: "number",
      tempmin: "null",
      umidmax: "null",
      receptivo: "number",
      transmissao: "number",
      nivel_inc: "number",
      umidmed: "null",
      umidmin: "null",
      tempmed: "null",
      tempmax: "null",
      casprov: "number",
      casprov_est: "null",
      casprov_est_min: "null",
      casprov_est_max: "null",
      casconf: "null",
      notif_accum_year: "number"
    };

    const wrapper = ({ children }) => <DataProvider>{children}</DataProvider>;
    const { result, waitFor } = renderHook(() => React.useContext(DataContext), { wrapper });

    // Simula a resposta da API com status 200 OK e um JSON válido
    api.post.mockResolvedValue({
      status: 200,
      statusText: 'OK',
      data: JSON.stringify(mockJSONResponse), // Converte o objeto para JSON string
      headers: { 'content-type': 'application/json' }
    });

    // Executa o fetchData com os dados processados
    act(() => {
      result.current.fetchData(processedData);
    });

    // Verifica se o estado foi atualizado
    await waitFor(() => {
      expect(result.current.loading).toBe(false);
      expect(result.current.data).toEqual(mockJSONResponse);
      expect(result.current.error).toBeNull();
    }, { timeout: 3000 });
  });
  
  it('deve enviar processedData e receber um arquivo CSV', async () => {
    const processedData = [
      {
        geocode: 3550308,
        disease: "dengue",
        format: 'csv',
        ew_start: 1,
        ew_end: 50,
        ey_start: 2017,
        ey_end: 2017,
      }
    ];

    // Simula a resposta da API com CSV estruturado
    const mockCsvResponse = `data_iniSE,SE,casos_est,casos_est_min,casos_est_max\n1,10,5,3,7`;

    api.post.mockResolvedValue({
      status: 200,
      statusText: 'OK',
      data: mockCsvResponse, // A resposta é um CSV
      headers: { 'content-type': 'text/csv' }
    });

    const wrapper = ({ children }) => <DataProvider>{children}</DataProvider>;
    const { result, waitFor } = renderHook(() => React.useContext(DataContext), { wrapper });

    // Executa o fetchData com os dados processados
    act(() => {
      result.current.fetchData(processedData);
    });

    // Aguarda a atualização dos dados para verificar se correspondem ao CSV mockado
    await waitFor(() => {
      expect(result.current.loading).toBe(false);
      expect(result.current.data).toEqual([
        ["data_iniSE", "SE", "casos_est", "casos_est_min", "casos_est_max"],
        ["1", "10", "5", "3", "7"]
      ]);
      expect(result.current.error).toBeNull();
    }, { timeout: 3000 });
  });
});

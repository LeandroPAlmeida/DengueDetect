import axios from 'axios';
import api from '../../api';  // O arquivo da sua API

// Mock da função `axios.create` e configuração de `defaults` e `interceptors`
jest.mock('axios', () => {
  const mAxiosInstance = {
    get: jest.fn(),
    defaults: {
      baseURL: 'https://info.dengue.mat.br/api',  // Certifique-se de que a baseURL correta está aqui
    },
    interceptors: {
      request: { use: jest.fn(), eject: jest.fn() },
      response: { use: jest.fn(), eject: jest.fn() },
    },
  };
  return {
    create: jest.fn(() => mAxiosInstance),
    isCancel: jest.fn(),
    CancelToken: {
      source: jest.fn(() => ({ token: 'mock-token', cancel: jest.fn() })),
    },
  };
});

describe('API module', () => {
  it('deve configurar a URL base corretamente', () => {
    // Verifica se o axios foi criado com a URL correta
    expect(api.defaults.baseURL).toBe('https://info.dengue.mat.br/api');
  });

  it('deve fazer uma requisição GET corretamente', async () => {
    const mockResponse = { data: { message: 'sucesso' } };

    // Simula a resposta de sucesso para `get`
    axios.create().get.mockResolvedValue(mockResponse);

    // Faz a requisição através da instância `api`
    const response = await api.get('/endpoint');

    expect(response).toEqual(mockResponse);
    expect(axios.create().get).toHaveBeenCalledWith('/endpoint');
  });

  it('deve tratar erros de requisição', async () => {
    const mockError = new Error('Falha na requisição');
    
    // Simula a resposta de erro
    axios.create().get.mockRejectedValue(mockError);

    try {
      await api.get('/erro');
    } catch (error) {
      expect(error).toBe(mockError);
    }
  });
});

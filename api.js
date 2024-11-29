import axios from "axios";

// Cria a instância do Axios
const api = axios.create({
  baseURL: "https://info.dengue.mat.br/api", // Substitua pela URL base da sua API externa
  timeout: 10000, // Tempo máximo de espera em milissegundos
  headers: { Accept: "text/csv" }, // Solicita o CSV do servidor
});

api.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Erros de resposta do servidor
      console.error("Erro na resposta da API:", error.response);
    } else if (error.request) {
      // Erros de rede ou sem resposta
      console.error("Erro na requisição:", error.request);
    } else {
      console.error("Erro ao configurar requisição:", error.message);
    }
    return Promise.reject(error);
  }
);

export default api;

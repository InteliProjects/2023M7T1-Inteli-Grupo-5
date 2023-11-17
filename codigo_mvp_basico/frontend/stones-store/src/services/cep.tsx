// service for CEP requests

import axios from "axios";
const API_URL = "https://brasilapi.com.br/api/cep/v1";

const API = axios.create({ baseURL: API_URL });

interface CEPData {
  cep: string;
  state: string;
  city: string;
  neighborhood: string;
  street: string;
  service: string;
}

// get CEP data
export const getCEP = async (cep: string) => {
  const response = await API.get(`/${cep}`);
  return response.data;
};

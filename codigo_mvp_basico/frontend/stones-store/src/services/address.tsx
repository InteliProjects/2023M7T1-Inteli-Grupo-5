// service for requests

import axios from "axios";
const API_URL = process.env.NEXT_PUBLIC_BASE_API;

const API = axios.create({ baseURL: API_URL });

export interface Address {
  id?: string;
  userId?: string;
  zipCode: string;
  country: string;
  state: string;
  city: string;
  neighborhood: string;
  street: string;
  addressLine: string;
}

// route to get all addresses
export const getAddresses = async (token: string) => {
  const response = await API.get("/addresses", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

// route to get address by id
export const getAddress = async (id: string) => {
  const response = await API.get(`/addresses/${id}`);
  return response.data;
};

// route to create new address
export const createAddress = async (address: Address) => {
  const response = await API.post("/addresses", address);
  return response.data;
};

// route to update existing address by id
export const updateAddress = async (id: string, address: Address) => {
  const response = await API.patch(`/addresses/${id}`, address);
  return response.data;
};

// route to delete address by id
export const deleteAddress = async (id: string) => {
  const response = await API.delete(`/addresses/${id}`);
  return response.data;
};

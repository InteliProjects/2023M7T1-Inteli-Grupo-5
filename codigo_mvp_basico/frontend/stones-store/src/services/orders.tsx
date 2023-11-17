// service for order requests

import axios from "axios";
import { Product } from "./products";

const API_URL = process.env.NEXT_PUBLIC_BASE_API + "/graphql";

const API = axios.create({ baseURL: API_URL });


export enum OrderStatus {
  PROCESSING = "PROCESSING",
  SHIPPING = "SHIPPING",
  DELIVERED = "DELIVERED",
}

export interface Order {
  id: string;
  userId: string;
  productId: string;
  deliveryDate: string;
  status: OrderStatus;
  product: Product;
}

// mutation to create a new order
export const createOrder = async (userId: string, productId: string, token: string) => {
  const response = await API.post("", {
    query: `
      mutation {
        createOrder(createOrderInput: {
          userId: ${userId},
          productId: ${productId}
        })
      }
    `,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data.data.createOrder;
};
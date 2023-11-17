// service for products requests

import axios from "axios";
const API_URL = process.env.NEXT_PUBLIC_BASE_API + "/graphql";

const API = axios.create({ baseURL: API_URL });

export interface Product {
  id?: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  userId: string;
}

// route to get all products
export const getProducts = async () => {
  const response = await API.post("",{
    query: `
        query {
            products {
                id
                name
                price
                image
                category
                description
                userId
            }
        }
        `,
  });
    console.log(response.data.data.products)
    return response.data;
};

// route to get product by id
export const getProduct = async (id: string) => {
  const response = await API.post("",{
    query: `
        query {
            product(id: "${id}") {
                id
                name
                price
                image
                category
                description
                userId
            }
        }
        `,
  });
  return response.data.data.product;
};

// route to create a new product (mutation)
export const createProduct = async (product: Product, token: string) => {
  const response = await API.post("", {
    query: `
      mutation {
        createProduct(createProductInput: {
          name: "${product.name}",
          price: ${product.price},
          image: "${product.image}",
          category: "${product.category}",
          description: "${product.description}",
          userId: ${product.userId}
        }) {
          id
          name
          price
          image
          category
          description
          userId
        }
      }
    `,
    
  }, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data.data.createProduct;
};
// route to update existing product by id
export const updateProduct = async (
  id: string,
  product: Product,
  token: string
) => {
  const response = await API.post("", {
    query: `
      mutation {
        updateProduct(updateProductInput: {
          id: ${id},
          name: "${product.name}",
          price: ${product.price},
          image: "${product.image}",
          category: "${product.category}",
          description: "${product.description}",
          userId: ${product.userId}
        }) {
          id
          name
          price
          image
          category
          description
          userId
        }
      }
    `
  }, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data.data.updateProduct;
};
// route to delete product by id (mutation)
export const deleteProduct = async (id: string, token: string) => {
  const response = await API.post("", {
    query: `
      mutation {
        removeProduct(id: ${id}) {
          id
        }
      }
    `
  }, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data.data.deleteProduct;
};

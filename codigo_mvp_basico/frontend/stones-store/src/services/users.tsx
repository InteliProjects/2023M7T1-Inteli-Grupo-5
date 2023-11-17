// service for user requests

import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_BASE_API + "/graphql";

const API = axios.create({ baseURL: API_URL });

export interface User {
  id?: string;
  email: string;
  name: string;
  surname: string;
  phone: string;
  password: string;
  pix: string;
  question: string;
  answer: string;
  CPF: string;
  CNPJ: string;
  opensAt: string;
  closesAt: string;
}

export interface CreateUserInput extends User {
  // Define the additional fields if necessary
}

// route to get all users
export const getUsers = async (token: string) => {
  const response = await API.post("", {
    query: `
      query {
        users {
          id
          email
          name
          surname
          phone
          password
          pix
          question
          answer
          CPF
          CNPJ
          opensAt
          closesAt
        }
      }
    `,
  }, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data.data.users;
};

// route to get user by id
export const getUser = async (id: string, token: string) => {
  const response = await API.post("", {
    query: `
      query {
        user(id: ${id}) {
          id
          email
          name
          surname
          phone
          password
          pix
          question
          answer
          CPF
          CNPJ
          opensAt
          closesAt
        }
      }
    `,
  }, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data.data;
};

// route to create new user
export const createUser = async (user: CreateUserInput) => {
  const response = await API.post("", {
    query: `
      mutation {
        createUser(createUserInput: {
          email: "${user.email}",
          name: "${user.name}",
          surname: "${user.surname}",
          phone: "${user.phone}",
          password: "${user.password}",
          pix: "${user.pix}",
          question: "${user.question}",
          answer: "${user.answer}",
          CPF: "${user.CPF}",
          CNPJ: "${user.CNPJ}",
          opensAt: "${user.opensAt}",
          closesAt: "${user.closesAt}",
        }) {
          id
          email
          name
          surname
          phone
          password
          pix
          question
          answer
          CPF
          CNPJ
          opensAt
          closesAt
        }
      }
    `,
  });

  return response.data.data.createUser;
};

// route to update existing user by id
export const updateUser = async (id: string, user: User, token: string) => {
  const response = await API.post("", {
    query: `
      mutation {
        updateUser(updateUserInput: {
          id: ${id},
          email: "${user.email}",
          name: "${user.name}",
          surname: "${user.surname}",
          phone: "${user.phone}",
          password: "${user.password}",
          pix: "${user.pix}",
          question: "${user.question}",
          answer: "${user.answer}",
          CPF: "${user.CPF}",
          CNPJ: "${user.CNPJ}",
          opensAt: "${user.opensAt}",
          closesAt: "${user.closesAt}",
        }) {
          id
          email
          name
          surname
          phone
          password
          pix
          question
          answer
          CPF
          CNPJ
          opensAt
          closesAt
        }
      }
    `,
  }, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data.data.updateUser;
};

// route to delete user by id
export const deleteUser = async (id: string, token: string) => {
  const response = await API.post("", {
    query: `
      mutation {
        removeUser(id: ${id}) {
          id
          email
          name
          surname
          phone
          password
          pix
          question
          answer
          CPF
          CNPJ
          opensAt
          closesAt
        }
      }
    `,
  }, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data.data;
};

// route to reset user's password
export const resetPassword = async (email: string, password: string) => {
  const response = await API.post("", {
    query: `
      mutation {
        changePasswordByEmail(email: "${email}", password: "${password}") {
          id
          email
          name
          surname
          phone
          pix
          question
          answer
          CPF
          CNPJ
          opensAt
          closesAt
        }
      }
    `,
  });

  return response.data.data.changePasswordByEmail;
};


// route to get products by user id
export const getUserProducts = async (userId: string, token: string) => {
  const response = await API.post("", {
    query: `
      query {
        products: productsByUser(userId: ${userId}) {
          id
          name
          category
          description
          price
          image
          userId
        }
      }
    `,
  }, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data.data;
};

// query to get all orders for a user
export const getUserOrders = async (userId: string, token: string) => {
  const response = await API.post("", {
    query: `
      query {
        orders: ordersByUser(id: ${userId}) {
          id
          userId
          productId
          deliveryDate
          status
          product {
            id
            name
            price
            image
            category
            description
            userId
          }
        }
      }
    `,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data.data;
};



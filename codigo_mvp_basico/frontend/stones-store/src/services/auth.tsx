// service for user authentication requests

import axios from "axios";
const API_URL = process.env.NEXT_PUBLIC_BASE_API + "/graphql";

const API = axios.create({ baseURL: API_URL });

export interface User {
  emailCpf: string;
  password: string;
}

export interface IAuthenticateUser {
  auth_token: string;
  user: any;
}

// Route to authenticate a user
export const authenticateUser = async (user: User) => {
  const response = await API.post("", {
    query: `
      mutation {
        authenticate(data: {
          emailCpf: "${user.emailCpf}",
          password: "${user.password}"
        }) {
          auth_token,
        }
      }
    `,
  });
  return response.data.data.authenticate;
};

// Route to validate if an email is valid
export const validateEmail = async (email: string) => {
  const response = await API.post("", {
    query: `
      mutation {
        checkEmail(data: {
          email: "${email}"
        })
      }
    `,
  });
  return response.data.data;
};

// Route to get a user's security question
export const getSecurityQuestionByEmail = async (email: string) => {
  const response = await API.post("", {
    query: `
      query {
        securityQuestion(email: "${email}")
      }
    `,
  });
  return response.data.data;
};

// Route to validate if a security question answer is correct
export const validateSecurityQuestion = async (email: string, answer: string) => {
  const response = await API.post("", {
    query: `
      mutation {
        checkSecurityAnswer(data: {
          email: "${email}",
          answer: "${answer}"
        })
      }
    `,
  });
  return response.data.data;
};

"use client";

import React, { createContext, useEffect, useReducer } from "react";
import { AxiosError } from "axios";
import { authenticateUser } from "@/services/auth";
import { User, getUser } from "@/services/users";

// Define action types
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

// Define the initial state
interface AuthState {
  authenticated: boolean;
  loading: boolean;
  token: string;
  user: User;
}

interface IChildren {
  children: React.ReactNode;
}


// Reducer function to handle state updates
const authReducer = (state: AuthState, action: any) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        authenticated: true,
        token: action.payload.token,
        user: action.payload.user,
        loading:false,
      };
    case LOGOUT:
      return {
        ...state,
        authenticated: false,
        token: "",
        user: {} as User,
        loading:false,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

// Create the authentication context
export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

// Define the context type
interface AuthContextType {
  state: AuthState;
  login: (emailCpf: string, password: string) => void;
  logout: () => void;
}

export const AuthProvider = ({ children } : IChildren ) => {
  const initialState: AuthState = {
    authenticated: false,
    token: "",
    user: {} as User,
    loading: true,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = async (emailCpf: string, password: string) => {
    dispatch({ type: "SET_LOADING", payload: true });

    try {
      const tokenResponse = await authenticateUser({ emailCpf, password });
      const userResponse = await getUser("-1", tokenResponse.auth_token);

      dispatch({
        type: LOGIN,
        payload: { token: tokenResponse.auth_token, user: userResponse.user },
      });

      // Save token and user to local storage
      localStorage.setItem("token", tokenResponse.auth_token);
      localStorage.setItem("user", JSON.stringify(userResponse.user));
    } catch (e) {
      dispatch({ type: "SET_LOADING", payload: false });
      const error = e as AxiosError;
      if (error.response?.status === 401) {
        dispatch({ type: LOGOUT });
      } else {
        throw e;
      }
    }
  };

  const logout = () => {
    dispatch({ type: "SET_LOADING", payload: true });
    // Clear token and user data from local storage
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // Dispatch logout action
    dispatch({ type: LOGOUT });
  };

  useEffect(() => {
    // Check local storage for existing authentication data
    const storageToken = localStorage.getItem("token");
    const storageUser = localStorage.getItem("user");

    if (storageToken && storageUser) {
      dispatch({
        type: LOGIN,
        payload: {
          token: storageToken,
          user: JSON.parse(storageUser),
        },
      });
    } else {
      dispatch({ type: LOGOUT });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        state,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

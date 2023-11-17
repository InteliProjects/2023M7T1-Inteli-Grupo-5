"use client";

/*
 * This script corresponds to the 'login' page route
 * */

import { use, useContext, useEffect, useRef, useState } from "react";
import { authenticateUser } from "@/services/auth";
import Link from "next/link";
import { getUser } from "@/services/users";
import LoginForm from "@/components/forms/LoginForm";
import { AuthContext } from "@/contexts/auth.context";
import LoadingElement from "@/components/LoadingElement";

export default function UserLogin() {
  const emailCpfRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const authContext = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  const handleLogin = async () => {
    const emailCpf = emailCpfRef.current?.value || "";
    const password = passwordRef.current?.value || "";
    let valid = true;

    if (!emailCpf) {
      setEmailError("Email is required");
      valid = false;
    } else {
      setEmailError("");
    }

    if (!password) {
      setPasswordError("Password is required");
      valid = false;
    } else {
      setPasswordError("");
    }

    if (valid) {
      try {
        await authContext?.login(emailCpf, password);
      } catch (error) {
        console.log(error);
        alert("Error while logging in");
      }
    }
  };

  useEffect(() => {
    if (authContext?.state.authenticated) {
      window.location.href = "/manage";
    }
  }, [authContext?.state.authenticated]);

  useEffect(() => {
    setLoading(authContext?.state.loading || false);
  }, [authContext?.state.loading]);

  return (
    <>
      {loading ? (
        <LoadingElement />
      ) : (
        <div className="flex flex-row h-screen">
          <div className="flex-1 w-1/2 h-full">
            <LoginForm
              emailCpfRef={emailCpfRef}
              passwordRef={passwordRef}
              emailError={emailError}
              passwordError={passwordError}
              handleLogin={handleLogin}
            />
          </div>
          <div
            className="flex-1 w-1/2 h-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/dunz5zfpt//f_auto,c_limit,w_1080,q_100/v1/site-stone/home/tabs/gere-boletos-sem-taxa')",
            }}
          ></div>
        </div>
      )}
    </>
  );
}

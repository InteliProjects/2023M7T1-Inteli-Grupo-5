"use client";

/*
* This script corresponds to the 'forgotPassword' route page
* */

import { useContext, useEffect, useRef, useState } from "react";
import Link from "next/link";
import {validateEmail} from "@/services/auth";
import { AuthContext } from "@/contexts/auth.context";

export default function Register() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [successMessage, setSuccessMessage] = useState({
    title: "",
    message: "",
  });

  const authContext = useContext(AuthContext);

  const emailInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (authContext?.state?.authenticated) {
      window.location.href = "/";
    }
  }
  , [authContext?.state?.authenticated]);

  const verify = async () => {
    const email = emailInput.current?.value || "";

    // Check if the email is valid
    if (!isValidEmail(email)) {
      setEmailError("Invalid email format");
      setShowError(true);
      setShowSuccess(false);
      return;
    }

    try {
      const response = await validateEmail(email);
      if (response.checkEmail === true) {
        setSuccessMessage({
          title: "Email enviado",
          message:
              "Siga as instruções no email " +
              email +
              " para prosseguir com a recuperação de senha",
        });
        setShowSuccess(true);
      } else {
        setShowError(true);
        setShowSuccess(false);
      }
    } catch (e) {
      setShowError(true);
      setShowSuccess(false);
    }
  };

  const successHandler = () => {
    const email = emailInput.current?.value || "";
    window.location.href = `/securityQuestion?email=${email}`;
    setShowSuccess(false);
  };

  const isValidEmail = (email: string) => {
    // Regular expression to validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  return (
    <div>
      <section className="relative flex justify-center flex-wrap lg:h-screen lg:items-center">
        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-2/5 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-3xl font-bold sm:text-3xl">
              Recuperação de Senha
            </h1>

            <p className="mt-4 text-gray-500">
              Digite o email de sua conta e nós enviaremos um link de recuperação de senha pra você.
            </p>
          </div>

          {showError && (
            <div className="bg-red-500 text-white p-4 rounded-lg mt-4">
              <p>Um erro ocorreu. Por favor tente novamente mais tarde.</p>
            </div>
          )}

          <div className="mx-auto mb-0 mt-8 max-w-md space-y-4">

            <div>
              <div className="relative">
                <label className="text-sm font-bold text-stone-dark-500 tracking-wide">
                  Email
                </label>
                <input
                    type="text"
                    className={`w-full border-2 border-solid border-stone-dark-500 rounded-lg p-4 pe-12 text-sm shadow-sm ${
                        emailError ? "border-red-500" : ""
                    }`}
                    placeholder="Ex: nome.sobrenome@gmail.com"
                    id="email"
                    ref={emailInput}
                />
                {emailError && <p className="text-red-500">{emailError}</p>}
              </div>
            </div>

            <div className="flex items-center flex-col justify-between h-28">
              <button onClick={verify} className="inline-block w-full rounded-full bg-stone-custom-500 mt-3 px-5 py-4 text-sm font-medium text-white">
                Validar email
              </button>
            </div>
            <div className="flex items-center flex-col justify-between h-28">
            <Link href={"/login"}> Voltar para a tela login</Link>
            </div>
          </div>
        </div>

        
      </section>

      {showSuccess && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">{successMessage.title}</h2>
            <p>{successMessage.message}</p>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4"
              onClick={() => successHandler()}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

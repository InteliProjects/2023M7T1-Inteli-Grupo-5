"use client";

/*
* This script corresponds to the 'redifinePassword' route page
* */

import { useRef, useState } from "react";
import {resetPassword} from "@/services/users";
import {useSearchParams} from "next/navigation";

export default function Register() {
  const searchParams = useSearchParams()
  const email = searchParams.get('email')

  const [showSuccess, setShowSuccess] = useState(false);

  const password = useRef<HTMLInputElement>(null)
  const confirmedPassword = useRef<HTMLInputElement>(null)

  const [successMessage, setSuccessMessage] = useState({
    title: "",
    message: "",
  });
  const [showError, setShowError] = useState(false)

  const sendNewPassword = async () => {
    try {
      
      const passwordValue = password.current?.value || "";
      const confirmedPasswordValue = confirmedPassword.current?.value || "";

      if (passwordValue !== confirmedPasswordValue) {
        throw new Error(`Senhas não são iguais!`);
      }

      const response = await resetPassword(email || "", confirmedPasswordValue)

      if(response.email == email) {

        setSuccessMessage({
          title: "Senha redefinida com sucesso!",
          message: "Clique em fechar para ser redirecionado à tela de login."
        })

        setShowSuccess(true);
        setShowError(false);
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
    setShowSuccess(false);
    window.location.href = `/login`;
  }

  return (
    <div>
      <section className="relative flex justify-center flex-wrap lg:h-screen lg:items-center">
        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-2/5 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-3xl font-bold sm:text-3xl">
              Redefinição de Senha
            </h1>

            <p className="mt-4 text-gray-500">
              Insira uma nova senha e confirme-a.
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
                  Senha
                </label>
                <input
                  type="password"
                  className="w-full border-2 border-solid border-stone-dark-500 rounded-lg p-4 pe-12 text-sm shadow-sm"
                  placeholder="******"
                  ref={password}
                />
              </div>
            </div>
            <div>
              <div className="relative">
                <label className="text-sm font-bold text-stone-dark-500 tracking-wide">
                  Confirmação da senha
                </label>
                <input
                  type="password"
                  className="w-full border-2 border-solid border-stone-dark-500 rounded-lg p-4 pe-12 text-sm shadow-sm"
                  placeholder="******"
                  ref={confirmedPassword}
                />
              </div>
            </div>

            <div className="flex items-center flex-col justify-between h-28">
              <button onClick={sendNewPassword} className="inline-block w-full rounded-full bg-stone-custom-500 mt-3 px-5 py-4 text-sm font-medium text-white">
                Redefinir senha
              </button>
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

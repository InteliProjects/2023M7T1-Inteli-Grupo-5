"use client";
/*
* This script corresponds to the 'securityQuestion' route page (validate security question)
*/


import { useParams } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import {getSecurityQuestionByEmail, validateSecurityQuestion} from "@/services/auth";
import { useSearchParams } from 'next/navigation'

export default function Register() {
  const searchParams = useSearchParams()
  const email = searchParams.get('email')

  const [showSuccess, setShowSuccess] = useState(false);
  const [securityQuestion, setSecurityQuestion] = useState("Security Question...");
  const [responseError, setResponseError] = useState("");
  const responseRef = useRef<HTMLInputElement>(null)
  const [successMessage, setSuccessMessage] = useState({
    title: "",
    message: "",
  });
  const [showError, setShowError] = useState(false)

  useEffect(() => {
    setSecurityQuestion("");
    const loadSecurityQuestion = async () => {
      const response = await getSecurityQuestionByEmail(email || "");
      setSecurityQuestion(response.securityQuestion);
    }

    loadSecurityQuestion();
  }, []);

  const confirmSecurityQuestion = async () => {
    try {
      const responseValue = responseRef.current?.value || "";

      if (!responseValue) {
        setResponseError("Please provide a response");
        return;
      } else {
        setResponseError("");
      }

      const response = await validateSecurityQuestion(email || "", responseValue);
      const isCorrect = response.checkSecurityAnswer;

      if (isCorrect) {

        setSuccessMessage({
          title: "Resposta Validada!",
          message: "Clique em fechar para prosseguir."
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
    window.location.href = `/redefinePassword?email=${email}`;
  }


  return (
    <div>
      <section className="relative flex justify-center flex-wrap lg:h-screen lg:items-center">
        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-2/5 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-3xl font-bold sm:text-3xl">
              Verificação de segurança
            </h1>

            <p className="mt-4 text-gray-500">
              Insira a resposta da pergunta de segurança cadastrada
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
                  Pergunta: <br></br>
                </label>
                <label className="mt-4 text-gray-500">
                  {securityQuestion}
                </label>
              </div>
            </div>
            <div>
              <div className="relative">
                <label className="text-sm font-bold text-stone-dark-500 tracking-wide">
                  Resposta
                </label>
                <input
                    type="text"
                    className={`w-full border-2 border-solid border-stone-dark-500 rounded-lg p-4 pe-12 text-sm shadow-sm ${responseError ? 'border-red-500' : ''}`}
                    ref={responseRef}
                />
                {responseError && <p className="text-red-500">{responseError}</p>}
              </div>
            </div>

            <div className="flex items-center flex-col justify-between h-28">
              <button onClick={confirmSecurityQuestion} className="inline-block w-full rounded-full bg-stone-custom-500 mt-3 px-5 py-4 text-sm font-medium text-white">
                Verificar
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

import React from "react";

interface RegistrationFormProps {
  nameRef: React.RefObject<HTMLInputElement>;
  surnameRef: React.RefObject<HTMLInputElement>;
  emailRef: React.RefObject<HTMLInputElement>;
  passwordRef: React.RefObject<HTMLInputElement>;
  phoneRef: React.RefObject<HTMLInputElement>;
  pixCodeRef: React.RefObject<HTMLInputElement>;
  questionRef: React.RefObject<HTMLInputElement>;
  answerRef: React.RefObject<HTMLInputElement>;
  cpfRef: React.RefObject<HTMLInputElement>;
  cnpjRef: React.RefObject<HTMLInputElement>;
  opensAtRef: React.RefObject<HTMLInputElement>;
  closesAtRef: React.RefObject<HTMLInputElement>;
  zipCodeRef: React.RefObject<HTMLInputElement>;
  countryRef: React.RefObject<HTMLInputElement>;
  stateRef: React.RefObject<HTMLInputElement>;
  cityRef: React.RefObject<HTMLInputElement>;
  neighborhoodRef: React.RefObject<HTMLInputElement>;
  streetRef: React.RefObject<HTMLInputElement>;
  addressLineRef: React.RefObject<HTMLInputElement>;
  nameError: string;
  surnameError: string;
  emailError: string;
  passwordError: string;
  phoneError: string;
  pixCodeError: string;
  questionError: string;
  answerError: string;
  cpfError: string;
  cnpjError: string;
  opensAtError: string;
  closesAtError: string;
  zipCodeError: string;
  countryError: string;
  stateError: string;
  cityError: string;
  neighborhoodError: string;
  streetError: string;
  addressLineError: string;
  handleRegister: () => void;
  getCepData: (cep: string) => void;
}
function RegistrationForm({
  nameRef,
  surnameRef,
  emailRef,
  passwordRef,
  phoneRef,
  pixCodeRef,
  questionRef,
  answerRef,
  cpfRef,
  cnpjRef,
  opensAtRef,
  closesAtRef,
  zipCodeRef,
  countryRef,
  stateRef,
  cityRef,
  neighborhoodRef,
  streetRef,
  addressLineRef,
  nameError,
  surnameError,
  emailError,
  passwordError,
  phoneError,
  pixCodeError,
  questionError,
  answerError,
  cpfError,
  cnpjError,
  opensAtError,
  closesAtError,
  zipCodeError,
  countryError,
  stateError,
  cityError,
  neighborhoodError,
  streetError,
  addressLineError,
  handleRegister,
  getCepData,
}: RegistrationFormProps) {
  return (
    <div style={{ flex: 1, borderRadius: "5px" }} className="p-10">
      <h1
        style={{ fontWeight: "bold", fontSize: "24px", marginBottom: "20px" }}
      >
        Criar conta
      </h1>

      <div>
        <div className="flex gap-4 mb-4">
          <div className="flex-1">
            <p className="font-bold text-sm">Nome</p>
            <input
              type="text"
              className={`w-full border-2 border-solid border-stone-dark-500 rounded-lg p-4 pe-12 text-sm shadow-sm ${
                nameError ? "border-red-500" : ""
              }`}
              placeholder=""
              ref={nameRef}
            />
            {nameError && <p className="text-red-500">{nameError}</p>}
          </div>
          <div className="flex-1">
            <p className="font-bold text-sm">Sobrenome</p>
            <input
              type="text"
              className={`w-full border-2 border-solid border-stone-dark-500 rounded-lg p-4 pe-12 text-sm shadow-sm ${
                surnameError ? "border-red-500" : ""
              }`}
              placeholder=""
              ref={surnameRef}
            />
            {surnameError && <p className="text-red-500">{surnameError}</p>}
          </div>
        </div>

        <p className="font-bold text-sm">Email</p>
        <input
          type="email"
          className={`w-full border-2 border-solid border-stone-dark-500 rounded-lg p-4 pe-12 text-sm shadow-sm mb-4 ${
            emailError ? "border-red-500" : ""
          }`}
          placeholder=""
          formNoValidate
          ref={emailRef}
        />
        {emailError && <p className="text-red-500">{emailError}</p>}

        <p className="font-bold text-sm">Senha</p>
        <input
          type="password"
          className={`w-full border-2 border-solid border-stone-dark-500 rounded-lg p-4 pe-12 text-sm shadow-sm mb-4 ${
            passwordError ? "border-red-500" : ""
          }`}
          placeholder=""
          ref={passwordRef}
        />
        {passwordError && <p className="text-red-500">{passwordError}</p>}

        <div className="flex gap-4 mb-4">
          <div className="flex-1">
            <p className="font-bold text-lg">Pergunta de Segurança</p>
            <input
              type="text"
              className={`w-full border-2 border-solid border-stone-dark-500 rounded-lg p-4 pe-12 text-sm shadow-sm ${
                questionError ? "border-red-500" : ""
              }`}
              placeholder=""
              ref={questionRef}
            />
            {questionError && <p className="text-red-500">{questionError}</p>}
          </div>
          <div className="flex-1">
            <p className="font-bold text-lg">Resposta</p>
            <input
              type="text"
              className={`w-full border-2 border-solid border-stone-dark-500 rounded-lg p-4 pe-12 text-sm shadow-sm ${
                answerError ? "border-red-500" : ""
              }`}
              placeholder=""
              ref={answerRef}
            />
            {answerError && <p className="text-red-500">{answerError}</p>}
          </div>
        </div>

        <div className="flex gap-4 mb-4">
          <div className="flex-1">
            <p className="font-bold text-lg">Telefone</p>
            <input
              type="tel"
              className={`w-full border-2 border-solid border-stone-dark-500 rounded-lg p-4 pe-12 text-sm shadow-sm ${
                phoneError ? "border-red-500" : ""
              }`}
              placeholder=""
              ref={phoneRef}
            />
            {phoneError && <p className="text-red-500">{phoneError}</p>}
          </div>
          <div className="flex-1">
            <p className="font-bold text-lg">Código PIX</p>
            <input
              type="text"
              className={`w-full border-2 border-solid border-stone-dark-500 rounded-lg p-4 pe-12 text-sm shadow-sm ${
                pixCodeError ? "border-red-500" : ""
              }`}
              placeholder=""
              ref={pixCodeRef}
            />
            {pixCodeError && <p className="text-red-500">{pixCodeError}</p>}
          </div>
        </div>

        <div className="flex gap-4 mb-4">
          <div className="flex-1">
            <p className="font-bold text-lg">CPF</p>
            <input
              type="tel"
              className={`w-full border-2 border-solid border-stone-dark-500 rounded-lg p-4 pe-12 text-sm shadow-sm ${
                cpfError ? "border-red-500" : ""
              }`}
              placeholder=""
              ref={cpfRef}
            />
            {cpfError && <p className="text-red-500">{cpfError}</p>}
          </div>

          <div className="flex-1">
            <p className="font-bold text-lg">CNPJ</p>
            <input
              type="text"
              className={`w-full border-2 border-solid border-stone-dark-500 rounded-lg p-4 pe-12 text-sm shadow-sm ${
                cnpjError ? "border-red-500" : ""
              }`}
              placeholder=""
              ref={cnpjRef}
            />
            {cnpjError && <p className="text-red-500">{cnpjError}</p>}
          </div>
        </div>

        <div className="flex gap-4 mb-4">
          <div className="flex-1">
            <p className="font-bold text-lg">Início do expediente</p>
            <input
              type="tel"
              className={`w-full border-2 border-solid border-stone-dark-500 rounded-lg p-4 pe-12 text-sm shadow-sm ${
                opensAtError ? "border-red-500" : ""
              }`}
              placeholder=""
              ref={opensAtRef}
            />
            {opensAtError && <p className="text-red-500">{opensAtError}</p>}
          </div>

          <div className="flex-1">
            <p className="font-bold text-lg">Fim do expediente</p>
            <input
              type="text"
              className={`w-full border-2 border-solid border-stone-dark-500 rounded-lg p-4 pe-12 text-sm shadow-sm ${
                closesAtError ? "border-red-500" : ""
              }`}
              placeholder=""
              ref={closesAtRef}
            />
            {closesAtError && <p className="text-red-500">{closesAtError}</p>}
          </div>
        </div>

        <div className="flex gap-4 mb-4">
          <div className="flex-1">
            <p className="font-bold text-lg">CEP</p>
            <input
              type="text"
              className={`w-full border-2 border-solid border-stone-dark-500 rounded-lg p-4 pe-12 text-sm shadow-sm ${
                zipCodeError ? "border-red-500" : ""
              }`}
              placeholder=""
              ref={zipCodeRef}
              onBlur={getCepData}
            />
            {zipCodeError && <p className="text-red-500">{zipCodeError}</p>}
          </div>
          <div className="flex-1">
            <p className="font-bold text-lg">Pais</p>
            <input
              type="text"
              className={`w-full border-2 border-solid border-stone-dark-500 rounded-lg p-4 pe-12 text-sm shadow-sm ${
                countryError ? "border-red-500" : ""
              }`}
              placeholder=""
              ref={countryRef}
            />
            {countryError && <p className="text-red-500">{countryError}</p>}
          </div>
        </div>

        <div className="flex gap-4 mb-4">
          <div className="flex-1">
            <p className="font-bold text-lg">Estado</p>
            <input
              type="tel"
              className={`w-full border-2 border-solid border-stone-dark-500 rounded-lg p-4 pe-12 text-sm shadow-sm ${
                stateError ? "border-red-500" : ""
              }`}
              placeholder=""
              ref={stateRef}
            />
            {stateError && <p className="text-red-500">{stateError}</p>}
          </div>

          <div className="flex-1">
            <p className="font-bold text-lg">Cidade</p>
            <input
              type="text"
              className={`w-full border-2 border-solid border-stone-dark-500 rounded-lg p-4 pe-12 text-sm shadow-sm ${
                cityError ? "border-red-500" : ""
              }`}
              placeholder=""
              ref={cityRef}
            />
            {cityError && <p className="text-red-500">{cityError}</p>}
          </div>
        </div>

        <div className="flex gap-4 mb-4">
          <div className="flex-1">
            <p className="font-bold text-lg">Bairro</p>
            <input
              type="tel"
              className={`w-full border-2 border-solid border-stone-dark-500 rounded-lg p-4 pe-12 text-sm shadow-sm ${
                neighborhoodError ? "border-red-500" : ""
              }`}
              placeholder=""
              ref={neighborhoodRef}
            />
            {neighborhoodError && (
              <p className="text-red-500">{neighborhoodError}</p>
            )}
          </div>

          <div className="flex-1">
            <p className="font-bold text-lg">Rua</p>
            <input
              type="text"
              className={`w-full border-2 border-solid border-stone-dark-500 rounded-lg p-4 pe-12 text-sm shadow-sm ${
                streetError ? "border-red-500" : ""
              }`}
              placeholder=""
              ref={streetRef}
            />
            {streetError && <p className="text-red-500">{streetError}</p>}
          </div>
        </div>

        <div className="flex gap-4 mb-4">
          <div className="flex-1">
            <p className="font-bold text-lg">Numero</p>
            <input
              type="text"
              className={`w-full border-2 border-solid border-stone-dark-500 rounded-lg p-4 pe-12 text-sm shadow-sm ${
                addressLineError ? "border-red-500" : ""
              }`}
              placeholder=""
              ref={addressLineRef}
            />
            {addressLineError && (
              <p className="text-red-500">{addressLineError}</p>
            )}
          </div>
        </div>
      </div>
      <button
        onClick={handleRegister}
        style={{
          backgroundColor: "#00A868",
          color: "white",
          borderRadius: "20px",
          width: "100%",
          padding: "10px",
          cursor: "pointer",
          border: "none",
        }}
      >
        Cadastrar
      </button>
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <p>
          Já tem uma conta?{" "}
          <a
            style={{ color: "#007BFF", textDecoration: "underline" }}
            className="cursor-pointer"
            href="/login"
          >
            Fazer login
          </a>
        </p>
      </div>
    </div>
  );
}

export default RegistrationForm;

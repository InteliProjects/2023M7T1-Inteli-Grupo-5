import React from "react";

interface EditUserInfoFormProps {
  currentUser: any;
  nameRef: React.RefObject<HTMLInputElement>;
  setNameError: React.Dispatch<React.SetStateAction<string>>;
  surnameRef: React.RefObject<HTMLInputElement>;
  setSurnameError: React.Dispatch<React.SetStateAction<string>>;
  emailRef: React.RefObject<HTMLInputElement>;
  setEmailError: React.Dispatch<React.SetStateAction<string>>;
  passwordRef: React.RefObject<HTMLInputElement>;
  setPasswordError: React.Dispatch<React.SetStateAction<string>>;
  phoneRef: React.RefObject<HTMLInputElement>;
  setPhoneError: React.Dispatch<React.SetStateAction<string>>;
  pixCodeRef: React.RefObject<HTMLInputElement>;
  setPixCodeError: React.Dispatch<React.SetStateAction<string>>;
  questionRef: React.RefObject<HTMLInputElement>;
  setQuestionError: React.Dispatch<React.SetStateAction<string>>;
  answerRef: React.RefObject<HTMLInputElement>;
  setAnswerError: React.Dispatch<React.SetStateAction<string>>;
  handleUserUpdate: () => void;
  handleDeleteUserAccount: () => void;
  handleCancel: () => void;
  nameError: string;
  surnameError: string;
  emailError: string;
  passwordError: string;
  phoneError: string;
  pixCodeError: string;
  questionError: string;
  answerError: string;
}

export default function EditUserInfoForm({
  currentUser,
  nameRef,
  setNameError,
  surnameRef,
  setSurnameError,
  emailRef,
  setEmailError,
  passwordRef,
  setPasswordError,
  phoneRef,
  setPhoneError,
  pixCodeRef,
  setPixCodeError,
  questionRef,
  setQuestionError,
  answerRef,
  setAnswerError,
  handleUserUpdate,
  handleDeleteUserAccount,
  handleCancel,
  nameError,
  surnameError,
  emailError,
  passwordError,
  phoneError,
  pixCodeError,
  questionError,
  answerError,
}: EditUserInfoFormProps) {
  return (
    <div>
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
      </div>
      <button
        onClick={handleUserUpdate}
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
        Confirmar alterações
      </button>
      <button
        onClick={handleCancel}
        style={{
          backgroundColor: "#505050",
          color: "white",
          borderRadius: "20px",
          width: "50%",
          padding: "10px",
          cursor: "pointer",
          border: "none",
        }}
      >
        Cancelar
      </button>
      <button
        onClick={handleDeleteUserAccount}
        style={{
          backgroundColor: "#FF0000",
          color: "white",
          borderRadius: "20px",
          width: "50%",
          padding: "10px",
          cursor: "pointer",
          border: "none",
        }}
      >
        Deletar a conta
      </button>
    </div>
  );
}

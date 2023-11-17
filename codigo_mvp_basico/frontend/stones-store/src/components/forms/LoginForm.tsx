import Link from "next/link";
import React from "react";

interface LoginFormProps {
  emailCpfRef: React.RefObject<HTMLInputElement>;
  passwordRef: React.RefObject<HTMLInputElement>;
  emailError: string;
  passwordError: string;
  handleLogin: () => void;
}

function LoginForm({
  emailCpfRef,
  passwordRef,
  emailError,
  passwordError,
  handleLogin,
}: LoginFormProps) {
  return (
    <div className="px-10 xl:px-40 py-12 flex justify-center flex-col h-full">
      <h1 className="text-3xl font-bold sm:text-3xl mb-4">Login do Usuário</h1>
      <div>
        <label
          htmlFor="userName"
          className="text-sm font-bold text-stone-dark-500 tracking-wide"
        >
          Email ou CPF do Usuário
        </label>
        <input
          type="text"
          placeholder="email"
          className="w-full border-2 border-solid border-stone-dark-500 rounded-lg p-4 pe-12 text-sm shadow-sm"
          ref={emailCpfRef}
        />
        {emailError && <p className="text-red-500">{emailError}</p>}
      </div>

      <div>
        <label
          htmlFor="password"
          className="text-sm font-bold text-stone-dark-500 tracking-wide"
        >
          Senha
        </label>
        <input
          type="password"
          placeholder="senha"
          className="w-full border-2 border-solid border-stone-dark-500 rounded-lg p-4 pe-12 text-sm shadow-sm"
          ref={passwordRef}
        />
        {passwordError && <p className="text-red-500">{passwordError}</p>}
      </div>

      <div>
        <button
          onClick={handleLogin}
          className="inline-block w-full rounded-full bg-stone-custom-500 mt-3 px-5 py-4 text-sm font-medium text-white"
        >
          Login
        </button>
      </div>
      <div className="flex items-center flex-col justify-between p-5">
        <Link href={"/forgotPassword"}>Esqueci minha senha</Link>
      </div>
      <div className="flex items-center flex-col justify-between">
        <Link href={"/userRegister"}>
          Ainda não tenho um usuário | Cadastrar
        </Link>
      </div>
    </div>
  );
}

export default LoginForm;

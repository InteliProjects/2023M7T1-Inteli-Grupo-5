"use client";

import { AuthContext } from "@/contexts/auth.context";
import { useState, useEffect, useContext } from "react";

const pages = [{ text: "Página Inicial", href: "/" }];

const productPages = [
  { text: "Adicionar produtos/serviços", href: "/productRegister" },
  { text: "Gerenciar produtos/serviços", href: "/manage" },
];

export default function Navbar() {
  const [productNavActive, setProductNavActive] = useState(false);
  const [userNavActive, setUserNavActive] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    setIsLoggedIn(authContext?.state.authenticated || false);
  }, [authContext?.state.authenticated]);

  const handleLogout = () => {
    authContext?.logout();
    setIsLoggedIn(false);
    window.location.href = "/login";
  };

  return (
    <nav className="shadow bg-stone-custom-500">
      <div className="container flex items-center justify-center p-6 mx-auto text-white capitalize">
        {pages.map((page, idx) => (
          <a
            key={idx}
            href={page.href}
            className="text-white font-bold transition-colors duration-300 transform border-b-2 border-transparent transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-gray-100 mx-1.5 sm:mx-6"
          >
            {page.text}
          </a>
        ))}
        {isLoggedIn ? (
          <div className="relative flex justify-between">
            <div>
              <button
                onClick={() => setProductNavActive(!productNavActive)}
                className="text-white font-bold transition-colors duration-300 transform border-b-2 border-transparent transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-gray-100 mx-1.5 sm:mx-6"
              >
                Products
              </button>
              {productNavActive && (
                <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
                  {productPages.map((page, idx) => (
                    <a
                      key={idx}
                      href={page.href}
                      className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
                    >
                      {page.text}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <div>
              <button
                onClick={() => setUserNavActive(!userNavActive)}
                className="text-white font-bold transition-colors duration-300 transform border-b-2 border-transparent transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-gray-100 mx-1.5 sm:mx-6"
              >
                User
              </button>
              {userNavActive && (
                <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
                  <a
                    href="/userEditInfo"
                    className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
                  >
                    Editar informações
                  </a>
                  <a
                    href="/orders"
                    className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
                  >
                    Meus pedidos
                  </a>
                  <button
                    onClick={handleLogout}
                    className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white w-full text-left"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        ) : (
          <a
            href="/login"
            className="text-white font-bold transition-colors duration-300 transform border-b-2 border-transparent transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-gray-100 mx-1.5 sm:mx-6"
          >
            Login
          </a>
        )}
      </div>
    </nav>
  );
}

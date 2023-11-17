"use client";

import LoadingElement from "@/components/LoadingElement";
/*
 * This script corresponds to the 'manage' route page (manage products)
 * */

import ProductCard from "@/components/ProductCard";
import { AuthContext } from "@/contexts/auth.context";
import {
  Product,
  deleteProduct,
  getProducts,
  updateProduct,
} from "@/services/products";
import { getUserProducts } from "@/services/users";
import { AxiosError } from "axios";
import { useContext, useEffect, useRef, useState } from "react";

export default function Register() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState({
    title: "",
    message: "",
  });
  const [warningDeleteModal, setWarningDeleteModal] = useState(false);
  const [showError, setShowError] = useState(false);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState(
    "https://images.unsplash.com/photo-1657216328535-e981d223dee3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=715&q=80"
  );
  const [currentProductId, setCurrentProductId] = useState("-1");

  const [products, setProducts] = useState<Product[]>([]);

  const [nameError, setNameError] = useState("");
  const [categoryError, setCategoryError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [priceError, setPriceError] = useState("");
  const [imageError, setImageError] = useState("");

  const [loading, setLoading] = useState(true);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    if (!authContext?.state.authenticated && !loading) {
      window.location.href = "/login";
    } else if (authContext?.state.authenticated) {
      const fetchProducts = async () => {
        try {
          const token = authContext?.state.token || "";
          const user = authContext?.state.user;
          const response = await getUserProducts(user?.id || "-1", token);
          setProducts(response.products);
        } catch (error) {
          const e = error as AxiosError;
          if (e.response?.status === 401) {
            authContext?.logout();
          }
        }
      };
      fetchProducts();
    }
  }, [loading]);

  useEffect(() => {
    setLoading(authContext?.state.loading || false);
  }, [authContext?.state.loading]);

  function isValidUrl(url: string) {
    try {
      new URL(url);
      return true;
    } catch (error) {
      return false;
    }
  }

  useEffect(() => {
    if (currentProductId === "-1") return;
    const product = products.find((p) => String(p.id) === currentProductId);
    if (!product) return;
    setName(product.name);
    setCategory(product.category);
    setPrice(product.price);
    setImage(product.image);
    setDescription(product.description);
  }, [currentProductId]);

  const updateCurrentProduct = async () => {
    // Clear previous error messages
    setNameError("");
    setCategoryError("");
    setDescriptionError("");
    setPriceError("");
    setImageError("");

    // Validation checks
    let hasValidationError = false;
    if (!name) {
      setNameError("Name is required");
      hasValidationError = true;
    }
    if (!category) {
      setCategoryError("Category is required");
      hasValidationError = true;
    }
    if (!description) {
      setDescriptionError("Description is required");
      hasValidationError = true;
    }
    if (price <= 0) {
      setPriceError("Price must be greater than 0");
      hasValidationError = true;
    }
    if (!image) {
      setImageError("Image link is required");
      hasValidationError = true;
    }
    if (!isValidUrl(image)) {
      setImageError("Invalid image URL");
      hasValidationError = true;
    }

    if (hasValidationError) {
      return;
    }
    try {
      const token = authContext?.state.token || "";
      const response = await updateProduct(
        currentProductId,
        {
          id: currentProductId,
          name,
          category,
          price,
          image,
          description,
          userId: "0",
        },
        token
      );

      setSuccessMessage({
        title: "Produto atualizado!",
        message: "O produto foi atualizado com sucesso!",
      });

      setShowSuccess(true);
      setShowError(false);
    } catch (error) {
      setShowError(true);
      setShowSuccess(false);
      const e = error as AxiosError;
      // check for invalid permission error
      if (e.response?.status === 401) {
        authContext?.logout();
      }
    }
  };

  const removeCurrentProduct = async () => {
    try {
      setWarningDeleteModal(false);

      const token = authContext?.state.token || "";
      const response = await deleteProduct(currentProductId, token);

      setSuccessMessage({
        title: "Produto removido!",
        message: "O produto foi removido com sucesso!",
      });
      setShowSuccess(true);
      setShowError(false);
    } catch (error) {
      const e = error as AxiosError;
      // check for invalid permission error
      if (e.response?.status === 401) {
        authContext?.logout();
      }
      setShowError(true);
      setShowSuccess(false);
    }
  };

  return (
    <>
      {loading ? (
        <LoadingElement />
      ) : (
    <div>
      <section className="relative flex flex-wrap lg:h-screen lg:items-center">
        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-2/5 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-3xl font-bold sm:text-3xl">
              Modifique um Produto
            </h1>

            <p className="mt-4 text-gray-500">
              Selecione um produto para modificar
            </p>
          </div>

          {showError && (
            <div className="bg-red-500 text-white p-4 rounded-lg mt-4">
              <p>Um erro ocorreu. Por favor tente novamente mais tarde.</p>
            </div>
          )}

          <div className="mx-auto mb-0 mt-8 max-w-md space-y-4">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
              Select an option
            </label>
            <select
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => {
                setCurrentProductId(e.target.value);
              }}
            >
              <option selected>Selecione um produto</option>
              {products.map((product, idx) => (
                <option key={product.id} value={product.id}>
                  {product.id} - {product.name}
                </option>
              ))}
            </select>
            {/* Name input */}
            <div>
              <div className="relative">
                <label className="text-sm font-bold text-stone-dark-500 tracking-wide">
                  Nome do Produto
                </label>
                <input
                  type="text"
                  className={`w-full border-2 border-solid border-stone-dark-500 rounded-lg p-4 pe-12 text-sm shadow-sm ${
                    nameError ? "border-red-500" : ""
                  }`}
                  placeholder="Smart Card Machine"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    setNameError(e.target.value ? "" : "Name is required");
                  }}
                />
              </div>
              {Boolean(nameError) && (
                <p className="text-red-500">{nameError}</p>
              )}
            </div>

            {/* Category input */}
            <div>
              <div className="relative">
                <label className="text-sm font-bold text-stone-dark-500 tracking-wide">
                  Categoria
                </label>
                <input
                  type="text"
                  className={`w-full border-2 border-solid border-stone-dark-500 rounded-lg p-4 pe-12 text-sm shadow-sm ${
                    categoryError ? "border-red-500" : ""
                  }`}
                  placeholder="Tecnologia"
                  value={category}
                  onChange={(e) => {
                    setCategory(e.target.value);
                    setCategoryError(
                      e.target.value ? "" : "Category is required"
                    );
                  }}
                />
              </div>
              {Boolean(categoryError) && (
                <p className="text-red-500">{categoryError}</p>
              )}
            </div>

            {/* Description input */}
            <div>
              <div className="relative">
                <label className="text-sm font-bold text-stone-dark-500 tracking-wide">
                  Descrição do Produto
                </label>
                <input
                  type="text"
                  className={`w-full border-2 border-solid border-stone-dark-500 rounded-lg p-4 pe-12 text-sm shadow-sm ${
                    descriptionError ? "border-red-500" : ""
                  }`}
                  placeholder="Máquina de cartão de crédito"
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                    setDescriptionError(
                      e.target.value ? "" : "Description is required"
                    );
                  }}
                />
              </div>
              {Boolean(descriptionError) && (
                <p className="text-red-500">{descriptionError}</p>
              )}
            </div>

            {/* Price input */}
            <div>
              <div className="relative">
                <label className="text-sm font-bold text-stone-dark-500 tracking-wide">
                  Preço R$
                </label>
                <input
                  type="number"
                  className={`w-full border-2 border-solid border-stone-dark-500 rounded-lg p-4 pe-12 text-sm shadow-sm ${
                    priceError ? "border-red-500" : ""
                  }`}
                  placeholder="999.99"
                  value={price}
                  onChange={(e) => {
                    setPrice(Number(e.target.value || 0));
                    setPriceError(
                      Number(e.target.value || 0) > 0
                        ? ""
                        : "Price must be greater than 0"
                    );
                  }}
                />
              </div>
              {Boolean(priceError) && (
                <p className="text-red-500">{priceError}</p>
              )}
            </div>

            {/* Image input */}
            <div>
              <div className="relative">
                <label className="text-sm font-bold text-stone-dark-500 tracking-wide">
                  Link da Imagem
                </label>
                <input
                  type="url"
                  className={`w-full border-2 border-solid border-stone-dark-500 rounded-lg p-4 pe-12 text-sm shadow-sm ${
                    imageError ? "border-red-500" : ""
                  }`}
                  placeholder="https://www.linkdaimagem.com/imagem.png"
                  value={image}
                  onChange={(e) => {
                    setImage(e.target.value);
                    setImageError(
                      e.target.value ? "" : "Image link is required"
                    );
                  }}
                />
              </div>
              {Boolean(imageError) && (
                <p className="text-red-500">{imageError}</p>
              )}
            </div>

            <div className="flex items-center flex-col justify-between h-28">
              <button
                onClick={updateCurrentProduct}
                className="inline-block w-full rounded-full bg-stone-custom-500 mt-3 px-5 py-4 text-sm font-medium text-white"
              >
                Atualizar produto
              </button>
              <button
                onClick={() => setWarningDeleteModal(true)}
                className="inline-block w-full rounded-full bg-gray-800 mt-3 px-5 py-4 text-sm font-medium text-white"
              >
                Remover produto
              </button>
            </div>
          </div>
        </div>

        <div className="relative flex flex-center content-center items-center h-64 hidden md:block sm:h-96 lg:h-full lg:w-3/5 bg-[url(https://images.unsplash.com/photo-1598077850868-6a6bb3c32f9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80)] bg-cover bg-center bg-no-repeat">
          <div className="w-full h-full flex items-center justify-center">
            <ProductCard
              disableBuy
              product={{
                id: currentProductId,
                name: name,
                price: price,
                image: isValidUrl(image)
                  ? image
                  : "https://images.unsplash.com/photo-1598077850868-6a6bb3c32f9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
                category: category,
                description: description,
                userId: "0",
              }}
            />
          </div>
        </div>
      </section>
      {warningDeleteModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Remover Produto</h2>
            <p>Tem certeza de que deseja remover o produto selecionado?</p>
            <div className="flex justify-end mt-4">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-lg mr-2"
                onClick={() => setWarningDeleteModal(false)}
              >
                Cancel
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                onClick={removeCurrentProduct}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {showSuccess && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">{successMessage.title}</h2>
            <p>{successMessage.message}</p>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4"
              onClick={() => setShowSuccess(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>)}</>
  );
}

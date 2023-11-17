"use client";

/*
 * This script corresponds to the 'productRegister' route page (register new products form)
 * */

import ProductCard from "@/components/ProductCard";
import AddProductForm from "@/components/forms/AddProductForm";
import { AuthContext } from "@/contexts/auth.context";
import { Product, createProduct } from "@/services/products";
import { AxiosError } from "axios";
import { useContext, useEffect, useRef, useState } from "react";

export default function Register() {
  const [showModal, setShowModal] = useState(false);
  const [showError, setShowError] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");

  // Input validation and error messages
  const [nameError, setNameError] = useState("");
  const [categoryError, setCategoryError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [priceError, setPriceError] = useState("");
  const [imageError, setImageError] = useState("");
  const authContext = useContext(AuthContext);
  
  useEffect(() => {
    if (!authContext.authenticated) {
      window.location.href = "/login";
    }
  }, [authContext.authenticated]);

  const createNewProduct = async () => {
    // Clear previous error messages
    setNameError("");
    setCategoryError("");
    setDescriptionError("");
    setPriceError("");
    setImageError("");

    // Validate input fields
    if (!name) {
      setNameError("Nome do produto é obrigatório.");
      return;
    }
    if (!category) {
      setCategoryError("Categoria é obrigatória.");
      return;
    }
    if (!description) {
      setDescriptionError("Descrição do produto é obrigatória.");
      return;
    }
    if (price <= 0) {
      setPriceError("Preço deve ser maior que zero.");
      return;
    }
    if (!image) {
      setImageError("Link da imagem é obrigatório");
      return;
    } else {
      // Check for valid image link format
      const imageRegex = /\.(jpeg|jpg|gif|png)$/i;
      if (!image.match(imageRegex)) {
        setImageError("Link de imagem inválido");
        return;
      } else {
        setImageError("");
      }
    }

    try {
      const product: Product = {
        name,
        category,
        description,
        price,
        image,
        userId: "0",
      };
      const token = localStorage.getItem("token") || "";
      await createProduct(product, token);
      setShowModal(true);
      setShowError(false);
    } catch (error) {
      setShowError(true);
      setShowModal(false);
      const e = error as AxiosError;
      // check for invalid permission error
      if (e.response?.status === 401) {
        authContext.LogOut();
      }
    }
  };

  const clearForm = () => {
    setName("");
    setCategory("");
    setPrice(0);
    setImage("");
    setDescription("");
  };

  return (
    <div>
      <section className="relative flex flex-wrap lg:h-screen lg:items-center">
        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-2/5 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-3xl font-bold sm:text-3xl">
              Adicione um Produto
            </h1>

            <p className="mt-4 text-gray-500">
              Adicione um produto para que ele seja exibido na página inicial.
            </p>
          </div>

          <AddProductForm
            name={name}
            setName={setName}
            nameError={nameError}
            category={category}
            setCategory={setCategory}
            categoryError={categoryError}
            description={description}
            setDescription={setDescription}
            descriptionError={descriptionError}
            price={price}
            setPrice={setPrice}
            priceError={priceError}
            image={image}
            setImage={setImage}
            imageError={imageError}
            createNewProduct={createNewProduct}
          />
        </div>

        <div className="relative flex flex-center content-center items-center h-64 hidden md:block sm:h-96 lg:h-full lg:w-3/5 bg-[url(https://images.unsplash.com/photo-1661655885711-ca28a47651b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80)] bg-cover bg-center bg-no-repeat">
          <div className="w-full h-full flex items-center justify-center">
            <ProductCard
              disableBuy
              product={{
                id: "0",
                name,
                price,
                description,
                image: image.match(/\.(jpeg|jpg|gif|png)$/i)
                  ? image
                  : "https://images.unsplash.com/photo-1657216328535-e981d223dee3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=715&q=80",
                category,
                userId: "0",
              }}
            />
          </div>
        </div>
      </section>
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Sucesso!</h2>
            <p>Produto adicionado com sucesso!</p>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4"
              onClick={() => {
                setShowModal(false);
                clearForm();
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

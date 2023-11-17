import React from "react";
interface AddProductFormProps {
  name: string;
  setName: (name: string) => void;
  nameError: string;
  category: string;
  setCategory: (category: string) => void;
  categoryError: string;
  description: string;
  setDescription: (description: string) => void;
  descriptionError: string;
  price: number;
  setPrice: (price: number) => void;
  priceError: string;
  image: string;
  setImage: (image: string) => void;
  imageError: string;
  createNewProduct: () => void;
}

export default function AddProductForm({
  name,
  setName,
  nameError,
  category,
  setCategory,
  categoryError,
  description,
  setDescription,
  descriptionError,
  price,
  setPrice,
  priceError,
  image,
  setImage,
  imageError,
  createNewProduct,
} : AddProductFormProps) {
  return (
    <div>
      <div className="mx-auto max-w-md space-y-4">
        <div>
          <div className="relative">
            <label className="text-sm font-bold text-stone-dark-500 tracking-wide">
              Nome do Produto
            </label>
            <input
              type="text"
              className="w-full border-2 border-solid border-stone-dark-500 rounded-lg p-4 pe-12 text-sm shadow-sm"
              placeholder="Ex: Smart Card Machine"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <p className="text-red-500 text-xs">{nameError}</p>
          </div>
        </div>

        <div>
          <div className="relative">
            <label className="text-sm font-bold text-stone-dark-500 tracking-wide">
              Categoria
            </label>
            <input
              type="text"
              className="w-full border-2 border-solid border-stone-dark-500 rounded-lg p-4 pe-12 text-sm shadow-sm"
              placeholder="Ex: Tecnologia"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
            <p className="text-red-500 text-xs">{categoryError}</p>
          </div>
        </div>
        <div>
          <div className="relative">
            <label className="text-sm font-bold text-stone-dark-500 tracking-wide">
              Descrição do Produto
            </label>
            <input
              type="text"
              className="w-full border-2 border-solid border-stone-dark-500 rounded-lg p-4 pe-12 text-sm shadow-sm"
              placeholder="Ex: Máquina de cartão de crédito"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <p className="text-red-500 text-xs">{descriptionError}</p>
          </div>
        </div>
        <div>
          <div className="relative">
            <label className="text-sm font-bold text-stone-dark-500 tracking-wide">
              Preço R$
            </label>
            <input
              type="text"
              className="w-full border-2 border-solid border-stone-dark-500 rounded-lg p-4 pe-12 text-sm shadow-sm"
              placeholder="999.99"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
            />
            <p className="text-red-500 text-xs">{priceError}</p>
          </div>
        </div>

        <div>
          <div className="relative">
            <label className="text-sm font-bold text-stone-dark-500 tracking-wide">
              Link da Imagem
            </label>
            <input
              type="text"
              className="w-full border-2 border-solid border-stone-dark-500 rounded-lg p-4 pe-12 text-sm shadow-sm"
              placeholder="https://www.linkdaimagem.com/imagem.png"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
            <p className="text-red-500 text-xs">{imageError}</p>
          </div>
        </div>

        <div className="flex items-center flex-col justify-between h-28">
          <button
            onClick={createNewProduct}
            className="inline-block w-full rounded-full bg-stone-custom-500 mt-3 px-5 py-4 text-sm font-medium text-white"
          >
            Adicionar Produto
          </button>
          <p className="text-sm text-gray-500">
            Já tem um produto cadastrado?{" "}
            <a className="underline" href="/manage">
              Bora lá!
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

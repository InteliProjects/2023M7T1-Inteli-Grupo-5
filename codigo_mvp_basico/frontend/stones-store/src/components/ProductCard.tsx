import { Product } from "@/services/products";
import { AxiosError } from "axios";
import Image from "next/image";
import { sendMessage } from "../rabbitMQ/sendMessage";
import { createOrder } from "@/services/orders";

interface Props {
  product: Product;
  disableBuy?: boolean;
}

export default function ProductCard({ product, disableBuy }: Props) {
  const buyProduct = async (productId: string) => {
    try {
      const token = localStorage.getItem("token") || "";
      const user = localStorage.getItem("user") || "";
      const userData = JSON.parse(user);
      const message = {
        productId: productId,
        userId: userData.id,
        token: token,
      }
      await createOrder(message.userId, message.productId, message.token);
      alert("Produto comprado com sucesso!");
    } catch (e) {
      const error = e as AxiosError;
      if (error.response?.status === 401) {
        alert("Faça login para comprar produtos");
        window.location.href = "/login";
      }
    }
  };

  return (
    <div className="w-full text-stone-dark-500 rounded-2xl shadow-lg md:w-1/3 xl:w-1/4 flex flex-col m-6 overflow-hidden transition duration-500 hover:scale-105">
      <Image
        className="object-cover w-full h-80 mt-0"
        src={`${product.image}`}
        objectFit="cover"
        width={320}
        height={48}
        alt="{product.name}"
      />

      <div className="bg-white  ">
        <div className="px-4 pt-3">
          <h1 className="text-xl font-bold uppercase">{product.name}</h1>
          <h4 className="text-xl lowercase wrap">{product.description}</h4>
        </div>

        <div className="flex items-center justify-between px-4 py-3">
          <h6 className="text-lg lowercase">{product.category}</h6>

          <h1 className="text-lg font-bold">
            R${product.price.toString().replace(".", ",")}
          </h1>
        </div>

        {!disableBuy && (
          <button
            className="bg-stone-dark-500 text-white font-bold py-2 px-4 rounded-full m-4 hover:bg-stone-dark-700"
            onClick={() => buyProduct(product.id || "-1")}
          >
            Comprar
          </button>
        )}
      </div>
    </div>
  );
}

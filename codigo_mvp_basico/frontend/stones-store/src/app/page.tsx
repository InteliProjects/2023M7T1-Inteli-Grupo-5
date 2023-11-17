"use client"
import ImageSection from "@/components/ImageSection";
import ProductCard from "@/components/ProductCard";
import { getProducts, Product } from "@/services/products";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await getProducts();
      setProducts(response.data.products);
    };
    fetchProducts();
  }, []);

  return (
    <div className="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
      <section className="text-white">
        <div className="mx-auto max-w-screen pb-56 lg:flex lg:h-screen lg:items-center">
          <ImageSection />
        </div>
      </section>

      <div className="container mx-auto flex flex-wrap justify-between mt-0 px-2 py-3">
        {products.map((product, idx) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

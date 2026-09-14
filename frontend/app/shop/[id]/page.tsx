"use client";

import { use, useState } from "react";
import Navbar from "../../components/Navbar";
import { perfumes } from "../../data/perfume";

type CartItem = {
  id: string | number;
  name: string;
  type: string;
  price: number;
  image: string;
  description?: string;
  notes?: string[];
  quantity: number;
};

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  const perfume = perfumes.find((p) => String(p.id) === id);

  const [quantity, setQuantity] = useState(1);

  if (!perfume) {
    return (
      <>
        <Navbar />
        <section className="min-h-screen bg-[#0b0b0f] flex items-center justify-center">
          <p className="text-white text-xl">Product not found.</p>
        </section>
      </>
    );
  }

  
  const selectedPerfume = perfume;

  function handleAddToCart() {
    const stored = localStorage.getItem("cart");

    const cart: CartItem[] = stored ? JSON.parse(stored) : [];

    const existing = cart.find(
      (item) => item.id === selectedPerfume.id
    );

    if (existing) {
      existing.quantity += quantity;
    } else {
      cart.push({
        ...selectedPerfume,
        quantity,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    window.dispatchEvent(new Event("cartUpdated"));

    alert("Added to Cart Successfully!");
  }

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-[#0b0b0f] relative overflow-hidden py-20">
        <div className="absolute inset-0">
          <div className="absolute w-[600px] h-[600px] bg-yellow-500/10 blur-[180px] rounded-full top-[-200px] left-[-150px]" />
          <div className="absolute w-[500px] h-[500px] bg-purple-500/10 blur-[160px] rounded-full bottom-[-180px] right-[-120px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/80" />
        </div>

        <div className="relative max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">
          <div className="rounded-2xl overflow-hidden border border-white/10">
            <img
              src={selectedPerfume.image}
              alt={selectedPerfume.name}
              className="w-full h-[500px] object-cover"
            />
          </div>

          <div>
            <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">
              {selectedPerfume.name}
            </h1>

            <p className="text-gray-400 mb-4">
              {selectedPerfume.type}
            </p>

            <p className="text-yellow-400 text-2xl mb-6">
              NPR {selectedPerfume.price}
            </p>

            {selectedPerfume.description && (
              <p className="text-gray-400 leading-relaxed mb-8">
                {selectedPerfume.description}
              </p>
            )}

            {selectedPerfume.notes &&
              selectedPerfume.notes.length > 0 && (
                <div className="mb-10">
                  <h3 className="text-white text-lg font-semibold mb-2">
                    Fragrance Notes
                  </h3>
                  <p className="text-gray-400">
                    {selectedPerfume.notes.join(", ")}
                  </p>
                </div>
              )}

            <div className="flex items-center gap-5">
              <div className="flex items-center border border-gray-600 rounded-lg overflow-hidden">
                <button
                  onClick={() =>
                    quantity > 1 && setQuantity(quantity - 1)
                  }
                  className="px-5 py-3 bg-[#1b1b1b] hover:bg-gray-700 text-white text-xl"
                >
                  -
                </button>

                <span className="px-6 text-xl font-bold text-white">
                  {quantity}
                </span>

                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-5 py-3 bg-[#1b1b1b] hover:bg-gray-700 text-white text-xl"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="bg-yellow-500 text-black px-10 py-4 rounded-lg font-bold hover:bg-yellow-400 transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
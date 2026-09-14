import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import {perfumes} from "../data/perfume";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop"
};


export default  function ShopPage() {
 

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-[#0b0b0f] relative overflow-hidden py-20">
     
        <div className="absolute inset-0">
          <div className="absolute w-[600px] h-[600px] bg-yellow-500/10 blur-[180px] rounded-full top-[-200px] left-[-150px]" />
          <div className="absolute w-[500px] h-[500px] bg-purple-500/10 blur-[160px] rounded-full bottom-[-180px] right-[-120px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/80" />
        </div>

        <div className="relative max-w-7xl mx-auto px-8">
          <h1 className="text-5xl md:text-6xl text-white text-center font-serif mb-6">
            SHOP COLLECTION
          </h1>

          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
            Discover luxury fragrances crafted to define your identity and
            leave a lasting impression.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {perfumes.map((perfume) => (
              <ProductCard
                key={perfume.id}
                perfume={perfume}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
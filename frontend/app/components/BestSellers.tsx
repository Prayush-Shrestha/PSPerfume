import { perfumes } from "../data/perfume";
import ProductCard from "./ProductCard";

export default function BestSellers() {
  // Show only first 3 perfumes
  const bestSellers = perfumes.slice(0, 3);

  return (
    <section className="bg-[#0b0b0f] py-20">
      <div className="max-w-7xl mx-auto px-8">
        <h1 className="text-5xl text-white text-center font-serif mb-16">
          BEST SELLERS
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {bestSellers.map((perfume) => (
            <ProductCard
              key={perfume.id}
              perfume={perfume}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
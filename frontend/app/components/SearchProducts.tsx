"use client";

import { useState } from "react";
import { perfumes } from "../data/perfume";
import ProductCard from "./ProductCard";

export default function SearchProducts() {
  const [search, setSearch] = useState("");

  const filteredProducts = perfumes.filter((perfume) =>
    perfume.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full">
      {/* Search Box */}
      <div className="mb-10">
        <input
          type="text"
          placeholder="Search your favourite perfume..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-xl border border-gray-700 bg-[#111827] px-5 py-4 text-white text-lg placeholder-gray-400 focus:border-yellow-400 focus:outline-none"
        />
      </div>

      {/* Results */}
      {search.trim() !== "" && (
        <>
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((perfume) => (
                <ProductCard
                  key={perfume.id}
                  perfume={perfume}
                />
              ))}
            </div>
          ) : (
            <div className="text-center text-red-400 text-xl mt-10">
              No perfume found.
            </div>
          )}
        </>
      )}
    </div>
  );
}
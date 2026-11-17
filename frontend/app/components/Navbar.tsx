"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { perfumes } from "../data/perfume";

import { SignInButton, SignUpButton, UserButton, Show } from "@clerk/nextjs";

export default function Navbar() {
  const pathname = usePathname();
  const [cartCount, setCartCount] = useState(0);
  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    function updateCartCount() {
      const data = localStorage.getItem("cart");
      if (!data) {
        setCartCount(0);
        return;
      }
      const cart = JSON.parse(data);
      let total = 0;
      cart.forEach((item: { quantity: number }) => {
        total += item.quantity;
      });
      setCartCount(total);
    }

    updateCartCount();

    window.addEventListener("storage", updateCartCount);
    window.addEventListener("cartUpdated", updateCartCount);

    return () => {
      window.removeEventListener("storage", updateCartCount);
      window.removeEventListener("cartUpdated", updateCartCount);
    };
  }, [pathname]);

  const isActive = (path: string) =>
    pathname === path ? "text-yellow-500" : "hover:text-yellow-500 transition";

  const searched = search.trim() !== "";
  const filtered = perfumes.filter((perfume) =>
    perfume.name.toLowerCase().includes(search.toLowerCase())
  );

  function closeSearch() {
    setShowSearch(false);
    setSearch("");
  }

  return (
    <>
      <nav className="bg-[#0b0b0f] text-white relative z-50">
        <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
          <Link href="/">
            <div>
              <h1 className="text-4xl font-serif">PS</h1>
              <p className="text-xs tracking-[5px]">PERFUMES</p>
            </div>
          </Link>

          <ul className="hidden md:flex gap-10 font-semibold">
            <li><Link href="/" className={isActive("/")}>HOME</Link></li>
            <li><Link href="/shop" className={isActive("/shop")}>SHOP</Link></li>
            <li><Link href="/about" className={isActive("/about")}>ABOUT</Link></li>
            <li><Link href="/contact" className={isActive("/contact")}>CONTACT</Link></li>
          </ul>

          <div className="flex items-center gap-6">
            <button onClick={() => setShowSearch(true)} className="hover:text-yellow-500">
              Search
            </button>

            <Link href="/history" className={isActive("/history")}>
              History
            </Link>

            <Link href="/cart" className={isActive("/cart")}>
              Cart ({cartCount})
            </Link>

            <Show when="signed-out">
              <SignInButton mode="modal">
                <button className="border border-yellow-500 px-4 py-2 rounded-lg hover:bg-yellow-500 hover:text-black transition">
                  Login
                </button>
              </SignInButton>

              <SignUpButton mode="modal">
                <button className="bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-400 transition">
                  Sign Up
                </button>
              </SignUpButton>
            </Show>

            <Show when="signed-in">
              <UserButton />
            </Show>
          </div>
        </div>
      </nav>

      {showSearch && (
        <div className="fixed inset-0 bg-black/70 flex items-start justify-center pt-24 z-50">
          <div className="bg-[#121826] w-[90%] md:w-[600px] rounded-xl p-6 max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-2xl font-bold text-white">Search Perfumes</h2>
              <button onClick={closeSearch} className="text-3xl text-white hover:text-yellow-500">✕</button>
            </div>

            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Search perfumes..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1 p-3 rounded-lg bg-[#0f1625] border border-gray-700 text-white outline-none focus:border-yellow-500"
              />
              <button className="bg-yellow-500 text-white px-5 rounded-lg font-medium">Search</button>
            </div>

            {searched && (
              <div className="mt-6 bg-[#0f1625] rounded-lg overflow-hidden">
                {filtered.length === 0 ? (
                  <p className="p-4 text-center text-gray-400">No perfume found</p>
                ) : (
                  filtered.map((perfume) => (
                    <Link
                      key={perfume.id}
                      href={`/shop/${perfume.id}`}
                      onClick={closeSearch}
                      className="flex items-center gap-4 p-4 border-b border-gray-800 hover:bg-[#1b2740] transition"
                    >
                      <Image src={perfume.image} alt={perfume.name} width={60} height={60} sizes="60px" className="h-[60px] w-[60px] rounded-md object-cover" />
                      <div className="flex-1">
                        <h3 className="font-semibold text-white">{perfume.name}</h3>
                        <p className="text-sm text-gray-400">{perfume.type}</p>
                      </div>
                      <p className="font-bold text-yellow-500">Rs {perfume.price}</p>
                    </Link>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
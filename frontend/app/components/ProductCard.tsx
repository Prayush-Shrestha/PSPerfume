"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Perfume = {
  id: string | number;
  name: string;
  type: string;
  price: number;
  image: string;
};

type CartItem = Perfume & {
  quantity: number;
};

export default function ProductCard({
  perfume,
}: {
  perfume: Perfume;
}) {
  const router = useRouter();

  function addToCart() {
    const stored = localStorage.getItem("cart");
    const cart: CartItem[] = stored ? JSON.parse(stored) : [];

    // Check if perfume already exists in cart
    const existing = cart.find(
      (item) => item.id === perfume.id
    );

    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({
        ...perfume,
        quantity: 1,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    router.push("/cart");
  }

  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        bg-[#07111f]
        p-5

        border
        border-transparent

        transition-all
        duration-500
        ease-out

        hover:-translate-y-3
        hover:border-yellow-500/40

        hover:shadow-[0_0_25px_rgba(234,179,8,0.35),0_0_60px_rgba(234,179,8,0.15)]
      "
    >
      {/* Background Glow */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-2xl
          bg-yellow-500/0
          blur-2xl

          transition-all
          duration-500

          group-hover:bg-yellow-500/10
        "
      />

      {/* Card Content */}
      <div className="relative z-10">

        {/* Product Image */}
        <Link href={`/shop/${perfume.id}`}>
          <div className="relative h-[345px] w-full overflow-hidden rounded-xl">
            <Image
              src={perfume.image}
              alt={perfume.name}
              fill
              className="
                object-cover

                transition-transform
                duration-500
                ease-out

                group-hover:scale-105
              "
            />
          </div>
        </Link>

        {/* Product Name */}
        <Link href={`/shop/${perfume.id}`}>
          <h2
            className="
              mt-5
              text-2xl
              font-bold
              text-white

              transition-colors
              duration-300

              group-hover:text-yellow-400
            "
          >
            {perfume.name}
          </h2>

          {/* Product Type */}
          <p className="text-gray-400">
            {perfume.type}
          </p>
        </Link>

        {/* Price */}
        <p
          className="
            mt-4
            text-xl
            font-bold
            text-yellow-500
          "
        >
          NPR {perfume.price}
        </p>

        {/* Shop Now Button */}
        <button
          onClick={addToCart}
          className="
            mt-2
            w-full
            rounded-xl
            bg-yellow-500
            py-4

            text-lg
            font-medium
            text-black

            transition-all
            duration-300

            hover:bg-yellow-400
            hover:shadow-[0_0_20px_rgba(234,179,8,0.5)]

            active:scale-95
          "
        >
          Shop Now
        </button>
      </div>
    </div>
  );
}
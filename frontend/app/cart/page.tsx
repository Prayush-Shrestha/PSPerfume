import type { Metadata } from "next";
import CartClient from "./CartClient";

export const metadata: Metadata = {
  title: "Cart",
  description: "View your selected PS Perfume products and complete your order.",
};

export default function CartPage() {
  return <CartClient />;
}
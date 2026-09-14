import type { Metadata } from "next";
import History from "./History";

export const metadata: Metadata = {
  title: "History ",
  description: "View your order history and manage your past purchases.",
  
};

export default function HistoryPage() {
  return <History />;
}
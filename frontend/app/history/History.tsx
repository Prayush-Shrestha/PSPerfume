"use client";

import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

type Order = {
  id: number;
  date: string;
  total: number;
  items: {
    id: number;
    name: string;
    quantity: number;
    price: number;
    image: string;
  }[];
};

export default function HistoryPage() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("orders");
    if (saved) {
      // Read client-only storage after mount so server and client markup match.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setOrders(JSON.parse(saved));
    }
  }, []);

  function deleteOrder(id: number) {
    const updatedOrders = orders.filter((order) => order.id !== id);

    setOrders(updatedOrders);

    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  }

  return (
    <div className="min-h-screen bg-[#020817] text-white">
      <Navbar />

      <div className="max-w-6xl mx-auto px-8 py-10">
        <h1 className="text-4xl font-serif text-center mb-10">
          Order History
        </h1>

        {orders.length === 0 ? (
          <p className="text-center text-gray-400">
            No orders yet.
          </p>
        ) : (
          orders
            .slice()
            .reverse()
            .map((order) => (
              <div
                key={order.id}
                className="bg-[#0b1224] rounded-xl p-6 mb-8"
              >
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h2 className="text-xl font-bold">
                      Order #{order.id}
                    </h2>

                    <p className="text-gray-400">
                      {order.date}
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <h2 className="text-yellow-500 text-xl font-bold">
                      Rs {order.total}
                    </h2>

                    <button
                      onClick={() => deleteOrder(order.id)}
                      className="bg-red-600 hover:bg-red-500 px-4 py-2 rounded-lg font-semibold transition"
                    >
                      Delete
                    </button>
                  </div>
                </div>

                {order.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 border-t border-gray-700 py-4"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 rounded-lg object-cover"
                    />

                    <div className="flex-1">
                      <h2 className="font-semibold">
                        {item.name}
                      </h2>

                      <p className="text-gray-400">
                        Qty: {item.quantity}
                      </p>
                    </div>

                    <p className="text-yellow-500 font-semibold">
                      Rs {item.price}
                    </p>
                  </div>
                ))}
              </div>
            ))
        )}
      </div>
    </div>
  );
}
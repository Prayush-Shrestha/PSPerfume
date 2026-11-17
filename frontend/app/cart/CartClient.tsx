"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import Navbar from "../components/Navbar";


type CartItem = {
  id: number;
  name: string;
  type: string;
  price: number;
  image: string;
  quantity: number;
};


export default function CartClient() {

  const { user } = useUser();
  const router = useRouter();

  const [cart, setCart] = useState<CartItem[]>([]);


  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");

    if (savedCart) {
      // Read client-only storage after mount so server and client markup match.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCart(JSON.parse(savedCart));
    }
  }, []);



  function updateCart(newCart: CartItem[]) {

    setCart(newCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(newCart)
    );
  }



  function increase(id: number) {

    const updatedCart = cart.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: item.quantity + 1,
          }
        : item
    );

    updateCart(updatedCart);
  }



  function decrease(id: number) {

    const updatedCart = cart
      .map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      )
      .filter((item) => item.quantity > 0);


    updateCart(updatedCart);
  }




  function removeItem(id: number) {

    const updatedCart = cart.filter(
      (item) => item.id !== id
    );

    updateCart(updatedCart);
  }




  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );





  function checkout() {

    if (cart.length === 0) return;


    const previousOrders = JSON.parse(
      localStorage.getItem("orders") || "[]"
    );


    const order = {

      id: `order-${Date.now()}-${Math.floor(
        Math.random() * 1000
      )}`,

      customer: user?.firstName,

      email:
        user?.primaryEmailAddress?.emailAddress,

      date: new Date().toLocaleString(),

      total,

      items: cart,

    };



    previousOrders.push(order);



    localStorage.setItem(
      "orders",
      JSON.stringify(previousOrders)
    );


    localStorage.removeItem("cart");


    setCart([]);



    alert("Order placed successfully!");


    router.push("/history");

  }





  if (cart.length === 0) {

    return (

      <div className="min-h-screen bg-[#020817] text-white">

        <Navbar />


        <div className="text-center mt-20">

          <h1 className="text-4xl font-serif mb-2">

            {user ? user.firstName : "Your Cart"}

          </h1>


          <p className="text-gray-400 mb-10">

            {user?.primaryEmailAddress?.emailAddress}

          </p>



          <h2 className="text-3xl font-semibold text-gray-300">

            Your cart is empty.

          </h2>



          <p className="text-gray-500 mt-3">

            Add your favorite perfumes to start shopping.

          </p>



          <Link href="/shop">

            <button className="mt-8 bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition">

              Continue Shopping

            </button>

          </Link>


        </div>


      </div>

    );

  }





  return (

    <div className="min-h-screen bg-[#020817] text-white">


      <Navbar />


      <div className="max-w-7xl mx-auto px-8 py-10">


        <h1 className="text-4xl font-serif text-center mb-2">

          {user
            ? `${user.firstName}'s Cart`
            : "Your Cart"}

        </h1>



        <p className="text-center text-gray-400 mb-10">

          {user?.primaryEmailAddress?.emailAddress}

        </p>





        <div className="grid lg:grid-cols-3 gap-8">



          <div className="lg:col-span-2 space-y-5">


            {cart.map((item) => (

              <div
                key={item.id}
                className="bg-[#0b1224] rounded-xl p-5 flex justify-between items-center"
              >


                <div className="flex items-center gap-5">


                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-28 h-28 object-cover rounded-lg"
                  />



                  <div>

                    <h2 className="text-2xl font-bold">

                      {item.name}

                    </h2>


                    <p className="text-gray-400">

                      {item.type}

                    </p>


                    <p className="text-yellow-500 font-bold mt-2">

                      Rs {item.price}

                    </p>


                  </div>


                </div>





                <div className="flex items-center gap-3">


                  <button
                    onClick={() => decrease(item.id)}
                    className="w-8 h-8 rounded bg-red-600 hover:bg-red-500"
                  >
                    -
                  </button>



                  <span className="text-lg font-semibold">

                    {item.quantity}

                  </span>




                  <button
                    onClick={() => increase(item.id)}
                    className="w-8 h-8 rounded bg-green-600 hover:bg-green-500"
                  >
                    +
                  </button>




                  <button
                    onClick={() => removeItem(item.id)}
                    className="ml-2 px-4 py-2 rounded bg-gray-700 hover:bg-gray-600"
                  >

                    Delete

                  </button>


                </div>


              </div>


            ))}


          </div>





          <div className="bg-[#0b1224] rounded-xl p-6 h-fit sticky top-6">


            <h2 className="text-2xl font-bold mb-6">

              Order Summary

            </h2>



            <div className="flex justify-between mb-4">

              <span>Items</span>

              <span>{cart.length}</span>

            </div>




            <div className="flex justify-between mb-4">

              <span>Shipping</span>

              <span>Free</span>

            </div>



            <hr className="border-gray-700 mb-4" />



            <div className="flex justify-between text-xl font-bold">

              <span>Total</span>

              <span>Rs {total}</span>

            </div>




            <button
              onClick={checkout}
              className="w-full mt-8 bg-yellow-500 text-black py-3 rounded-lg font-bold hover:bg-yellow-400 transition"
            >

              Checkout

            </button>



          </div>


        </div>


      </div>


    </div>

  );
}
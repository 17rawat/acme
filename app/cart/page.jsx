"use client";

import React, { useState } from "react";
import CartItem from "@/components/CartItem";
import { useSelector } from "react-redux";
import axios from "axios";

import toast from "react-hot-toast";
import Link from "next/link";
import { FaRupeeSign } from "react-icons/fa";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const subTotal = useSelector((state) => state.cart.totalAmount);

  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const handleSubscription = async () => {
    setIsCheckingOut(true);

    try {
      const { data } = await axios.post("/api/checkout", {
        items: cartItems,
      });

      // setIsCheckingOut(false);
      window.location.assign(data);
    } catch (error) {
      setIsCheckingOut(false);
      toast.error("An error occurred during checkout. Please try again.");
    }
  };

  const itemInCart = (
    <div className="space-y-4">
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
          total={item.totalPrice}
          size={item.size}
        />
      ))}
    </div>
  );

  return (
    <div className="p-4">
      {cartItems.length === 0 ? (
        <div className="flex bg-yellow-100 h-72 flex-col items-center justify-center p-8">
          <h2 className="text-2xl font-bold mb-4">Your Cart is Empty</h2>
          <p className="text-gray-500">
            Why not explore our{" "}
            <Link href="/explore/products" className="text-blue-500 underline">
              products
            </Link>{" "}
            and find something you like?
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">{itemInCart}</div>

          {cartItems.length > 0 && (
            <div className="md:col-span-1 border p-4 h-64 ">
              <div className="mb-4">
                <h3 className="text-lg font-semibold">Order Summary</h3>
              </div>
              <div className="mb-4">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span className="inline-flex items-center">
                    <FaRupeeSign /> {subTotal}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping:</span>
                  <span className="inline-flex items-center">
                    <FaRupeeSign /> 0.0
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Taxes:</span>
                  <span className="inline-flex items-center">
                    <FaRupeeSign /> 0.0
                  </span>
                </div>
              </div>
              <div>
                <div className="flex justify-between mt-8">
                  <span className="font-semibold">Total:</span>
                  <span className="inline-flex items-center">
                    <FaRupeeSign /> {subTotal}
                  </span>
                </div>
                <button
                  onClick={handleSubscription}
                  className={`${
                    isCheckingOut
                      ? "bg-green-500"
                      : "bg-black hover:bg-blue-700"
                  } text-white mt-3 px-4 py-2 w-full`}
                >
                  {isCheckingOut ? "Processing..." : "GO TO CHECKOUT"}
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;

"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

import { clearCart } from "@/store/cartSlice";
import { useDispatch } from "react-redux";

const Success = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearCart());
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-72 bg-yellow-100">
      <div className="text-green-500 text-5xl mb-4">
        <FaCheckCircle />
      </div>
      <h1 className="text-3xl font-semibold mb-4">Payment Successful!</h1>
      <p className="text-gray-600 mb-8">
        Thank you for your payment. Your order has been successfully processed.
      </p>
      <Link
        href={"/explore/products"}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
      >
        Continue Shopping
      </Link>
    </div>
  );
};

export default Success;

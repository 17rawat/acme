"use client";

import React, { useState } from "react";
import Products from "@/DUMMY-DATA";
import Image from "next/image";
import { addItemToCart } from "@/store/cartSlice";
import { useDispatch } from "react-redux";
import { FaRupeeSign } from "react-icons/fa";

import { useSession } from "next-auth/react";

const Product = ({ params }) => {
  const { data: session } = useSession();
  console.log(session);
  const dispatch = useDispatch();
  const [selectedSize, setSelectedSize] = useState("");

  const productId = parseInt(params.id);

  const product = Products.find((product) => product.id === productId);

  const { id, name, price } = product;

  const handleSizeSelection = (size) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    dispatch(addItemToCart({ id, name, price, selectedSize }));
  };

  console.log(product.imageSrc);
  return (
    <div className="flex flex-col md:flex-row m-4">
      <div className="w-96 h-96 overflow-hidden shadow-md">
        {product && product.imageSrc && product.imageSrc.src && (
          <Image
            src={product.imageSrc}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      <div className="ml-4 ">
        <h1 className="text-xl font-bold mb-2">{product?.name}</h1>
        <p className="text-gray-600">{product?.description}</p>
        <p className="mt-1 text-lg font-medium text-green-600">
          <span className="inline-flex items-center">
            <FaRupeeSign />
            {product?.price}
          </span>
        </p>

        <ul className="mt-2 list-none p-0">
          <span className="text-l mt-2 mb-2">Select size</span>
          {product?.sizes.map((size) => (
            <li
              key={size}
              className={`cursor-pointer mt-2 text-center ${
                selectedSize === size
                  ? "font-semibold border-2 border-blue-500 text-blue-500 rounded-lg p-4"
                  : "border border-gray-300 text-gray-600  rounded-lg hover:border-blue-500 p-4"
              }`}
              onClick={() => handleSizeSelection(size)}
            >
              {size}
            </li>
          ))}
        </ul>

        {session && (
          <button
            className={`mt-4 bg-black text-white px-4 py-2 rounded-md hover:bg-blue-600 ${
              !selectedSize && "cursor-not-allowed opacity-50 "
            }`}
            disabled={!selectedSize}
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;

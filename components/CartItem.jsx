import React from "react";
import { useDispatch } from "react-redux";
import { addItemToCart, removeItemFromCart } from "@/store/cartSlice";
import { FaRupeeSign } from "react-icons/fa";

const CartItem = ({ id, name, price, quantity, total, size }) => {
  const dispatch = useDispatch();

  const addItemHandler = () => {
    dispatch(
      addItemToCart({
        id,
        name,
        price,
        selectedSize: size,
      })
    );
  };

  const removeItemHandler = () => {
    dispatch(removeItemFromCart({ id, size }));
  };

  return (
    <div className="border p-4 flex items-center justify-between">
      <div className="">
        <h3 className="font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 mb-2">Size: {size}</p>
        <p className="text-green-600">
          <span className="inline-flex items-center">
            <FaRupeeSign />
            {price} x <span className="text-black ml-1">{quantity}</span>
          </span>
        </p>
      </div>
      <div className="flex items-center">
        <p className="mt-1 text-lg font-medium text-green-600">
          <span className="inline-flex items-center">
            <FaRupeeSign />
            {total}
          </span>
        </p>
        <div className="ml-4">
          <button
            onClick={removeItemHandler}
            className="px-4 py-2 bg-black text-white rounded-md focus:outline-none hover:bg-blue-700"
          >
            -
          </button>
          <button
            onClick={addItemHandler}
            className="px-4 py-2 bg-black text-white rounded-md ml-2 focus:outline-none hover:bg-blue-700"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

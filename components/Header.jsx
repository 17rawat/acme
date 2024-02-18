"use client";

import React from "react";
import { FiUser, FiShoppingCart } from "react-icons/fi";
import Link from "next/link";

import { useSession } from "next-auth/react";

import { useSelector } from "react-redux";

const Header = () => {
  const { data: session } = useSession();

  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <header className="bg-white border-b border-gray-300 shadow-md py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl text-black">
          acme
        </Link>

        <ul className="flex space-x-6">
          {!session && (
            <li>
              <Link
                href="/account/login"
                className="text-white bg-black border border-gray-300 px-4 py-2 rounded"
              >
                login
              </Link>
            </li>
          )}

          {session && (
            <>
              <li>
                <Link
                  href="/account/profile"
                  className="text-gray-600 hover:text-indigo-600 transition"
                >
                  <FiUser className="w-6 h-6" />
                </Link>
              </li>

              <li>
                <Link
                  href="/cart"
                  className="text-gray-600 hover:text-indigo-600 transition flex items-center"
                >
                  <FiShoppingCart className="w-6 h-6" />
                  <span className="ml-1 text-lg text-black">
                    ({cartQuantity})
                  </span>
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

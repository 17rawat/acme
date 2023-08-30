import Link from "next/link";
import React from "react";

import ProductCard from "@/components/ProductCard";

import Products from "@/DUMMY-DATA";

const ProductsPage = () => {
  return (
    <div className=" m-4">
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {Products.map((product) => (
          <Link key={product.id} href={`/explore/products/${product.id}`}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;

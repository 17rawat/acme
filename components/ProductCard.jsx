import { Fragment } from "react";
import Image from "next/image";
import { FaRupeeSign } from "react-icons/fa";

const ProductCard = ({ product }) => (
  <Fragment>
    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
      <Image
        src={product.imageSrc}
        alt={product.imageAlt}
        width={1000}
        height={1000}
        className="h-full w-full object-cover object-center group-hover:opacity-75"
      />
    </div>
    <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
    <p className="mt-1 text-lg font-medium text-green-600">
      <span className="inline-flex items-center">
        <FaRupeeSign />
        {product.price}
      </span>
    </p>
  </Fragment>
);

export default ProductCard;

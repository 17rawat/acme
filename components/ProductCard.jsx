import { Fragment } from "react";
import Image from "next/image";
import { FaRupeeSign } from "react-icons/fa";

const ProductCard = ({ product }) => (
  <Fragment>
    <div>
      <Image
        src={product.imageSrc}
        alt={product.imageAlt}
        className=" w-80 h-80 object-cover"
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

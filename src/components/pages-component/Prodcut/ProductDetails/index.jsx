import Image from "next/image";
import React from "react";

const ProductDetails = ({ product }) => {
  const getRatingStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={i <= rating ? "text-yellow-500" : "text-gray-300"}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="max-w-full h-full  mx-auto px-6 bg-white shadow-lg rounded-lg overflow-hidden">
      <Image
        className="w-[300px] h-[300px] object-cover "
        height={300}
        width={250}
        src={product.image}
        alt={product.title}
      />
      <div className="py-5 px-5">
        <h2 className="text-gray-700 font-semibold text-2xl">
          {product.title}
        </h2>
        <div className="flex items-center mt-2 text-yellow-500">
          {getRatingStars(product.rating.rate)}
        </div>
        <p className="mt-2 text-gray-600 text-sm">{product.description}</p>
        <p className="text-gray-700 mt-2">Category: {product.category}</p>
        <p className="text-gray-700 mt-2">Price: ${product.price}</p>
      </div>
    </div>
  );
};

export default ProductDetails;

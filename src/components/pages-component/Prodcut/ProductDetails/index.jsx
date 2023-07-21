import Spinner from "@/components/Spinner";
import Image from "next/image";
import React from "react";

const ProductDetails = ({ product }) => {
  const defaultImage = "https://via.placeholder.com/300";
  const defaultDescription = "No description available";

  if (!product) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

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
        src={product.image || defaultImage}
        alt={product.title || "Default Title"}
      />
      <div className="py-5 px-5">
        <h2 className="text-gray-700 font-semibold text-2xl">
          {product.title}
        </h2>
        <div className="flex items-center mt-2 text-yellow-500">
          {getRatingStars(product.rating.rate)}
        </div>
        <p className="mt-2 text-gray-600 text-sm">
          {product.description || defaultDescription}
        </p>
        <p className="text-gray-700 mt-2">Category: {product.category}</p>
        <p className="text-gray-700 mt-2">Price: ${product.price || "N/A"}</p>
      </div>
    </div>
  );
};

export default ProductDetails;

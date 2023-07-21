import React, { useState } from "react";
import Image from "next/image";

const ProductDetails = ({ product }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const defaultImage =
    "https://www.trustedreviews.com/wp-content/uploads/sites/54/2022/11/PS5-Review-8-scaled.jpg";
  const defaultDescription = "Sony Playstation 5";

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
      {!imageLoaded && (
        <div className="w-[300px] h-[300px] flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-blue-500" />
        </div>
      )}
      <Image
        className={`w-[300px] h-[300px] object-cover ${
          !imageLoaded ? "opacity-0" : "opacity-100"
        }`}
        height={300}
        width={250}
        src={product.image || defaultImage}
        alt={product.title || "Sony Playstation 5"}
        onLoad={() => setImageLoaded(true)}
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

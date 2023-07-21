import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

const ProductCard = ({ product, onItemClick }) => {
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
    <Link
      href={`/${product.id}`}
      className="w-full flex flex-col items-center justify-center rounded overflow-hidden shadow-lg py-8 cursor-pointer"
      onClick={() => onItemClick(product.id)}
    >
      {!imageLoaded && (
        <div className="w-[200px] h-[300px] flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-blue-500" />
        </div>
      )}
      <Image
        width={200}
        height={300}
        className={`w-[300px] h-[300px] object-cover ${
          !imageLoaded ? "opacity-0" : "opacity-100"
        }`}
        src={product.image || defaultImage}
        alt={product.title || "Sony Playstation 5"}
        onLoad={() => setImageLoaded(true)}
      />
      <div className="px-6 flex flex-col items-start justify-start py-4">
        <div className="font-bold text-xl mb-2">{product.title}</div>
        <p className="text-gray-700 text-base">${product.price || "N/A"}</p>
        <div className="flex items-center mt-2 text-yellow-500">
          {getRatingStars(product.rating.rate)}
        </div>
        <button
          className="border-solid font-Inter hover:bg-nav hover:text-white border-[1px] mt-4 border-[#231f1e] px-[23px] py-[14px] rounded-[50px] "
          type="button"
        >
          Add to Cart
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;

import { fetchProductById, fetchProducts } from "@/pages/api/api";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import ProductDetails from "./ProductDetails";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetchProducts().then((data) => setProducts(data));
  }, []);

  const handleProductClick = (productId) => {
    setSelectedProductId(productId);
    fetchProductById(productId).then((data) => setSelectedProduct(data));
  };

  return (
    <section className="w-full lg:h-screen mt-[80px] px-6 lg:px-[150px] ">
      <div className="my-[40px] w-full">
        <h3 className="text-[28px] font-Inter font-[700] ">
          Todays Best Deals For You!
        </h3>
      </div>

      <div className="w-full hidden font-Inter text-[#231f1e] text-[14px] lg:flex items-center gap-4 justify-start">
        <button
          type="button"
          className="border-solid border-[1px] px-[23px] py-[14px] border-[#c5c5c5] rounded-[100px]"
        >
          <p>Gadgets</p>
        </button>
        <button
          type="button"
          className="border-solid border-[1px] px-[23px] py-[14px] border-[#c5c5c5] rounded-[100px]"
        >
          <p>Fashion</p>
        </button>{" "}
        <button
          type="button"
          className="border-solid border-[1px] px-[23px] py-[14px] border-[#c5c5c5] rounded-[100px]"
        >
          <p>Toys</p>
        </button>{" "}
        <button
          type="button"
          className="border-solid border-[1px] px-[23px] py-[14px] border-[#c5c5c5] rounded-[100px]"
        >
          <p>Education</p>
        </button>{" "}
        <button
          type="button"
          className="border-solid border-[1px] px-[23px] py-[14px] border-[#c5c5c5] rounded-[100px]"
        >
          <p>Beauty</p>
        </button>{" "}
        <button
          type="button"
          className="border-solid border-[1px] px-[23px] py-[14px] border-[#c5c5c5] rounded-[100px]"
        >
          <p>Fitness</p>
        </button>{" "}
        <button
          type="button"
          className="border-solid border-[1px] px-[23px] py-[14px] border-[#c5c5c5] rounded-[100px]"
        >
          <p>Furniture</p>
        </button>{" "}
        <button
          type="button"
          className="border-solid border-[1px] px-[23px] py-[14px] border-[#c5c5c5] rounded-[100px]"
        >
          <p>Sneakers</p>
        </button>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onItemClick={handleProductClick}
            />
          ))}
        </div>
        {selectedProduct && <ProductDetails product={selectedProduct} />}
      </div>
    </section>
  );
};

export default Product;

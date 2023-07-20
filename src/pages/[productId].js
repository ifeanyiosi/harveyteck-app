import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import ProductDetails from "@/components/pages-component/Prodcut/ProductDetails";
import { fetchProductById } from "./api/api";
import Navbar from "@/components/Navbar";
import BackButton from "@/components/BackButton";
import Button from "@/components/Button";

const ProductPage = ({ product }) => {
  const router = useRouter();
  const { productId } = router.query;

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full h-full pb-[30px]">
      <Head>
        <title>Shopcart - Ecommerce Product Page</title>
        <meta name="description" content="Harveyteck Assesement" key="desc" />
      </Head>
      <Navbar />
      <div className="w-full mt-[100px] py-[20px] px-4 lg:px-[150px]">
        <BackButton />
      </div>
      <div className="flex flex-col lg:flex-row  justify-centeritems-center gap-4">
        <div className="container mx-auto w-full px-4 lg:px-[150px] py-8">
          {product ? (
            <ProductDetails product={product} />
          ) : (
            <div>Product not found!</div>
          )}
        </div>
        <div className="flex items-center w-full gap-4 lg:px-[150px] py-5 px-5">
          <Button label="Buy Now" variant="primary" size="md" />
          <Button label="Add to Cart" variant="secondary" size="md" />
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const product = await fetchProductById(params.productId);
  return { props: { product } };
}

export default ProductPage;

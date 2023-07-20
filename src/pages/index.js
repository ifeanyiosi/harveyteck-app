import Navbar from "@/components/Navbar";
import Hero from "@/components/pages-component/Home/Hero";
import HomeSecond from "@/components/pages-component/Home/HomeSecond";
import Product from "@/components/pages-component/Prodcut";
import Head from "next/head";

export default function Home() {
  return (
    <section className="w-full flex flex-col items-center ">
      <Head>
        <title>Shopcart - Ecommerce Landing Page</title>
        <meta name="description" content="Harveyteck Assesement" key="desc" />
      </Head>
      <Navbar />
      <div className=" w-full">
        <Hero />
        <HomeSecond />
        <Product />
      </div>
    </section>
  );
}

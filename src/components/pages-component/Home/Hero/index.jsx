import React from "react";
import Button from "@/components/Button";
import hero1 from "../../../../assets/hero-image.png";

import Image from "next/image";

const Hero = () => {
  return (
    <section className="w-full  lg:px-[150px] px-6 flex flex-col lg:flex-row items-center justify-between bg-gray-100 lg:pt-[200px] pt-[150px] pb-[30px] lg:pb-[100px] ">
      <div className=" w-full">
        <h1 className="font-[700] lg:w-[600px] text-nav text-[30px] lg:text-[64px] mb-[30px] ">
          Grab up to 50% of some selected products
        </h1>
        <div className="lg:w-[200px] w-full mt-[40px] ">
          <Button size="sm" variant="primary" label="Learn More" />
        </div>
      </div>
      <div className="relative hidden lg:flex items-center w-full">
        <Image
          className="h-[500px] w-[800px] object-contain"
          src={hero1}
          alt=""
        />
      </div>
    </section>
  );
};

export default Hero;

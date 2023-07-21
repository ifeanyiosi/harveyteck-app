import React from "react";
import bag from "../../../../assets/bag.png";
import books from "../../../../assets/books.png";
import furniture from "../../../../assets/furniture.png";
import sneakers from "../../../../assets/sneakers.png";
import tech from "../../../../assets/tech.png";
import travel from "../../../../assets/travel.png";

import Image from "next/image";

const HomeSecond = () => {
  return (
    <section className="lg:px-[150px] flex flex-col items-center px-6 w-full">
      <div className="my-[40px] hidden lg:flex w-full">
        <h3 className="text-[28px] font-Inter font-[700] ">
          Shop our top categories
        </h3>
      </div>

      <div className="w-full hidden lg:flex flex-col lg:flex-row items-center gap-4 justify-between">
        <div className="rounded-[10px] w-full">
          <Image
            className="w-full h-full object-cover rounded-[10px]"
            src={bag}
            alt="bag"
          />
        </div>
        <div className="rounded-[10px] w-full">
          <Image
            className="w-full h-full object-cover rounded-[10px]"
            src={books}
            alt="books"
          />
        </div>
        <div className="rounded-[10px] w-full">
          <Image
            className="w-full h-full object-cover rounded-[10px]"
            src={furniture}
            alt="furniture"
          />
        </div>
        <div className="rounded-[10px] w-full">
          <Image
            className="w-full h-full object-cover rounded-[10px]"
            src={sneakers}
            alt="sneakers"
          />
        </div>
        <div className="rounded-[10px] w-full">
          <Image
            className="w-full h-full object-cover rounded-[10px]"
            src={tech}
            alt="tech"
          />
        </div>
        <div className="rounded-[10px] w-full">
          <Image
            className="w-full h-full object-cover rounded-[10px]"
            src={travel}
            alt="travel"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeSecond;

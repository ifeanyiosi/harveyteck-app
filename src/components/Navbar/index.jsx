import React, { useState } from "react";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { PiBasket } from "react-icons/pi";
import { FiPhone } from "react-icons/fi";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { GoSearch } from "react-icons/go";
import Image from "next/image";
import logo from "../../assets/icons/logo.svg";
import Link from "next/link";
import Button from "../Button";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);

  return (
    <nav className="w-full shadow-sm fixed top-0 z-[50]  flex flex-col">
      <div className="w-full lg:px-[150px] px-6 bg-nav py-[7px] flex items-center justify-between">
        <div className="flex gap-2 items-center justify-center">
          <FiPhone className="text-[14px] text-white" />
          <p className="font-Inter text-[14px] text-white">+2348034476993</p>
        </div>

        <button
          className="lg:flex hidden items-center justify-center text-white text-[14px] font-Inter"
          type="button"
        >
          Get 50% Off on Selected Items | Shop Now
        </button>

        <div className="flex items-center justify-center gap-4">
          <button
            type="button"
            className="text-[14px] flex items-center justify-center gap-2 text-white font-Inter"
          >
            <p>Eng</p>
            <BsChevronDown />
          </button>

          <button
            type="button"
            className="text-[14px] flex items-center justify-center gap-2 text-white font-Inter"
          >
            <p>Location</p>
            <BsChevronDown />
          </button>
        </div>
      </div>

      <div className="lg:px-[150px] relative w-full px-6 bg-white flex items-center justify-between py-[15px]">
        <Link href="/">
          <Image src={logo} alt="logo" />
        </Link>
        <div className="lg:flex hidden items-center justify-center gap-8">
          <button
            type="button"
            className="flex items-center justify-center gap-2"
          >
            <p>Cartegory</p>
            <BsChevronDown />
          </button>

          <Link href="">
            <p>Deals</p>
          </Link>

          <Link className="whitespace-nowrap" href="">
            <p>Whats new</p>
          </Link>

          <Link href="">
            <p>Delivery</p>
          </Link>

          <div className="w-full relative">
            <span class="absolute inset-y-0 right-[20px] pl-2 flex items-center">
              <GoSearch />
            </span>
            <input
              className="border-solid placeholder:text-[14px] placeholder:font-Inter border-[1px] pl-[20px] pr-[50px] border-[#cccccc] h-[40px] rounded-[100px]"
              type="text"
              placeholder="Search product"
            />
          </div>
        </div>
        <div className="flex relative items-center justify-center gap-8">
          <button
            onClick={() => setAccountOpen(!accountOpen)}
            type="button"
            className="lg:flex hidden items-center justify-center gap-2"
          >
            <VscAccount />
            <p>Account</p>
            {accountOpen ? <BsChevronUp /> : <BsChevronDown />}
          </button>
          <button
            type="button"
            className="flex items-center justify-center gap-2"
          >
            <AiOutlineShoppingCart />
            <p>Cart</p>
          </button>
          {accountOpen && (
            <div className="absolute hidden lg:flex py-4 flex-col items-center justify-center bg-white shadow-md mt-[50px] rounded-[10px] top-0 right-[150px] left-0 min-w-[200px]">
              <div className="w-full flex flex-col items-center px-4 gap-8 justify-center">
                <div className="flex items-center justify-center w-[100%]">
                  <Button label="Sign in" variant="primary" size="sm" />
                </div>
                <Link className="flex items-center gap-2" href="">
                  {" "}
                  <PiBasket /> My Orders
                </Link>
                <Link className="flex items-center gap-2" href="">
                  {" "}
                  <AiOutlineHeart /> Saved Items
                </Link>
              </div>
            </div>
          )}
        </div>
        <button
          type="button"
          onClick={() => {
            setMenuOpen(!menuOpen);
            setAccountOpen(false);
          }}
          className="lg:hidden flex"
        >
          {menuOpen ? (
            <AiOutlineClose className="text-[30px]" />
          ) : (
            <AiOutlineMenu className="text-[30px]" />
          )}
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute lg:hidden shadow-md top-0 mt-[80px] min-w-[200px] left-0 right-0 px-6 rounded-[10px] bg-white">
            <div className="w-full flex flex-col items-center justify-center gap-8 py-8 text-primary">
              <Link href="">Deals</Link>
              <Link href="">Whats new</Link>
              <Link href="">Delivery</Link>
              <button
                onClick={() => setAccountOpen(!accountOpen)}
                className="flex items-center justify-center gap-2"
                type="button"
              >
                Account {accountOpen ? <BsChevronUp /> : <BsChevronDown />}
              </button>
              {accountOpen && (
                <div className="w-full flex flex-col items-center gap-8 justify-center">
                  <div className="flex items-center justify-center w-[100px]">
                    <Button label="Sign in" variant="primary" size="sm" />
                  </div>
                  <Link className="flex items-center gap-2" href="">
                    {" "}
                    <PiBasket /> My Orders
                  </Link>
                  <Link className="flex items-center gap-2" href="">
                    {" "}
                    <AiOutlineHeart /> Saved Items
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt1 } from "react-icons/hi";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-[#EEE5E9]">
      <h1 className="w-full text-3xl font-bold text-[#7AFDD6] ">REACT.</h1>
      <ul className="hidden md:flex space-x-6">
        <li className="hover:cursor-pointer hover:text-[#7AFDD6] hover:underline duration-500">
          Home
        </li>
        <li className="hover:cursor-pointer hover:text-[#7AFDD6] hover:underline duration-500">
          Company
        </li>
        <li className="hover:cursor-pointer hover:text-[#7AFDD6] hover:underline duration-500">
          Resources
        </li>
        <li className="hover:cursor-pointer hover:text-[#7AFDD6] hover:underline duration-500">
          About
        </li>
        <li className="hover:cursor-pointer hover:text-[#7AFDD6] hover:underline duration-500">
          Contact
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <HiMenuAlt1 size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#273043] ease-in-out duration-500 md:hidden"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#7AFDD6] m-4">REACT.</h1>
        <ul className="uppercase">
          <li className="p-4 hover:cursor-pointer hover:text-[#7AFDD6] border-b border-gray-600">
            Home
          </li>
          <li className="p-4 hover:cursor-pointer hover:text-[#7AFDD6] border-b border-gray-600">
            Company
          </li>
          <li className="p-4 hover:cursor-pointer hover:text-[#7AFDD6] border-b border-gray-600">
            Resources
          </li>
          <li className="p-4 hover:cursor-pointer hover:text-[#7AFDD6] border-b border-gray-600">
            About
          </li>
          <li className="p-4 hover:cursor-pointer hover:text-[#7AFDD6]">
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

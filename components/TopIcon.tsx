import Link from "next/link";
import React from "react";
import { FaCircleArrowUp } from "react-icons/fa6";

const TopIcon = () => {
  return (
    <Link href="#hero" className="fixed bottom-5 right-3 lg:bottom-10 lg:right-20 z-50">
      <FaCircleArrowUp size={40} className="text-orange-400 cursor-pointer hidden lg:flex"/>
      <FaCircleArrowUp size={30} className="text-orange-400 cursor-pointer lg:hidden"/>
    </Link>
  );
};

export default TopIcon;

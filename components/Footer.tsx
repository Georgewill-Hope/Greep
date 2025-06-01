import { navItems } from "@/data";
import Link from "next/link";
import React from "react";
import { BsArrowUpCircle } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="container mx-auto pt-8  md:pt-14 pb-14 flex flex-col gap-10 px-5 xl:px-0 border-slate-500/30 border-t-4" id="contact">
      <div className="flex items-center flex-wrap gap-5">
        <p className="text-xl md:text-3xl lg:text-5xl text-foreground break-all">
          georgewillhopeolilenya@gmail.com
        </p>
        <BsArrowUpCircle size={50} color="orange" className="hidden lg:block" />
        <BsArrowUpCircle size={30} color="orange" className=" lg:hidden" />
      </div>
      <div className="flex flex-wrap items-center gap-5 md:gap-20">
        {navItems.map((item) => (
          <Link href={item.path} key={item.id} className=" text-foreground">
            {item.title}
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;

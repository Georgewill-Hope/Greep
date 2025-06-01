"use client";

import Image from "next/image";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { IoCloseSharp } from "react-icons/io5";
import camera from "@/public/nav-image.webp";
import { useState } from "react";
import { navItems } from "@/data";
import { ModeToggle } from "./ToggleMode";

const DesktopNav = () => {
  return (
    <div className="hidden container mx-auto h-[90px] lg:flex items-center lg:px-10 xl:px-0  backdrop-blur sticky top-0 z-50">
      <Link href="#hero" className="text-orange-600 font-bold text-xl flex-1/4">
        GRE<span className="text-black">EP</span>
      </Link>
      <div className="flex items-center justify-start gap-20 flex-3/4">
        {navItems.map((item) => (
          <Link
            href={item.path}
            key={item.id}
            className="font-semibold text-orange-400"
          >
            {item.title}
          </Link>
        ))}
      </div>

      <ModeToggle />
    </div>
  );
};

const MobileNav = () => {
  const [showNav, setShowNav] = useState<boolean>(false);

  const toggleNavbar = () => {
    setShowNav(!showNav);
  };
  return (
    <div className="lg:hidden backdrop-blur sticky top-0 z-50">
      <div className="flex items-center justify-between w-full h-[80px] px-5">
        <Link href="#hero" className="text-orange-600 font-bold text-lg">
          GRE<span className="text-black">EP</span>
        </Link>
        <ModeToggle />
        <div className="cursor-pointer duration-500" onClick={toggleNavbar}>
          {showNav ? (
            <IoCloseSharp size={30} className="text-foreground" />
          ) : (
            <CiMenuFries size={30} className="text-foreground" />
          )}
        </div>
      </div>
      <div
        className={`h-[calc(100vh-80px)] w-full absolute duration-1000 ease-in-out bg-background flex flex-col ${
          showNav ? "-left-0" : "-left-[1026px]"
        }`}
      >
        <div className="flex flex-col gap-10 py-10 px-5">
          {navItems.map((item) => (
            <Link
              href={item.path}
              key={item.id}
              className="text-foreground text tracking-wide"
              onClick={toggleNavbar}
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className="relative flex-1 w-full">
          <Image
            src={camera}
            alt="camera"
            fill
            className="object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  return (
    <>
      <DesktopNav />
      <MobileNav />
    </>
  );
};

export default Navbar;

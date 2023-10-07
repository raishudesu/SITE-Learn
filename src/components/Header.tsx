import React from "react";
import NavMenu from "./NavMenu";
import { ModeToggle } from "./ModeToggle";
import Image from "next/image";
import Logo from "../assets/Logo.svg";
import AuthBtns from "./AuthBtns";
import Link from "next/link";
import Sidebar from "./Sidebar";

const Header = () => {
  return (
    <div className="w-full flex justify-center shadow-md">
      <header className="w-full max-w-screen-2xl flex justify-between items-center h-16 px-2">
        <div className="flex items-center gap-2">
          <Image src={Logo} alt="logo" className="max-w-[30px]" />
          <Link
            href={"/"}
            className="scroll-m-20 text-2xl font-bold tracking-tight transition-colors first:mt-0"
          >
            SITE Learn
          </Link>
        </div>
        <div className="hidden md:block">
          <NavMenu />
        </div>
        <div className="hidden md:flex gap-6">
          <AuthBtns />
          <ModeToggle />
        </div>
        <div className="md:hidden">
          <Sidebar />
        </div>
      </header>
    </div>
  );
};

export default Header;

import React from "react";
import { ModeToggle } from "./ModeToggle";
import Image from "next/image";
import Logo from "../assets/Logo.svg";
import Link from "next/link";
import Sidebar from "./Sidebar";
import UserDropdown from "./UserDropdown";
import ShowAuthBtns from "./ShowAuthBtns";
import MenuChange from "./MenuChange";

const Header = () => {
  return (
    <header className="bg-background w-full flex justify-center shadow-md dark:shadow-slate-800">
      <div className="w-full max-w-screen-2xl flex justify-between items-center h-16 px-2">
        <div className="flex items-center gap-2">
          <Image src={Logo} alt="logo" className="max-w-[30px]" />
          <Link
            href={"/"}
            className="scroll-m-20 text-2xl font-bold tracking-tight transition-colors first:mt-0"
          >
            <span className="text-[#16BC25]">SITE</span> Learn
          </Link>
        </div>
        <div className="hidden md:block">
          <MenuChange />
        </div>
        <div className="flex gap-2 items-center">
          <UserDropdown />
          <div className="hidden md:flex gap-6">
            <ShowAuthBtns />
            <ModeToggle />
          </div>
          <div className="md:hidden">
            <Sidebar />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

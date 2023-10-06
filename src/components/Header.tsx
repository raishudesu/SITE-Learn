"use client";

import React from "react";
import NavMenu from "./NavMenu";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { status } = useSession();

  const hideBtns = () => {
    if (
      pathname === "/signin" ||
      pathname === "/signup" ||
      status === "authenticated"
    ) {
      return "hidden";
    }
    if (pathname === "/") return "flex";
  };
  return (
    <div className="w-full flex justify-center shadow-md">
      <header className="w-full max-w-screen-2xl flex justify-evenly items-center h-16">
        <h1 className="scroll-m-20 text-2xl font-bold tracking-tight transition-colors first:mt-0">
          SITE-Learn
        </h1>
        <NavMenu />
        <div className="flex gap-6">
          <div className={`${hideBtns()} flex gap-2 `}>
            <Button onClick={() => router.replace("signin")}>Sign in</Button>
            <Button
              onClick={() => router.replace("signup")}
              variant={"outline"}
            >
              Sign up
            </Button>
          </div>
          <ModeToggle />
        </div>
      </header>
    </div>
  );
};

export default Header;

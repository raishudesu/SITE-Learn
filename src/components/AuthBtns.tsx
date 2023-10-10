"use client";

import { Button } from "./ui/button";
import { usePathname, useRouter } from "next/navigation";

const AuthBtns = () => {
  const router = useRouter();
  const pathname = usePathname();

  const hideBtns = () => {
    if (pathname === "/signin" || pathname === "/signup") {
      return "hidden";
    }
  };
  return (
    <div className={`${hideBtns()} flex flex-col md:flex-row gap-2 `}>
      <Button onClick={() => router.replace("signin")}>Sign in</Button>
      <Button onClick={() => router.replace("signup")} variant={"outline"}>
        Sign up
      </Button>
    </div>
  );
};

export default AuthBtns;

"use client";

import React from "react";
import { Button } from "./ui/button";
import { signOut, useSession } from "next-auth/react";
import { toast } from "./ui/use-toast";

const SignoutBtn = () => {
  const { status } = useSession();

  const hideBtn = () => {
    if (status !== "authenticated") {
      return "hidden";
    }
  };

  const successToast = () => {
    toast({
      title: "Logged out",
    });
  };

  const handleSignout = () => {
    signOut();
    successToast();
  };

  return (
    <span onClick={handleSignout} className={hideBtn()}>
      Sign out
    </span>
  );
};

export default SignoutBtn;

"use client";

import React from "react";
import { signOut } from "next-auth/react";
import { toast } from "./ui/use-toast";
import { LogOut } from "lucide-react";

const SignoutBtn = () => {
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
    <span
      onClick={handleSignout}
      className={`flex items-center cursor-pointer`}
    >
      <LogOut className="mr-2 h-4 w-4" />
      Sign out
    </span>
  );
};

export default SignoutBtn;

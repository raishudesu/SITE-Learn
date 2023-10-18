"use client";

import React from "react";
import SideNavMenu from "./SideNavMenu";
import { usePathname } from "next/navigation";
import HeaderNavMenu from "./HeaderNavMenu";

const MenuChange = () => {
  const pathname = usePathname();

  if (pathname !== "/") return <SideNavMenu />;
  return <HeaderNavMenu />;
};

export default MenuChange;

"use client";

import SearchBtn from "@/components/SearchBtn";
import { Input } from "@/components/ui/input";
import { usePathname } from "next/navigation";

const SearchBar = () => {
  const pathname = usePathname();

  if (pathname === "/") return null;
  return (
    <div className="w-full max-w-screen-sm flex gap-2">
      <Input placeholder="Search by tags" />
      <SearchBtn />
    </div>
  );
};

export default SearchBar;

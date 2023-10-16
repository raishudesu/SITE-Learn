"use client";

import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const SearchBtn = () => {
  const router = useRouter();

  return (
    <Button
      onClick={() => router.push("/search")}
      variant={"secondary"}
      className="px-3 rounded-full"
    >
      <Search />
    </Button>
  );
};

export default SearchBtn;

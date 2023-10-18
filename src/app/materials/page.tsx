"use client";

import { useState } from "react";
import SearchBar from "../search/components/SearchBar";
import MaterialCard from "./components/MaterialCard";
import UploadMaterial from "./components/UploadMaterial";
import { Button } from "@/components/ui/button";

const Materials = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <h1 className="text-2xl font-bold text-center text-[#16BC25]">
        Materials
      </h1>
      <SearchBar />
      {open && <UploadMaterial />}
      <Button onClick={() => setOpen(!open)}>Open</Button>
      {Array.from({ length: 3 }, (_, index) => (
        <MaterialCard key={index} />
      ))}
    </>
  );
};

export default Materials;

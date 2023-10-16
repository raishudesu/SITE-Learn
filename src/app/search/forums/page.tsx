import ForumCard from "@/app/forums/components/ForumCard";
import React from "react";

const SearchForums = () => {
  return (
    <>
      {Array.from({ length: 3 }, (_, index) => (
        <ForumCard key={index} />
      ))}
    </>
  );
};

export default SearchForums;

import React from "react";
import Hero from "./components/Hero";

const HomePage = () => {
  return (
    <div className="py-6 mx-auto max-w-screen-2xl px-6 flex flex-col items-center justify-center gap-24">
      <Hero />
    </div>
  );
};

export default HomePage;

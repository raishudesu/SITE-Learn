import React from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Community from "./components/Commuity";

const HomePage = () => {
  return (
    <div className="py-6 mx-auto max-w-screen-2xl px-6 flex flex-col items-center justify-center gap-24">
      <Hero />
      <Features />
      <Community />
    </div>
  );
};

export default HomePage;

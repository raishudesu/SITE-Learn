import React from "react";
import ChatField from "./components/ChatField";
import { Metadata } from "next";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "AI Chat",
};

const AiChat = () => {
  return (
    <section className="w-full min-h-[80vh] flex flex-col items-center gap-6 p-3">
      <h1 className="text-2xl font-bold text-center text-[#16BC25]">
        Assistant
      </h1>
      <div className="w-full max-w-screen-xl">
        <Separator />
      </div>
      <ChatField />
    </section>
  );
};

export default AiChat;

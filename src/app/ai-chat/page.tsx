import React from "react";
import ChatField from "./components/ChatField";

const AiChat = () => {
  return (
    <section className="min-h-[80vh] flex flex-col items-center gap-6 px-6 py-3">
      <h1 className="text-2xl font-bold text-center text-[#16BC25]">GPT 3.5</h1>
      <ChatField />
    </section>
  );
};

export default AiChat;

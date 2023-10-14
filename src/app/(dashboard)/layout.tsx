import { Metadata } from "next";
import ProfileCard from "./components/ProfileCard";
import { ReactNode } from "react";
import NavMenu from "@/components/NavMenu";

export const metadata: Metadata = {
  title: "Dashboard",
};

const Dashboard = ({ children }: { children: ReactNode }) => {
  return (
    <section className="min-h-[80vh] flex flex-col items-center gap-6 px-6 py-3">
      <h1 className="text-2xl font-bold text-center text-[#16BC25]">
        Dashboard
      </h1>
      <ProfileCard />
      <div>
        <NavMenu
          blogLink="/my-blogs"
          forumsLink="/my-forums"
          materialsLink="/my-materials"
        />
      </div>
      {children}
    </section>
  );
};

export default Dashboard;

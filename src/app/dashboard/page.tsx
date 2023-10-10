import { Metadata } from "next";
import Maintenance from "@/components/Maintenance";
import { getServerSession } from "next-auth";

export const metadata: Metadata = {
  title: "Dashboard",
};

const Dashboard = async () => {
  const session = await getServerSession();
  const user = session?.user?.name;
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center gap-6">
      <h1 className="text-2xl font-bold text-center">
        Welcome to your Dashboard,{" "}
        <span className="text-[#16BC25]">{user}</span>
      </h1>
      <Maintenance />
    </section>
  );
};

export default Dashboard;

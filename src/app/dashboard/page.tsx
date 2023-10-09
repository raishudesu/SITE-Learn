import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};

const Dashboard = async () => {
  return <section className="h-screen">You are authenticated</section>;
};

export default Dashboard;

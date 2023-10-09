import { Metadata } from "next";
import Construction from "../../assets/Construction.svg";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Dashboard",
};

const Dashboard = async () => {
  return (
    <section className="min-h-screen flex justify-center">
      <div className="flex flex-col items-center justify-center gap-6">
        <h1 className="text-3xl font-bold">Currently under development.</h1>
        <Image
          src={Construction}
          alt="construction"
          className="max-w-[500px]"
        />
      </div>
    </section>
  );
};

export default Dashboard;

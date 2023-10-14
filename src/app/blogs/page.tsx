import Maintenance from "@/components/Maintenance";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs",
};

const Blogs = () => {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center gap-6">
      <h1 className="text-2xl font-bold text-center">Blogs page</h1>
      <Maintenance />
    </section>
  );
};

export default Blogs;

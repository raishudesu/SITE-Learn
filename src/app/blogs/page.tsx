import { Metadata } from "next";
import BlogCard from "./components/BlogCard";

export const metadata: Metadata = {
  title: "Blogs",
};

const Blogs = () => {
  return (
    <section className="min-h-[80vh] flex flex-col items-center gap-6 px-6 py-6">
      <h1 className="text-2xl font-bold text-[#16BC25]">Blogs</h1>
      {Array.from({ length: 3 }, (_, index) => (
        <BlogCard key={index} />
      ))}
    </section>
  );
};

export default Blogs;

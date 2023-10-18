import { Separator } from "@/components/ui/separator";
import BlogCard from "./components/BlogCard";
import CreateBlogBtn from "./components/CreateBlogBtn";

const Blogs = () => {
  return (
    <>
      <h1 className="text-2xl font-bold text-[#16BC25]">Blogs</h1>
      <div className="w-full max-w-screen-sm">
        <Separator />
      </div>
      <CreateBlogBtn />
      {Array.from({ length: 3 }, (_, index) => (
        <BlogCard key={index} />
      ))}
    </>
  );
};

export default Blogs;

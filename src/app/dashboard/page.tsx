import BlogCard from "@/app/blogs/components/BlogCard";
import CreateBlogBtn from "./components/CreateBlogBtn";

const Blogs = () => {
  return (
    <>
      <h1 className="text-xl font-bold text-[#16BC25]">My Blogs</h1>
      <CreateBlogBtn />
      {Array.from({ length: 3 }, (_, index) => (
        <BlogCard key={index} />
      ))}
    </>
  );
};

export default Blogs;

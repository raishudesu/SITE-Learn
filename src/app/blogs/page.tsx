import BlogCard from "./components/BlogCard";

const Blogs = () => {
  return (
    <>
      <h1 className="text-2xl font-bold text-[#16BC25]">Blogs</h1>
      {Array.from({ length: 3 }, (_, index) => (
        <BlogCard key={index} />
      ))}
    </>
  );
};

export default Blogs;

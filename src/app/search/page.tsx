import BlogCard from "../blogs/components/BlogCard";

const SearchBlogs = () => {
  return (
    <>
      {Array.from({ length: 3 }, (_, index) => (
        <BlogCard key={index} />
      ))}
    </>
  );
};

export default SearchBlogs;

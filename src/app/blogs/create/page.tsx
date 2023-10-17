import { Metadata } from "next";
import CreateBlogForm from "./components/CreateBlogForm";

export const metadata: Metadata = {
  title: "Create blog",
};

const Create = () => {
  return (
    <>
      <CreateBlogForm />
    </>
  );
};

export default Create;

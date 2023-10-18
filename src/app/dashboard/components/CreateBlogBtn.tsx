"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const CreateBlogBtn = () => {
  const router = useRouter();

  return (
    <Button onClick={() => router.push("/blogs/create")}>Create blog</Button>
  );
};

export default CreateBlogBtn;

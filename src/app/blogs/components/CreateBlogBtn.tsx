"use client";

import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const CreateBlogBtn = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { status } = useSession();
  if (pathname !== "/blogs" || status !== "authenticated") return null;

  return (
    <Button
      className="hidden md:flex gap-6"
      onClick={() => router.push("blogs/create")}
    >
      Create blog
    </Button>
  );
};

export default CreateBlogBtn;

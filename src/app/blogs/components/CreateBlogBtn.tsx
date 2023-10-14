"use client";

import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const CreateBlogBtn = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { status } = useSession();
  if (pathname !== "/blogs") return null;

  const handleClick = () => {
    if (status === "authenticated") {
      router.push("blogs/create");
      return;
    }
    router.push("signin");
    toast({ title: "You must sign in first" });
  };

  return (
    <Button className="hidden md:flex gap-6" onClick={handleClick}>
      Create blog
    </Button>
  );
};

export default CreateBlogBtn;

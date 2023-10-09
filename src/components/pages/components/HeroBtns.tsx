"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const HeroBtns = () => {
  const router = useRouter();
  return (
    <div className="flex gap-4">
      <Button onClick={() => router.replace("signup")}>Get started</Button>
      <Button variant="outline" onClick={() => router.replace("blogs")}>
        Blogs
      </Button>
    </div>
  );
};

export default HeroBtns;

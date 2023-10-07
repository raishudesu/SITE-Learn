"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const HeroBtns = () => {
  const router = useRouter();
  return (
    <div className="flex gap-4">
      <Button>Get started</Button>
      <Button variant="outline" onClick={() => router.replace("signup")}>
        Register
      </Button>
    </div>
  );
};

export default HeroBtns;

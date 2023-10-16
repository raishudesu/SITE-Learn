"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";

const MaterialCard = () => {
  const router = useRouter();
  return (
    <Card
      className="w-full max-w-screen-sm hover:shadow-lg cursor-pointer dark:shadow-slate-800 transition ease-in-out"
      onClick={() => router.push("/materials/view")}
    >
      <CardHeader>
        <CardTitle>Material Name</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          Here goes material uploader&apos;s summary: Lorem ipsum dolor sit amet
          consectetur adipisicing elit.
        </p>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-6">
        <div className="flex flex-wrap gap-2">
          {Array.from({ length: 3 }, (_, index) => (
            <Badge key={index} variant={"secondary"}>
              {"Tag"}
              {index + 1}
            </Badge>
          ))}
        </div>
        <div className="w-full flex justify-between gap-3">
          <div className="flex gap-2  text-muted-foreground items-center">
            <Label>Author</Label>
            <Label>Posted date</Label>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default MaterialCard;

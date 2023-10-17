"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import sampleBlog from "@/lib/sampleBlog";
import { Heart } from "lucide-react";
import CommentSection from "@/components/CommentSection";
import AddComment from "@/components/AddComment";
import { useState } from "react";

const ViewBlog = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col gap-6 max-w-screen-lg ">
      <Card className="flex flex-col">
        <CardHeader>
          <CardTitle>
            Cybersecurity Challenges in Developing Nations: Safeguarding the
            Digital Frontier
          </CardTitle>
          <CardDescription>by Barysh</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="w-full flex flex-col gap-3">
            <Label>Posted date</Label>
            <div className="flex flex-wrap gap-2">
              {Array.from({ length: 3 }, (_, index) => (
                <Badge key={index} variant={"secondary"}>
                  {"Tag"}
                  {index + 1}
                </Badge>
              ))}
            </div>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: sampleBlog }}
            className="w-full mt-6 mb-6 gap-1 text-lg text-start dark:text-muted-foreground"
          />
        </CardContent>
        <CardFooter className="flex justify-between">
          <Label>SITE Learn @2023</Label>
          <div
            className="flex gap-2 items-center"
            onClick={() => setOpen(!open)}
          >
            <Heart size={20} />
            <Label>Comment</Label>
          </div>
        </CardFooter>
      </Card>
      {open && <AddComment />}
      <CommentSection />
    </div>
  );
};

export default ViewBlog;

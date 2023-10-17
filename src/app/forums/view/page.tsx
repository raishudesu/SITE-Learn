"use client";

import AddComment from "@/components/AddComment";
import CommentSection from "@/components/CommentSection";
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
import { Heart } from "lucide-react";
import React, { useState } from "react";

const ViewForum = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col gap-6 max-w-screen-lg ">
      <Card className="flex flex-col">
        <CardHeader>
          <CardTitle>What are your learning strategies?</CardTitle>
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
          <p className="mt-3">
            Veniam id tenetur molestias officia illum eos obcaecati ipsum
            perspiciatis? Dolore ipsam quaerat repellat eaque quasi?
          </p>
        </CardContent>
        <CardFooter className="flex justify-end">
          <div
            className="flex gap-2 items-center cursor-pointer"
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

export default ViewForum;

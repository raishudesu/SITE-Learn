"use client";

import dynamic from "next/dynamic";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MyFroalaEditor = dynamic(() => import("./MyFroalaEditor"), {
  ssr: false,
});

const CreateBlogForm = () => {
  return (
    <Card className="w-full max-w-screen-md border-none shadow-md dark:shadow-slate-800">
      <CardHeader>
        <CardTitle className="text-[#16BC25]">Create blog</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-3 items-center justify-center">
          <Input placeholder="Title" />
          <div className="w-full flex gap-1">
            <Input placeholder="Add tag" />
            <Button variant={"secondary"}>Add</Button>
          </div>
          <MyFroalaEditor />
          <Button className="self-end">Post</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default CreateBlogForm;

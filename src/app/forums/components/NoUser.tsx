import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

const NoUser = () => {
  return (
    <Card className="w-full max-w-screen-sm border-none shadow-md dark:shadow-slate-800">
      <CardHeader>
        <CardTitle className="text-3xl">Want to create a forum?</CardTitle>
        <CardDescription className="text-lg">
          Sign in or sign up to create one now.
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

export default NoUser;

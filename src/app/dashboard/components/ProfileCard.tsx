import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import ProfileAvatar from "./ProfileAvatar";
import { Label } from "@/components/ui/label";
import { getServerSession } from "next-auth";
import AvatarIcon from "@/components/Avatar";

const ProfileCard = async () => {
  const session = await getServerSession();
  const name = session?.user.name;
  const email = session?.user.email;
  return (
    <Card className="w-full max-w-screen-sm border-none shadow-md dark:shadow-slate-800">
      <CardHeader className="flex justify-center items-center">
        <AvatarIcon />
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center items-center">
        <Label className="text-muted-foreground">@{email}</Label>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;

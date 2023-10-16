import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const CommentCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Author</CardTitle>
        <CardDescription>Posted date</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="dark:text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, unde
          possimus itaque ut veniam enim natus et, magnam voluptatum, asperiores
          pariatur animi quaerat consequatur dolores?
        </p>
      </CardContent>
    </Card>
  );
};

export default CommentCard;

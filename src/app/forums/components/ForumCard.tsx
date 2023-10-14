import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Heart } from "lucide-react";

const ForumCard = () => {
  return (
    <Card className="w-full max-w-screen-sm">
      <CardHeader>
        <CardTitle>Forum title</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          mollitia quia debitis illum voluptatum iusto beatae impedit omnis
          adipisci magnam excepturi, quaerat suscipit nulla?
        </p>
      </CardContent>
      <CardFooter className="flex gap-2 justify-between">
        <div className="flex gap-2 text-muted-foreground">
          <Label>Author</Label>
          <Label>Posted date</Label>
        </div>
        <div className="flex gap-2 items-center">
          <Heart />
          <Label>Comment</Label>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ForumCard;

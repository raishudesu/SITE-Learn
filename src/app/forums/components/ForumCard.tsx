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
          <div className="flex gap-2 items-center">
            <Heart size={20} />
            <Label>Comment</Label>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ForumCard;

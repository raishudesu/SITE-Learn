import { Reply } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Label } from "./ui/label";
import { Button } from "./ui/button";

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
      <CardFooter className="flex justify-end">
        <Button className="flex items-center gap-1" variant={"secondary"}>
          <Reply size={20} />
          <Label>Reply</Label>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CommentCard;

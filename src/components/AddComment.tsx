import { SendHorizonal } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

const AddComment = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Comment</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2 items-center">
          <Textarea placeholder="Add comment" />
          <Button>
            <SendHorizonal />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AddComment;

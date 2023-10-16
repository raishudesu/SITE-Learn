import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Comment from "./Comment";

const BlogCommentCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Comments</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        {Array.from({ length: 3 }, (_, index) => (
          <Comment key={index} />
        ))}
      </CardContent>
    </Card>
  );
};

export default BlogCommentCard;

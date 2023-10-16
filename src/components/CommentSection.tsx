import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import CommentCard from "./CommentCard";

const CommentSection = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Comments</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        {Array.from({ length: 3 }, (_, index) => (
          <CommentCard key={index} />
        ))}
      </CardContent>
    </Card>
  );
};

export default CommentSection;

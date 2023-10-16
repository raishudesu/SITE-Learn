import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Comment = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Author</CardTitle>
        <CardDescription>Posted date</CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, unde
          possimus itaque ut veniam enim natus et, magnam voluptatum, asperiores
          pariatur animi quaerat consequatur dolores?
        </p>
      </CardContent>
    </Card>
  );
};

export default Comment;

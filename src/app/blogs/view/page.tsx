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
import sampleBlog from "@/lib/sampleBlog";

const ViewBlog = () => {
  return (
    <Card className="max-w-screen-lg flex flex-col">
      <CardHeader>
        <CardTitle>
          Cybersecurity Challenges in Developing Nations: Safeguarding the
          Digital Frontier
        </CardTitle>
        <CardDescription>by Barysh</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="w-full flex flex-col gap-3">
          <Label>Posted date</Label>
          <div className="flex flex-wrap gap-2">
            {Array.from({ length: 3 }, (_, index) => (
              <Badge key={index} variant={"secondary"}>
                {"Tag"}
                {index + 1}
              </Badge>
            ))}
          </div>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: sampleBlog }}
          className="w-full mt-6 mb-6 gap-1 text-lg text-start"
        />
      </CardContent>
      <CardFooter>
        <Label>SITE Learn @2023</Label>
      </CardFooter>
    </Card>
  );
};

export default ViewBlog;

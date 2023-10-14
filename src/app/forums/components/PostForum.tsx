import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const PostForum = () => {
  return (
    <Card className="w-full max-w-screen-sm mt-6">
      <CardHeader>
        <CardTitle>Create Forum</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-4">
          <Input placeholder="Title" />
          <Textarea placeholder="Type your forum here." />
          <Button type="submit" className="md:self-end">
            Post
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default PostForum;

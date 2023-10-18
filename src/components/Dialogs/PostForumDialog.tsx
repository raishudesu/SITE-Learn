import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";

const PostForumDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Create forum</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Post Forum</DialogTitle>
        </DialogHeader>
        <form className="flex flex-col gap-3">
          <Input placeholder="Title" />
          <Textarea placeholder="Content" />
          <Button type="submit" className="md:self-end">
            Post
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default PostForumDialog;

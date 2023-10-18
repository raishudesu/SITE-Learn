import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

const UploadMatDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Upload material</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Upload PDF material</DialogTitle>
          <DialogDescription>
            Make sure to include its references.
          </DialogDescription>
        </DialogHeader>
        <form className="w-full mt-3 flex flex-col gap-3">
          <Input placeholder="Title" />
          <Input placeholder="Reference/link" />
          <Input type="file" />
          <Button className="md:self-end ">Upload</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UploadMatDialog;

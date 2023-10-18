import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const UploadMaterial = () => {
  return (
    <Card className="w-full max-w-screen-sm">
      <CardHeader>
        <CardTitle>Upload material</CardTitle>
        <CardDescription>
          Fill up the fields below to upload a material.
        </CardDescription>
        <CardContent>
          <form className="w-full mt-3 flex flex-col gap-3">
            <Input placeholder="Material name" />
            <Input placeholder="Reference/link" />
            <Input type="file" />
            <Button className="md:self-end ">Upload</Button>
          </form>
        </CardContent>
      </CardHeader>
    </Card>
  );
};

export default UploadMaterial;

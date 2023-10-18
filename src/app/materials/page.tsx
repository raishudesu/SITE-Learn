import { Separator } from "@/components/ui/separator";
import MaterialCard from "./components/MaterialCard";
import UploadMatDialog from "@/components/Dialogs/UploadMatDialog";

const Materials = () => {
  return (
    <>
      <h1 className="text-2xl font-bold text-center text-[#16BC25]">
        Materials
      </h1>
      <div className="w-full max-w-screen-sm">
        <Separator />
      </div>
      <UploadMatDialog />
      {Array.from({ length: 3 }, (_, index) => (
        <MaterialCard key={index} />
      ))}
    </>
  );
};

export default Materials;

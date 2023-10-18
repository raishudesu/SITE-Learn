import MaterialCard from "@/app/materials/components/MaterialCard";
import UploadMatDialog from "@/components/Dialogs/UploadMatDialog";

const Materials = () => {
  return (
    <>
      <h1 className="text-xl font-bold text-[#16BC25]">My Materials</h1>
      <UploadMatDialog />
      {Array.from({ length: 3 }, (_, index) => (
        <MaterialCard key={index} />
      ))}
    </>
  );
};

export default Materials;

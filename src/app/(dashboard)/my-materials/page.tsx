import MaterialCard from "@/app/materials/components/MaterialCard";

const Materials = () => {
  return (
    <>
      <h1 className="text-xl font-bold">My materials</h1>
      {Array.from({ length: 3 }, (_, index) => (
        <MaterialCard key={index} />
      ))}
    </>
  );
};

export default Materials;

import MaterialCard from "./components/MaterialCard";

const Materials = () => {
  return (
    <>
      <h1 className="text-2xl font-bold text-center text-[#16BC25]">
        Materials
      </h1>
      {Array.from({ length: 3 }, (_, index) => (
        <MaterialCard key={index} />
      ))}
    </>
  );
};

export default Materials;

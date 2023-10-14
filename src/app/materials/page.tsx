import MaterialCard from "./components/MaterialCard";

const Materials = () => {
  return (
    <section className="min-h-[80vh] flex flex-col items-center gap-6 px-6 py-3">
      <h1 className="text-2xl font-bold text-center">Materials</h1>
      {Array.from({ length: 3 }, (_, index) => (
        <MaterialCard key={index} />
      ))}
    </section>
  );
};

export default Materials;

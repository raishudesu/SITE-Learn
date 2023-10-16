import MaterialCard from "@/app/materials/components/MaterialCard";

const SearchMaterials = () => {
  return (
    <>
      {Array.from({ length: 3 }, (_, index) => (
        <MaterialCard key={index} />
      ))}
    </>
  );
};

export default SearchMaterials;

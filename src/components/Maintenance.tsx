import Image from "next/image";
import Construction from "../assets/Construction.svg";

const Maintenance = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <h1 className="text-3xl text-center font-bold">
        This page is currently under development.
      </h1>
      <Image
        src={Construction}
        alt="construction"
        className="w-full max-w-[500px]"
      />
    </div>
  );
};

export default Maintenance;

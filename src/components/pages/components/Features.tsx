import React from "react";
import FeatureCard from "./FeatureCard";
import { featureList } from "@/lib/data";

const Features = () => {
  return (
    <div className="w-full flex justify-center items-center text-blue-gray-900 overflow-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-2">
        {featureList.map(({ icon, characteristic, description }, index) => (
          <FeatureCard
            icon={icon}
            characteristic={characteristic}
            description={description}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;

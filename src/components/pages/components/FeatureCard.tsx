import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TFeatureCard } from "@/lib/types";

const FeatureCard = ({ icon, characteristic, description }: TFeatureCard) => {
  return (
    <Card className="border-none shadow-md hover:shadow-lg dark:shadow-slate-700 cursor-pointer transition ease-in-out delay-75">
      <CardHeader>
        <CardTitle className="flex gap-1 items-center">
          <span className="text-2xl">{icon}</span>
          {characteristic}
        </CardTitle>
        <CardDescription className="text-md">{description}</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default FeatureCard;

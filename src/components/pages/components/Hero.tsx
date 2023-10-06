import { Button } from "@/components/ui/button";
import HeroImg from "../../../assets/Hero.svg";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full flex justify-center items-center text-blue-gray-900 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-center items-center gap-12">
        <div className="flex flex-col gap-6">
          <span className="text-5xl lg:text-7xl font-bold">
            Ask, Collaborate and Learn.
          </span>
          <span className="text-xl max-w-4/5">
            Enhance your learning development by collaborating with other
            aspiring students and professionals.
          </span>
          <div className="flex gap-4">
            <Button>Get started</Button>
            <Button variant="outline">Register</Button>
          </div>
        </div>
        <Image src={HeroImg} alt="heroimg" />
      </div>
    </div>
  );
};

export default Hero;

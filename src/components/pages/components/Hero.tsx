import HeroImg from "../../../assets/Hero.svg";
import Image from "next/image";
import HeroBtns from "./HeroBtns";

const Hero = () => {
  return (
    <div className="w-full flex justify-center items-center overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center items-center ">
        <div className="flex flex-col gap-6 ">
          <span className="text-5xl lg:text-7xl font-bold">
            Ask, Collaborate and Learn.
          </span>
          <span className="text-lg md:text-xl max-w-4/5 text-muted-foreground">
            Enhance your learning development by collaborating with other
            aspiring students and professionals.
          </span>
          <HeroBtns />
        </div>
        <Image src={HeroImg} alt="heroimg" />
      </div>
    </div>
  );
};

export default Hero;

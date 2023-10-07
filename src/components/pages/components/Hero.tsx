import HeroImg from "../../../assets/Hero.svg";
import Image from "next/image";
import HeroBtns from "./HeroBtns";

const Hero = () => {
  return (
    <div className="w-full flex justify-center items-center overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex flex-col gap-6">
          <span className="text-5xl lg:text-7xl font-bold">
            Ask, Collaborate and Learn.
          </span>
          <span className="text-lg md:text-xl max-w-4/5 text-muted-foreground">
            Enhance your learning development by collaborating with other
            aspiring students and professionals.
          </span>
          <HeroBtns />
        </div>
        <Image
          src={HeroImg}
          alt="heroimg"
          className="max-w-[300px] lg:max-w-none"
        />
      </div>
    </div>
  );
};

export default Hero;

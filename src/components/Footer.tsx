import Image from "next/image";
import Logo from "../assets/Logo.svg";

const Footer = () => {
  return (
    <footer className="h-20 bg-[#052e09] text-[#f0f0f0]">
      <div className="h-full w-full text-sm flex flex-col justify-center items-center gap-3 py-6  ">
        <div className="flex gap-2">
          <Image src={Logo} alt="logo" className="max-w-[30px]" />
          <p className="scroll-m-20 text-xl font-bold tracking-tight transition-colors first:mt-0 ">
            <span className="text-[#16BC25] font-bold">SITE</span>
            <span className="font-bold">X</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import Image from "next/image";
import Logo from "../assets/Logo.svg";

const Footer = () => {
  return (
    <footer className="h-40">
      <div className="h-full w-full flex flex-col justify-center items-center gap-4 py-6 bg-[#003300] text-gray-200 ">
        <div className="flex gap-2">
          <Image src={Logo} alt="logo" className="max-w-[30px]" />
          <p className="scroll-m-20 text-2xl font-bold tracking-tight transition-colors first:mt-0 ">
            SITE Learn
          </p>
        </div>
        <p>@SITE-Learn Community 2023</p>
        <p>All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

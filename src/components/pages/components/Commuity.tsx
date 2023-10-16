import CommunityImg from "../../../assets/Community.svg";
import Image from "next/image";

const Community = () => {
  return (
    <div
      id="community"
      className="w-full flex justify-center items-center text-blue-gray-900  overflow-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-16">
        <div className="">
          <Image src={CommunityImg} alt="communityimg" />
        </div>
        <div className="flex flex-col gap-6 ">
          <span className="text-3xl lg:text-4xl font-bold">
            Join the growing community.
          </span>
          <div className="text-muted-foreground max-w-7xl text-lg">
            <span className="text-md">
              Connect with fellow students, share your insights, and grow your
              skills in a collaborative space. At{" "}
              <span className="text-[#16BC25] font-bold">SITE-Learn</span>,
              we&apos;re more than just a community; we&apos;re a supportive
              network of IT enthusiasts on a mission to learn and innovate
              together. Join us today and be part of something bigger.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;

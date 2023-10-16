import PostForum from "./components/PostForum";
import ForumCard from "./components/ForumCard";
import NoUser from "./components/NoUser";
import { getServerSession } from "next-auth";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forums",
};

const Forums = async () => {
  const session = await getServerSession();
  return (
    <section className="min-h-[80vh] flex flex-col items-center gap-6 px-6 py-6">
      <h1 className="text-2xl font-bold text-[#16BC25]">Forums</h1>
      {session ? <PostForum /> : <NoUser />}

      {Array.from({ length: 3 }, (_, index) => (
        <ForumCard key={index} />
      ))}
    </section>
  );
};

export default Forums;

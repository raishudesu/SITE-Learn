import ForumCard from "./components/ForumCard";
import NoUser from "./components/NoUser";
import { getServerSession } from "next-auth";
import { Metadata } from "next";
import PostForumDialog from "@/components/Dialogs/PostForumDialog";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Forums",
};

const Forums = async () => {
  const session = await getServerSession();
  return (
    <>
      <h1 className="text-2xl font-bold text-[#16BC25]">Forums</h1>
      <div className="w-full max-w-screen-sm">
        <Separator />
      </div>
      {session ? <PostForumDialog /> : <NoUser />}
      {Array.from({ length: 3 }, (_, index) => (
        <ForumCard key={index} />
      ))}
    </>
  );
};

export default Forums;

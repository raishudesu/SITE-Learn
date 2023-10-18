import PostForum from "./components/PostForum";
import ForumCard from "./components/ForumCard";
import NoUser from "./components/NoUser";
import { getServerSession } from "next-auth";
import { Metadata } from "next";
import SearchBar from "../search/components/SearchBar";
import PostForumDialog from "@/components/Dialogs/PostForumDialog";

export const metadata: Metadata = {
  title: "Forums",
};

const Forums = async () => {
  const session = await getServerSession();
  return (
    <>
      <h1 className="text-2xl font-bold text-[#16BC25]">Forums</h1>
      <SearchBar />
      {session ? <PostForumDialog /> : <NoUser />}
      {Array.from({ length: 3 }, (_, index) => (
        <ForumCard key={index} />
      ))}
    </>
  );
};

export default Forums;

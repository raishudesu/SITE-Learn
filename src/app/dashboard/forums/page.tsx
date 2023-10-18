import ForumCard from "@/app/forums/components/ForumCard";
import PostForumDialog from "@/components/Dialogs/PostForumDialog";

const Forums = () => {
  return (
    <>
      <h1 className="text-xl font-bold text-[#16BC25]">My Forums</h1>
      <PostForumDialog />
      {Array.from({ length: 3 }, (_, index) => (
        <ForumCard key={index} />
      ))}
    </>
  );
};

export default Forums;

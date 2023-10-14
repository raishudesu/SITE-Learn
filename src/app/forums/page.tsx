import Maintenance from "@/components/Maintenance";
import PostForum from "./components/PostForum";
import ForumCard from "./components/ForumCard";

const Forums = () => {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center gap-6 px-6">
      <PostForum />
      <ForumCard />
      <Maintenance />
    </section>
  );
};

export default Forums;

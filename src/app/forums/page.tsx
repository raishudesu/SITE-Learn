import PostForum from "./components/PostForum";
import ForumCard from "./components/ForumCard";
import NoUser from "./components/NoUser";
import { getServerSession } from "next-auth";

const Forums = async () => {
  const session = await getServerSession();
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center gap-6 px-6 py-6">
      <h1 className="text-2xl font-bold">Forums</h1>
      {session ? <PostForum /> : <NoUser />}

      {Array.from({ length: 3 }, (_, index) => (
        <ForumCard key={index} />
      ))}
    </section>
  );
};

export default Forums;

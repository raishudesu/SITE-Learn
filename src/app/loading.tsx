import { TbLoaderQuarter } from "react-icons/tb";

const Loading = () => {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <main className="h-4/5 flex justify-center items-center">
      <div className="animate-spin">
        <TbLoaderQuarter size={30} />
      </div>
    </main>
  );
};

export default Loading;

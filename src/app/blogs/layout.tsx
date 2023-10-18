import SideNavMenu from "@/components/SideNavMenu";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Blogs",
};

const BlogsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section className="w-full max-w-screen-2xl min-h-[80vh] flex flex-col items-center gap-6 p-3">
      {children}
    </section>
  );
};

export default BlogsLayout;

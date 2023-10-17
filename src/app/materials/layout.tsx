import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Materials",
};

const MaterialsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section className="min-h-[80vh] flex flex-col items-center gap-6 p-3">
      {children}
    </section>
  );
};

export default MaterialsLayout;

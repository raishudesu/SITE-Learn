import { ReactNode } from "react";

const MaterialsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section className="min-h-[80vh] flex flex-col items-center gap-6 p-3">
      {children}
    </section>
  );
};

export default MaterialsLayout;

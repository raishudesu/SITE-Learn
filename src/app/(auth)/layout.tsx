import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

const AuthLayout = async ({ children }: { children: ReactNode }) => {
  const session = await getServerSession();
  if (session) redirect("/dashboard");
  return (
    <section className="min-h-[80vh] w-full flex justify-center items-center p-3">
      <div className="w-full max-w-screen-2xl flex flex-col gap-8 justify-center items-center">
        <h1 className="text-3xl text-center font-bold tracking-tight lg:text-4xl">
          Start your learning journey.
        </h1>
        {children}
      </div>
    </section>
  );
};

export default AuthLayout;

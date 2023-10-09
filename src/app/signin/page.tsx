import SigninForm from "@/components/Forms/SigninForm";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Sign in",
};

const Signin = async () => {
  const session = await getServerSession();
  if (session) redirect("/dashboard");
  return (
    <section className="min-h-[80vh] w-full flex justify-center items-center">
      <div className="w-full max-w-screen-2xl flex justify-center">
        <SigninForm />
      </div>
    </section>
  );
};

export default Signin;

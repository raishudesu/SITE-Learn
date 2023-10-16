import SigninForm from "@/app/(auth)/components/SigninForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in to SITE Learn",
};

const Signin = () => {
  return (
    <div className="w-full max-w-sm">
      <SigninForm />
    </div>
  );
};

export default Signin;

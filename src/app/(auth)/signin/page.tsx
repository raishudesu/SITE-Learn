import SigninForm from "@/app/(auth)/components/SigninForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in to SITE Learn",
};

const Signin = () => {
  return <SigninForm />;
};

export default Signin;

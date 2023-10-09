import SigninForm from "@/components/Forms/SigninForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign in",
};

const Signin = () => {
  return <SigninForm />;
};

export default Signin;

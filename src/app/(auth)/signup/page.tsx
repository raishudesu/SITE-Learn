import RegisterForm from "@/app/(auth)/components/RegisterForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign up",
  description: "Sign up to SITE Learn",
};

const Signup = () => {
  return <RegisterForm />;
};

export default Signup;

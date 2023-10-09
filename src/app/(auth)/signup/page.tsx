import RegisterForm from "@/components/Forms/RegisterForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign up",
};

const Signup = () => {
  return <RegisterForm />;
};

export default Signup;

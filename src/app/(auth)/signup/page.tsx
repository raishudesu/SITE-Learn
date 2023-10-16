import RegisterForm from "@/app/(auth)/components/RegisterForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign up",
  description: "Sign up to SITE Learn",
};

const Signup = () => {
  return (
    <div className="w-full max-w-sm">
      <RegisterForm />
    </div>
  );
};

export default Signup;

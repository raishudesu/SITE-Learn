import SigninForm from "@/components/Forms/SigninForm";
import React from "react";

const Signin = () => {
  return (
    <section className="w-full flex justify-center items-center h-4/5">
      <div className="w-full max-w-screen-2xl flex justify-center">
        <SigninForm />
      </div>
    </section>
  );
};

export default Signin;

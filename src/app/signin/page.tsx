import SigninForm from "@/components/Forms/SigninForm";

const Signin = () => {
  return (
    <section className="min-h-[80vh] w-full flex justify-center items-center">
      <div className="w-full max-w-screen-2xl flex justify-center">
        <SigninForm />
      </div>
    </section>
  );
};

export default Signin;

import RegisterForm from "@/components/Forms/RegisterForm";

const Signup = () => {
  return (
    <section className="min-h-[80vh] w-full flex justify-center items-center">
      <div className="w-full max-w-screen-2xl flex justify-center">
        <RegisterForm />
      </div>
    </section>
  );
};

export default Signup;

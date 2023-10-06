"use client";

import Link from "next/link";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { signUp } from "../../stores/useAuth";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { TSignup } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignupSchema } from "@/lib/authSchemas";
import { useToast } from "../ui/use-toast";
import { useState } from "react";

const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TSignup>({
    resolver: zodResolver(SignupSchema),
    defaultValues: {
      name: "",
      email: "", // Set your default email value here
      pwd: "", // Set your default password value here
      confirmPwd: "",
    },
  });

  const failedToast = (msg: string) => {
    toast({
      variant: "destructive",
      title: "Uh oh! Something went wrong.",
      description: msg,
    });
  };

  const successToast = (msg: string) => {
    toast({
      title: "Success!",
      description: msg,
    });
  };

  const formSubmit = async (data: TSignup) => {
    try {
      setLoading(true);
      const { name, email, pwd, confirmPwd } = data;

      const res = await signUp(name, email, "member", pwd, confirmPwd);
      if (!res.success) {
        failedToast(res.msg);
        return;
      }

      successToast(res.msg);
      router.replace("dashboard");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <form onSubmit={handleSubmit(formSubmit)} className="flex flex-col gap-4">
        <Label className="text-2xl">Sign up</Label>
        <Input
          {...register("name")}
          type="text"
          placeholder="Username"
          disabled={loading}
        />
        {errors.name && (
          <span className="text-red-500 text-sm">{errors.name.message}</span>
        )}
        <Input
          {...register("email")}
          type="text"
          placeholder="Email"
          disabled={loading}
        />
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email.message}</span>
        )}
        <Input
          {...register("pwd")}
          type="password"
          placeholder="Password"
          disabled={loading}
        />
        {errors.pwd && (
          <span className="text-red-500 text-sm">{errors.pwd.message}</span>
        )}
        <Input
          {...register("confirmPwd")}
          type="password"
          placeholder="Confirm password"
          disabled={loading}
        />
        {errors.confirmPwd && (
          <span className="text-red-500 text-sm">
            {errors.confirmPwd.message}
          </span>
        )}
        <Button type="submit">Sign up</Button>
      </form>
      <Label>
        Have an account? <Link href={"/signin"}>Sign in</Link>
      </Label>
    </div>
  );
};

export default RegisterForm;

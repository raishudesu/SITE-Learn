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
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

const RegisterForm = () => {
  const router = useRouter();
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
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
    }
  };

  return (
    <Card className="border-none shadow-md dark:shadow-slate-700">
      <CardHeader>
        <CardTitle>Sign up</CardTitle>
        <CardDescription>Enter your credentials</CardDescription>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={handleSubmit(formSubmit)}
          className="flex flex-col gap-3 w-80"
        >
          <Input
            {...register("name")}
            type="text"
            placeholder="Username"
            disabled={isSubmitting}
          />
          {errors.name && (
            <span className="text-red-500 text-sm">{errors.name.message}</span>
          )}
          <Input
            {...register("email")}
            type="text"
            placeholder="Email"
            disabled={isSubmitting}
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
          <Input
            {...register("pwd")}
            type="password"
            placeholder="Password"
            disabled={isSubmitting}
          />
          {errors.pwd && (
            <span className="text-red-500 text-sm">{errors.pwd.message}</span>
          )}
          <Input
            {...register("confirmPwd")}
            type="password"
            placeholder="Confirm your password"
            disabled={isSubmitting}
          />
          {errors.confirmPwd && (
            <span className="text-red-500 text-sm">
              {errors.confirmPwd.message}
            </span>
          )}
          <Button type="submit" disabled={isSubmitting}>
            Sign up
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex gap-1">
        <Label className="text-muted-foreground">Have an account?</Label>
        <Link
          href={"/signin"}
          className="text-sm hover:underline font-semibold"
        >
          Sign in
        </Link>
      </CardFooter>
    </Card>
  );
};

export default RegisterForm;

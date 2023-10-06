"use client";

import Link from "next/link";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { TSignin } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { SigninSchema } from "@/lib/authSchemas";
import { toast } from "../ui/use-toast";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

const SigninForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TSignin>({
    resolver: zodResolver(SigninSchema),
    defaultValues: {
      email: "", // Set your default email value here
      pwd: "", // Set your default password value here
    },
  });

  const failedToast = () => {
    toast({
      variant: "destructive",
      title: "Uh oh! Something went wrong.",
      description: "Please try again later.",
    });
  };

  const successToast = () => {
    toast({
      title: "Success!",
      description: "Logged in successfully.",
    });
  };

  const formSubmit = async (data: TSignin) => {
    const { email, pwd } = data;
    try {
      const res = await signIn("credentials", {
        email,
        pwd,
        redirect: false,
      });

      if (res?.error) {
        failedToast();
        return;
      }

      successToast();
      router.replace("dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card className="border-none shadow-md dark:shadow-slate-600">
      <CardHeader>
        <CardTitle>Sign in</CardTitle>
        <CardDescription>Enter your credentials</CardDescription>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={handleSubmit(formSubmit)}
          className="flex flex-col gap-4 w-80"
        >
          <Input {...register("email")} type="text" placeholder="Email" />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
          <Input {...register("pwd")} type="password" placeholder="Password" />
          {errors.pwd && (
            <span className="text-red-500 text-sm">{errors.pwd.message}</span>
          )}
          <Button type="submit">Sign in</Button>
        </form>
      </CardContent>
      <CardFooter className="flex gap-1">
        <Label className="text-muted-foreground">
          Doesn&apos;t have an account?
        </Label>
        <Link href={"/signup"} className="text-sm hover:underline">
          Sign up
        </Link>
      </CardFooter>
    </Card>
  );
};

export default SigninForm;

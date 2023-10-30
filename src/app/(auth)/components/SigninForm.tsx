"use client";

import Link from "next/link";
import { Label } from "../../../components/ui/label";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { TSignin } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { signinSchema } from "@/lib/authSchemas";
import { toast } from "../../../components/ui/use-toast";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";

const SigninForm = () => {
  const router = useRouter();
  const query = useSearchParams();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TSignin>({
    resolver: zodResolver(signinSchema),
    defaultValues: {
      email: "", // Set your default email value here
      pwd: "", // Set your default password value here
    },
  });

  const failedToast = (msg: string) => {
    toast({
      variant: "destructive",
      title: "Uh oh! Something went wrong.",
      description: msg || "Please try again later",
    });
  };

  const successToast = () => {
    toast({
      title: "Success!",
      description: "Logged in successfully.",
    });
  };

  const formSubmit = async (data: TSignin) => {
    try {
      const { email, pwd } = data;

      // IF THE UNAUTHENTICATED USER ACCESSED A PROTECTED ROUTE,
      // THEY WILL BE REDIRECTED TO SIGN IN PAGE AND THE PREV
      // PROTECTED ROUTE WILL BE SAVED IN useSearchParams--callbackUrl
      // WHICH CAN BE USED TO REDIRECT BACK THE USER TO THE PROTECTED ROUTE
      // AFTER THEY LOG IN
      const searchParams = query.get("callbackUrl") as string;

      const res = await signIn("credentials", {
        email,
        pwd,
        redirect: false,
      });

      if (res?.error) {
        failedToast(res.error);
        return null;
      }

      successToast();

      router.refresh();
      // REDIRECT USER BACK TO PROTECTED ROUTE
      if (res?.ok) {
        console.log(searchParams);
        if (searchParams) {
          router.push(query.get("callbackUrl") as string);

          // THE DEFAULT REDIRECT TO DASHBOARD
        } else {
          router.push("/dashboard");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card className="border-none shadow-md dark:shadow-slate-800">
      <CardHeader>
        <CardTitle>Sign in</CardTitle>
        <CardDescription>Enter your credentials</CardDescription>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={handleSubmit(formSubmit)}
          className="w-full flex flex-col gap-3"
        >
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
          <Button type="submit" disabled={isSubmitting}>
            Sign in
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex gap-1">
        <Label className="text-muted-foreground">
          Doesn&apos;t have an account?
        </Label>
        <Link
          href={"/signup"}
          className="text-sm hover:underline font-semibold"
        >
          Sign up
        </Link>
      </CardFooter>
    </Card>
  );
};

export default SigninForm;

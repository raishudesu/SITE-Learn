import { z } from "zod";

export const signinSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Enter a valid email" }),
  pwd: z
    .string({ required_error: "Password is required" })
    .min(6, { message: "Password should be at least 6 characters long" }),
});

export const signupSchema = z
  .object({
    name: z
      .string({ required_error: "Name is required" })
      .min(3, { message: "Name should be atleast 3 characters long" })
      .max(50, { message: "Name should be less than 50 characters" }),
    email: z
      .string({ required_error: "Email is required" })
      .email({ message: "Enter a valid email" }),
    isAdmin: z.boolean({ required_error: "isAdmin property is required" }),
    pwd: z
      .string({ required_error: "Password is required" })
      .min(6, { message: "Password should be at least 6 characters long" }),
    confirmPwd: z
      .string({ required_error: "Confirm your password" })
      .min(6, { message: "Passwords do not match" }),
  })
  .refine((data) => data.pwd === data.confirmPwd, {
    path: ["confirmPwd"],
    message: "Passwords do not match",
  });

export const profileFormSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .max(30, {
      message: "Username must not be longer than 30 characters.",
    }),
  email: z
    .string({
      required_error: "Please select an email to display.",
    })
    .email(),
  bio: z.string().max(160).min(4),
  urls: z
    .array(
      z.object({
        value: z.string().url({ message: "Please enter a valid URL." }),
      })
    )
    .optional(),
});

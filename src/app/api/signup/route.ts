import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import User from "@/models/User/user";
import connectDB from "@/lib/mongodb";
import { signupSchema } from "@/lib/authSchemas";

export const POST = async (req: NextRequest) => {
  try {
    const data = signupSchema.parse(await req.json()); //MIDDLEWARE FOR VALIDATING REGISTER DATA

    const { name, email, isAdmin, isVerified, pwd, confirmPwd } = data;

    const hashedPwd = await bcrypt.hash(pwd, 10);

    await connectDB();

    const user = await User.findOne({ email });
    if (user)
      return NextResponse.json(
        {
          success: false,
          msg: "User already exists",
        },
        { status: 400 }
      );

    if (pwd !== confirmPwd) {
      return NextResponse.json(
        {
          success: false,
          msg: "Passwords do not match",
        },
        { status: 400 }
      );
    }

    const res = await User.create({
      name,
      email,
      isAdmin,
      isVerified,
      password: hashedPwd,
    });

    console.log(res);

    return NextResponse.json(
      {
        success: true,
        msg: "User registered",
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        msg: "Internal server error",
        error,
      },
      { status: 500 }
    );
  }
};

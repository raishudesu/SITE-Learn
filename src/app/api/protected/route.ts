import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { NextResponse } from "next/server";

export const GET = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ msg: "Unauthorized" }, { status: 401 });
  }
  return NextResponse.json({ msg: "Authorized" }, { status: 200 });
};

import { connect } from "@/utils/config/dbconfig";
import User from "@/utils/models/user";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { name, email } = await request.json();
  await connect();
  await User.create({ name, email });
  return NextResponse.json({ message: "User Registered" }, { status: 201 });
}
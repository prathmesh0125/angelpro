import { connect } from "@/utils/config/dbconfig";
import User from "@/utils/models/user";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { name, email, transaction_id, amount } = await request.json();
  await connect();
  await User.create({ name, email, transaction_id, amount});
  return NextResponse.json({ message: "User Registered" }, { status: 201 });
}
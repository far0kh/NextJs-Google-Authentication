import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { name, email } = await request.json();
    await connectMongoDB();
    const userExists = await User.findOne({ email });
    if (!userExists) {
      await User.create({ name, email });
      return NextResponse.json({ message: "The user Registered." }, { status: 201 });
    } else {
      return NextResponse.json({ message: "The user is already registered." }, { status: 202 });
    }
  } catch (error) {
    console.log(error);
  }
}

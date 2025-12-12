import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import Project from "@/database/projectSchema";

export async function POST(req: NextRequest,{params}: {params: Promise<{ slug: string }>}) {
  const {slug} = await params; 
  await connectDB();

  const body = await req.json(); 
  const user = body.user;
  const comment = body.comment;

  if (!user || !comment) {
    return NextResponse.json("Missing fields");
  }

  const newComment = { user, comment, time: new Date() };

  await Project.updateOne(
    { slug },
    { $push: { comments: newComment } }
  );

  return NextResponse.json("Comment added");
}

import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import ProjectSchema from "@/database/projectSchema";

export async function GET(req: NextRequest, {params}: {params: Promise<{ slug: any }>}) {
  await connectDB();

  const { slug } = await params;
  try {
    const project = await ProjectSchema.findOne({ slug }).lean();
    return NextResponse.json(project);
  } catch (err) {
    return NextResponse.json("Project not found.", { status: 404 });
  }
}


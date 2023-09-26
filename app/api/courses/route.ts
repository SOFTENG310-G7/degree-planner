import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const supabase = createRouteHandlerClient(
    { cookies },
    { supabaseKey: process.env.SUPABASE_SERVICE_KEY },
  );
  const { searchParams } = new URL(request.url);
  const subject = searchParams.get("subject");
  const title = searchParams.get("title");
  const catalog_number = searchParams.get("catalog_number");
  const has_requirements = searchParams.get("has_requirements");
  const academic_group = searchParams.get("academic_group");
  const size = searchParams.get("size");
  const textSearch = searchParams.get("textSearch");

  let query = supabase.from("courses").select();

  if (size) {
    query = query.limit(parseInt(size));
  }

  if (textSearch) {
    query = query.or(`course_code.ilike.%${textSearch}%,description.ilike.%${textSearch}%`);

    const data = await query;

    return NextResponse.json(data.data, { status: 200 });
  }

  if (subject) {
    query = query.ilike("subject", `%${subject}%`);
  }

  if (title) {
    query = query.ilike("title", `%${title}%`);
  }

  if (catalog_number) {
    query = query.eq("catalog_number", catalog_number);
  }

  if (has_requirements) {
    if (has_requirements === "false") {
      query = query.or("requirement_description.is.null,requirement_description.eq..");
    } else if (has_requirements === "true") {
      query = query.neq("requirement_description", ".").neq("requirement_description", null);
    }
  }

  if (academic_group) {
    query = query.eq("academic_group", academic_group);
  }

  const data = await query;

  return NextResponse.json(data.data, { status: 200 });
}

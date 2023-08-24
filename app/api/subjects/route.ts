import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const supabase = createRouteHandlerClient({ cookies }, { supabaseKey: process.env.SUPABASE_SERVICE_KEY });

  const { data } = await supabase
    .from("subjects")
    .select();

  return NextResponse.json(data, { status: 200 });
}

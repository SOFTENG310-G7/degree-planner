import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const supabase = createRouteHandlerClient({ cookies }, { supabaseKey: process.env.SUPABASE_SERVICE_KEY });
    const {searchParams} = new URL(request.url);
    const subject = searchParams.get("subject");
    const title = searchParams.get("title");
    const catalog_number = searchParams.get("catalog_number");
    const has_requirements = searchParams.get("has_requirements");
    const academic_group = searchParams.get("academic_group");

    if(subject){
        const { data } = await supabase
            .from("courses")
            .select()
            .eq("subject", subject);
        return NextResponse.json(data, { status: 200 });
    }

    if(title){
        const { data } = await supabase
            .from("courses")
            .select()
            .ilike("title", `%${title}%`);
        return NextResponse.json(data, { status: 200 });
    }

    if(catalog_number){
        const { data } = await supabase
            .from("courses")
            .select()
            .eq("catalog_number", catalog_number);
        return NextResponse.json(data, { status: 200 });
    }

    if(has_requirements){
        if (has_requirements === "false"){
            const { data } = await supabase
                .from("courses")
                .select()
                .is("requirement_description", null);
            return NextResponse.json(data, { status: 200 });
        }
        else if (has_requirements === "true"){
            const { data } = await supabase
                .from("courses")
                .select()
                .neq("requirement_description", null);
            return NextResponse.json(data, { status: 200 });
        }
    }

    if(academic_group){
        const { data } = await supabase
            .from("courses")
            .select()
            .eq("academic_group", academic_group);
        return NextResponse.json(data, { status: 200 });
    }

  const { data } = await supabase
    .from("courses")
    .select();

  return NextResponse.json(data, { status: 200 });
}

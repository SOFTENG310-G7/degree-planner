import { UOA_ENGINEERING_API, getOAuthToken } from "@/utils/UoAAPI";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const initializeCourses = async () => {
  const supabase = createRouteHandlerClient({ cookies }, { supabaseKey: process.env.SUPABASE_SERVICE_KEY });

  const access_token = await getOAuthToken();

  let engineering_courses = await (
    
    await fetch(UOA_ENGINEERING_API, {
      headers: {
        authorization: `Bearer ${access_token}`,
        accept: "*/*",
      },
    })
  ).json();

  const courses = engineering_courses.data;
  const { data } = await supabase
    .from("courses")
    .insert(
      courses.map((course: any) => {
        return {
            title:course.titleLong,
            subject:course.subject,
            description:course.description,
            academic_group:course.acadGroup,
            catalog_number:course.catalogNbr,
            requirement_description:course.rqrmntDescr,
        }
      }),
    )
    .select();
  return NextResponse.json(data, { status: 200 });
}
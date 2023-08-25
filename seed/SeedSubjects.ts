import { UOA_SUBJECTS_API, getOAuthToken } from "@/utils/UoAAPI";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const initializeSubjects = async () => {
  const supabase = createRouteHandlerClient({ cookies }, { supabaseKey: process.env.SUPABASE_SERVICE_KEY });

  const access_token = await getOAuthToken();

  const subject_results = await (
    await fetch(UOA_SUBJECTS_API, {
      headers: {
        authorization: `Bearer ${access_token}`,
        accept: "*/*",
      },
    })
  ).json();

  const subject_DBO = Object.entries(subject_results).map(
    ([subject, common_name], i) => {
      return {
        subject,
        common_name,
      }
    }
  )

  const { data } = await supabase
    .from("subjects")
    .upsert(
      subject_DBO,
      { onConflict: "subject" },
    )
    .select();

  return NextResponse.json(data, { status: 200 });
}
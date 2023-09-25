import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

export async function PUT(request: Request) {
  try {
    const supabase = createRouteHandlerClient(
      { cookies },
      { supabaseKey: process.env.SUPABASE_SERVICE_KEY }
    );

    const input = await request.json();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return new Response("User not found.", { status: 400 });
    }

    const { rating, courseId } = input;

    // Update the rating in Supabase table based on courseId and profileId
    const { error } = await supabase.from("reviews")
        .update({ rating: rating })
        .eq("course_id", courseId)
        .eq("profile_id", user?.id)
        .select();

    if (error) {
      return new Response("Error updating rating", { status: 500 });
    }

    return new Response("Rating updated successfully", { status: 200 });
  } catch (error) {
    console.error("Error while handling PUT request:", error);
    return new Response("Error", { status: 500 });
  }
}

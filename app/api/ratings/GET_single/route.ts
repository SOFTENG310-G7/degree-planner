import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  try {
    // Initialize Supabase client
    const supabase = createRouteHandlerClient(
      { cookies }, 
      { supabaseKey: process.env.SUPABASE_SERVICE_KEY }
    );

    const { searchParams } = new URL(request.url);


    const {
      data: { user },
    } = await supabase.auth.getUser();

    const courseId = searchParams.get("courseId");

    // Query the Supabase table to retrieve the rating
    let { data, error } = await supabase
      .from("reviews")
      .select("rating")
      .eq("course_id", courseId)
      .eq("profile_id", user?.id)
        .single();

    if (error) {
      console.error("Rating not found", error);
      return new Response("Rating not found", { status: 404 });
    }

    if (!data) {
      // Rating not found
      return new Response("Rating not found", { status: 404 });
    }

    const { rating } = data;
    
    // Return the rating as a JSON response
    return new Response(JSON.stringify({ rating }), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Error while handling GET request:", error);
    return new Response("Error", { status: 500 });
  }
}

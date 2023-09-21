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

    const courseId = searchParams.get("courseId");

    // Query the Supabase table to retrieve the rating
    let { data: ratings, error } = await supabase
      .from("reviews")
      .select("rating")
      .eq("course_id", courseId);

    if (error) {
      console.error("Rating not found", error);
      return new Response("Rating not found", { status: 404 });
    }

    //calculate average rating
    let sum = 0;
    let averageRating = 0;
    let numberOfRatings = 0;
    if (ratings) {
      for (const rating of ratings) {
        sum += rating.rating;
      }
      numberOfRatings = ratings.length;
      averageRating = parseFloat((sum / ratings.length).toFixed(2));
    }

    // Return the rating as a JSON response
    return new Response(JSON.stringify({ averageRating, numberOfRatings }), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Error while handling GET request:", error);
    return new Response("Error", { status: 500 });
  }
}

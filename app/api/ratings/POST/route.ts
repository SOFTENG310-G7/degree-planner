import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const supabase = createRouteHandlerClient(
      { cookies },
      { supabaseKey: process.env.SUPABASE_SERVICE_KEY }
    );

    const data = await request.json();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      console.error("Error getting user from Supabase.");
      return new Response("User not found.", { status: 400 });
    }

    const { rating, courseId } = data;

    // Insert the data into Supabase table
    const { error } = await supabase
      .from("reviews")
      .upsert([
        {
          profile_id: user.id,
          rating: rating,
          course_id: courseId,
        },
      ]);

    if (error) {
      console.error("Error inserting data into Supabase:", error);
      return new Response("Error inserting data", { status: 500 });
    }

    console.log("Data inserted into Supabase");

    return new Response("Review added successfully", { status: 200 });
  } catch (error) {
    console.error("Error while handling POST request:", error);
    return new Response("Error", { status: 500 });
  }
}

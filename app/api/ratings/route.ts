import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { parse } from "cookie";

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

    console.log(user);

    // Extract the user ID from the cookie (you may need to adjust this logic)
    if (!user) {
      console.error("User ID not found in the cookie.");
      return new Response("User ID not found.", { status: 400 });
    }

    // Include the user ID in the data object
    const { rating, courseId } = data;

    // Insert the data into your Supabase table
    const { data: insertedData, error } = await supabase
      .from("reviews")
      .upsert([
        {
          profile_id: user.id, // Include the user ID
          rating: rating,
          course_id: courseId,
          // Add other properties as needed
        },
      ]);

    if (error) {
      console.error("Error inserting data into Supabase:", error);
      return new Response("Error inserting data", { status: 500 });
    }

    console.log("Data inserted into Supabase:");

    return new Response("Review added successfully", { status: 200 });
  } catch (error) {
    console.error("Error while handling POST request:", error);
    return new Response("Error", { status: 500 });
  }
}

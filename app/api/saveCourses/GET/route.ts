import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export const dynamic = 'force-dynamic';
export async function GET(request: Request) {
  try {
    // Initialize Supabase client
    const supabase = createRouteHandlerClient(
      { cookies },
      { supabaseKey: process.env.SUPABASE_SERVICE_KEY },
    );

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      console.error('Error getting user from Supabase.');
      return new Response('User not found.', { status: 400 });
    }

    // Query the Supabase table to retrieve the courses for the user
    let { data: courses, error } = await supabase
      .from('coursesSaved')
      .select('saved_courses')
      .eq('profile_id', user.id);

    if (error) {
      console.error('Courses not found', error);
      return new Response('Courses not found', { status: 404 });
    }

    if (courses) {
      console.log('Courses found:', courses[0].saved_courses);
    }

    if (!courses || courses.length === 0) {
      return new Response('No courses found', { status: 404 });
    }

    // Return the courses as a JSON response
    return new Response(JSON.stringify({ courses }), {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (error) {
    console.error('Error while handling GET request:', error);
    return new Response('Error', { status: 500 });
  }
}

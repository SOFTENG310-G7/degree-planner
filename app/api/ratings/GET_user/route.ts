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

    // Query the Supabase table to retrieve the rating
    let { data, error } = await supabase
      .from('reviews')
      .select('rating, courses(*)')
      .eq('profile_id', user?.id);

    if (error) {
      console.error('Error while executing query', error);
      return new Response('Error while executing query', { status: 404 });
    }

    const ratings = data;
    // Return the ratings as a JSON response
    return new Response(JSON.stringify({ ratings }), {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (error) {
    console.error('Error while handling GET request:', error);
    return new Response('Error', { status: 500 });
  }
}

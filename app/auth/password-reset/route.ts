import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  const requestUrl = new URL(request.url);
  const formData = await request.formData();
  const password = String(formData.get('password'));
  const supabase = createRouteHandlerClient({ cookies });

  const { error } = await supabase.auth.updateUser({ password: password });

  if (error) {
    return NextResponse.redirect(
      `${requestUrl.origin}/pages/resetPasswordSuccess?message=Invalid Password`,
      {
        // a 301 status is required to redirect from a POST to a GET route
        status: 301,
      },
    );
  }

  return NextResponse.redirect(requestUrl.origin, {
    // a 301 status is required to redirect from a POST to a GET route
    status: 301,
  });
}

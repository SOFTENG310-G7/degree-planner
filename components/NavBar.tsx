import React from 'react';
import Link from 'next/link';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export default async function NavBar() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <header className="flex flex-row px-16 py-7 items-baseline justify-between text-slate-600 font-medium border-b-2 border-b-slate-300 tracking-wide shadow">
      <Link
        href="/"
        className="flex text-xl font-semibold items-baseline text-cyan-900 traking-normal mb-4 md:mb-0"
      >
        Degree Planner
      </Link>

      <nav className="flex flex-row gap-6 items-baseline text-base">
        {/* TODO: Make navbar links a component and apply styling there */}
        <Link href="/pages/courses">Courses</Link>
        <Link href="/pages/planner">Degree Planner</Link>
        <Link href="/pages/about">About</Link>
        <Link href="/pages/contact">Contact</Link>
      </nav>

      {user ? (
        <Link href="/pages/profile">{user.email}</Link>
      ) : (
        <Link href="/pages/login">Login</Link>
      )}
    </header>
  );
}

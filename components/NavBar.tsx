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
    <div className="navbar">
      <header className="text-slate-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 my-3 flex-col md:flex-row items-center">
          <Link
            href="/"
            className="flex title-font font-medium items-center text-slate-900 mb-4 md:mb-0"
          >
            <span className="text-xl font-semibold">UoA Degree Planner</span>
          </Link>

          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-slate-400 font-medium flex flex-row gap-4 items-center text-base justify-center [&>a]:px-1">
            {/* TODO: Make navbar links a component and apply styling there */}
            <Link href="/pages/courses">Courses</Link>
            <Link href="/pages/planner">Degree Planner</Link>
            <Link href="/pages/about">About</Link>
            <Link href="/pages/contact">Contact</Link>
          </nav>
          <div className="font-medium">
            {user ? (
              <Link href="/pages/profile">{user.email}</Link>
            ) : (
              <Link href="/pages/login">Login</Link>
            )}
          </div>
        </div>
        <hr className="h-px bg-slate-300 border-0 dark:bg-slate-300 m-0" />
      </header>
    </div>
  );
}

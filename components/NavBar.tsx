import React from "react";
import Link from "next/link";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function NavBar() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="navbar">
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 my-3 flex-col md:flex-row items-center">
          <Link
            href="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <span className="ml-3 text-xl font-bold">UoA Degree Planner</span>
          </Link>

          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center [&>a]:px-1">
            <Link href="/" className="mr-5 hover:text-gray-900">
              Courses
            </Link>
            <Link href="/" className="mr-5 hover:text-gray-900">
              Degree Planner
            </Link>
            <Link href="/" className="mr-5 hover:text-gray-900">
              About
            </Link>
            <Link href="/" className="mr-5 hover:text-gray-900">
              Contact
            </Link>
          </nav>
          <div>
            {user ? (
              <div>Hello, {user.email}</div>
            ) : (
              <div>
                <Link href="/login">
                  <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                    Login
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-1"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
        <hr className="h-px bg-gray-300 border-0 dark:bg-gray-300 m-0" />
      </header>
    </div>
  );
}

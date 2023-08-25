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
            <Link href="/about" className="mr-5 hover:text-gray-900">
              About
            </Link>
            <Link href="/contact" className="mr-5 hover:text-gray-900">
              Contact
            </Link>
          </nav>
          <div>
            {user ? (
              <div>
                <Link href="/profile" className="mr-5 hover:text-gray-900">{user.email}
                </Link>
              </div>
            ) : (
              <div>
                <Link href="/login" className="mr-5 hover:text-gray-900">Login
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
=======
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
            <Link href="/courses" className={"mr-5 hover:text-gray-900"}>
              Courses
            </Link>
            <Link href="/planner" className="mr-5 hover:text-gray-900">
              Degree Planner
            </Link>
            <Link href="/about" className="mr-5 hover:text-gray-900">
              About
            </Link>
            <Link href="/contact" className="mr-5 hover:text-gray-900">
              Contact
            </Link>
          </nav>
          <div>
            {user ? (
              <div>
                <Link href="/profile" className="mr-5 hover:text-gray-900">{user.email}
                </Link>
              </div>
            ) : (
              <div>
                <Link href="/login" className="mr-5 hover:text-gray-900">Login
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

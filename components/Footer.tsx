import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-gray-300 text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <Link
          href="/"
          className="flex title-font font-medium items-center md:justify-start justify-center text-slate-900"
        >
          <p className="ml-3 text-xl font-bold">UoA Degree Planner</p>
        </Link>
        <p className="text-sm text-slate-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          ©&nbsp;2023 SOFTENG&nbsp;310 The G7
        </p>
        <a
          href="https://www.auckland.ac.nz/"
          target="_blank"
          className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start hover:underline"
        >
          <p>The University of Auckland</p>
        </a>
      </div>
    </footer>
  );
}

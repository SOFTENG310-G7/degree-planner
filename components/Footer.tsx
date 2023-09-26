import Link from "next/link";

export default function Footer() {
  return (
    <div>
      <hr className="h-px bg-gray-300 border-0 dark:bg-gray-300 m-0" />
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <Link
            href="/"
            className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
          >
            <span className="ml-3 text-xl font-bold">UoA Degree Planner</span>
          </Link>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2023 SOFTENG 310 The G7
          </p>
          <a
            href="https://www.auckland.ac.nz/"
            target="_blank"
            className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start hover:underline"
          >
            <span>The University of Auckland</span>
          </a>
        </div>
      </footer>
    </div>
  );
}

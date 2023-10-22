import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="flex flex-row flex-wrap justify-between items-baseline border-t border-slate-300 text-slate-600 px-16 py-7 tracking-wide min-h-[12rem]">
      <div>
        <Link href="/" className="flex text-xl font-semibold text-cyan-900 tracking-tight">
          Degree Planner
        </Link>
        <Link
          href="https://www.auckland.ac.nz"
          className="font-medium text-slate-500"
          target="_blank"
        >
          University of Auckland
        </Link>
      </div>
      <p className="text-sm text-slate-500">
        ©&nbsp;2023 SOFTENG&nbsp;310 Degree Planner Contributors
      </p>
      <Link href="https://github.com/SOFTENG310-G7/degree-planner" target="_blank">
        GitHub
      </Link>
    </footer>
  );
}

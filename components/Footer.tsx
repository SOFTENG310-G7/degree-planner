import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="flex flex-row justify-between items-baseline border-t border-slate-300 text-slate-600 px-16 py-7 tracking-wide min-h-[12rem]">
      <Link href="/" className="flex text-xl font-semibold text-cyan-900 tracking-tight">
        Degree Planner
      </Link>
      <p className="text-sm text-slate-500">
        ©&nbsp;2023 SOFTENG&nbsp;310 Degree Planner Contributors
      </p>
      <a href="https://www.auckland.ac.nz" target="_blank">
        University of Auckland
      </a>
    </footer>
  );
}

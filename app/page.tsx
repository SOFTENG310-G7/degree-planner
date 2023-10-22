import Link from 'next/link';
export const dynamic = 'force-dynamic';
import checkIcon from '@/assets/checkIcon';
import courseIcon from '@/assets/courseIcon';
import contactIcon from '@/assets/contactIcon';
import arrowIcon from '@/assets/arrowIcon';

export default async function Index() {
  return (
    <div className="flex flex-col justify-center items-center text-3xl my-[130px]">
      <section className="text-slate-600 body-font max-w-2xl">
        <div className="container px-5 py-3 mx-auto flex flex-col text-center w-full">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-slate-900">
            Plan your journey at UoA with us
          </h1>
          <p className="mx-auto leading-relaxed text-lg">
            If you are interested in studying at the University of Auckland, try our degree planner
            to plan out your path. The currently supported programmes are:
          </p>
        </div>
        <div className="container px-5 py-8 mx-auto flex flex-col items-center gap-2 w-96">
          <div className="bg-slate-100 rounded flex p-4 items-center w-full">
            {checkIcon()}
            <p className="title-font font-medium text-lg">Bachelor of Engineering (Honours)</p>
          </div>
          <div className="bg-slate-100 rounded flex p-4 w-full">
            {checkIcon()}
            <p className="title-font font-medium text-lg">Bachelor of Science</p>
          </div>
        </div>
        <Link href="/pages/planner">
          <button className="btn flex mx-auto mt-16 py-3 px-10 rounded-full text-lg">
            Plan your degree
          </button>
        </Link>
      </section>

      <section className="text-slate-600 my-3">
        <div className="flex flex-col gap-6 items-center px-5 py-24">
          <div className="lg:w-1/2 md:w-full flex border-2 rounded-lg border-slate-200 border-opacity-50 p-8 sm:flex-row flex-col">
            <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-slate-100 text-cyan-600 flex-shrink-0">
              {courseIcon()}
            </div>
            <div className="flex-grow">
              <h2 className="text-slate-900 text-lg title-font font-medium mb-3">Courses</h2>
              <p className="leading-relaxed text-base">
                All the courses from BE(Hons) and BSc are available on our website. You can view the
                details, including prerequisites and summaries on the Courses page.
              </p>
              <Link
                href="/pages/courses"
                className="mt-3 text-cyan-600 inline-flex items-center text-2xl font-semibold"
              >
                See courses
                {arrowIcon()}
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 md:w-full flex border-2 rounded-lg border-slate-200 border-opacity-50 p-8 sm:flex-row flex-col">
            <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-slate-100 text-cyan-600 flex-shrink-0">
              {contactIcon()}
            </div>
            <div className="flex-grow">
              <h2 className="text-slate-900 text-lg title-font font-medium mb-3">Contact us</h2>
              <p className="leading-relaxed text-base">
                If you have any questions or messages, you can visit the contact page for more
                information.
              </p>
              <Link
                href="/pages/contact"
                className="mt-3 text-cyan-600 inline-flex items-center text-2xl font-semibold"
              >
                Learn more
                {arrowIcon()}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

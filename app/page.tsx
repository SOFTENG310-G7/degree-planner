import Link from "next/link";
export const dynamic = "force-dynamic";

export default async function Index() {
  return (
    <div className="flex flex-col justify-center items-center text-3xl my-[130px]">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-3 mx-auto">
          <div className="flex flex-col text-center w-full">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Plan your journey at UoA with us
            </h1>
            <p className=" mx-auto leading-relaxed text-lg">
              If you are interested in studying at the University of Auckland,
              try our degree planner to plan out your path.
            </p>
            <p className="lg:w-3/4 mx-auto leading-relaxed text-lg">
              Here are the degrees currently available on our website:
            </p>
          </div>
        </div>
        <div className="container px-5 py-8 mx-auto ">
          <div className="flex flex-wrap lg:w-[580px] sm:mx-auto sm:mb-2 -mx-2 ">
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="#3d74ff"
                  strokelinecap="round"
                  strokelinejoin="round"
                  strokewidth="3"
                  className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium text-lg">
                  {"Bachelor of Engineering (Honours)"}
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="#3d74ff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium text-lg">
                  Bachelor of Science
                </span>
              </div>
            </div>
          </div>
          <Link href="/planner">
            <button className="flex mx-auto mt-16 text-white bg-[#3d74ff] border-0 py-3 px-10 focus:outline-none hover:bg-[#2853bf] rounded-full text-lg">
              Plan my degree
            </button>
          </Link>
        </div>
      </section>

      <section className="text-gray-600 body-font my-3">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex flex-col items-center -m-4">
            <div className="p-4 lg:w-1/2 md:w-full">
              <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="#3d74ff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                    Courses
                  </h2>
                  <p className="leading-relaxed text-base">
                    All the courses from BE(Hons) and BSc are available on our
                    website. You can view the details, including prerequisites
                    and summaries on the "Courses" page.
                  </p>
                  <Link
                    href="/courses"
                    className="mt-3 text-[#3d74ff] inline-flex items-center text-2xl font-semibold"
                  >
                    Go to Courses
                    <svg
                      fill="none"
                      stroke="#3d74ff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-7 h-7 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/2 md:w-full">
              <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="#3d74ff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-10 h-10"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                    Contact us
                  </h2>
                  <p className="leading-relaxed text-base">
                    If you have any questions or messages, you can visit the
                    contact page for more information.
                  </p>
                  <Link
                    href="/contact"
                    className="mt-3 text-[#3d74ff] inline-flex items-center text-2xl font-semibold"
                  >
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-7 h-78 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

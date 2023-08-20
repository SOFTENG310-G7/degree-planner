import Link from "next/link";
import Image from "next/image";

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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
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
    </div>
  );
}

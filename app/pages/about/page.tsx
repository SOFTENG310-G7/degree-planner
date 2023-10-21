import '../../globals.css';

export default async function About() {
  return (
    <div className="flex justify-center items-center px-8 py-8">
      <main className="flex-1 flex flex-col w-full max-w-md-custom px-8 py-8 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h1 className="text-4xl text-medium font-bold">About Degree Planner</h1>
          <p className="text-slate-600 font-semibold my-4">
            Welcome to the University of Auckland Degree Planner.
            <br />A place for secondary and tertiary students to find their path.
          </p>
        </div>
        <div className="my-8 text-gray-600">
          <p className="mb-4">
            In 2023, as part of the{' '}
            <a
              className="text-cyan-600 hover:underline transition-text-decoration"
              href="https://courseoutline.auckland.ac.nz/dco/course/SOFTENG/310"
            >
              SOFTENG&nbsp;310
            </a>{' '}
            paper at{' '}
            <a
              className="text-cyan-600 hover:underline transition-text-decoration"
              href="https://www.auckland.ac.nz"
            >
              Waipapa Taumata Rau
            </a>{' '}
            (the University of Auckland), the G7s were tasked with building website for students to
            plan their future education.
          </p>
          <p className="mb-4">
            Degree Planner features a complete list of courses available for the university’s
            Bachelor of Science and Bachelor of Engineering programmes, supporting potential and
            current students in their efforts to view and plan their degree, or map out alternative
            degree plans.
          </p>
          <p className="mb-4">
            We encourage students to create and share degree plans, and rate courses based on past
            experiences to share and foster the culture at Waipapa Taumata Rau. Students may also
            view entrance requirements and recommended plans for essential courses for the career
            path they are pursuing.
          </p>
        </div>
      </main>
    </div>
  );
}

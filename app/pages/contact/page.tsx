'use client';
import ContactForm from '@/components/ContactForm';
import '../../globals.css';

export default async function About() {
  return (
    <div className="flex justify-center items-center px-8 py-8">
      <div className="flex-1 flex flex-col w-full max-w-md-custom px-8 py-8 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h1 className="text-4xl text-medium font-bold">Contact Us</h1>
          <p className="text-slate-600 font-semibold my-4">
            For feedback and bug reports, the best place to lodge them is{' '}
            <a
              className="text-blue-500 hover:underline transition-text-decoration"
              href="https://github.com/SOFTENG310-G7/degree-planner"
            >
              via GitHub
            </a>
            .
          </p>
        </div>
        <div className="mt-4 text-slate-600">
          <p className="mb-4">
            If there isn’t already an{' '}
            <a
              className="text-blue-500 hover:underline transition-text-decoration"
              href="https://github.com/SOFTENG310-G7/degree-planner/issues"
            >
              open thread
            </a>{' '}
            about your query, feel free to open a{' '}
            <a
              className="text-blue-500 hover:underline transition-text-decoration"
              href="https://github.com/SOFTENG310-G7/degree-planner/issues/new/choose"
            >
              new issue
            </a>
            .
          </p>
          <p>
            If you’re unfamiliar with GitHub, you’re also welcome to contact our volunteer
            developers by email at{' '}
            <a
              className="text-blue-500 hover:underline transition-text-decoration"
              href="mailto:degreeplanner90@gmail.com"
            >
              degreeplanner90@gmail.com
            </a>
            , or use the contact form below.
          </p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}

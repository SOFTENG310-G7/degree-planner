'use client';
import ContactForm from '@/components/ContactForm';
import '../../globals.css';

export default async function About() {
  return (
    <div className="flex justify-center items-center px-8 py-8">
      <div className="flex-1 flex flex-col w-full max-w-md-custom px-8 py-8 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Contact Us</h1>
          <br />
          <p className="text-gray-600 font-bold">
            For any queries, feedback or bug reports, please feel free to email us or submit a
            contact form below.
          </p>
          <p className="text-gray-600 font-bold">
            Our team will strive to get back to you as soon as possible within 2 working days.
          </p>
          <br />
        </div>
        <div className="mt-4">
          <p className="text-gray-600">
            For any major occurrences, please contact our original development team's leader, Dana
            Seong.
          </p>
          <p className="text-gray-600">
            Original Dev Team Email:&nbsp;
            <a href="mailto:mseo447@aucklanduni.ac.nz" className="text-blue-500 hover:underline">
              mseo447@aucklanduni.ac.nz
            </a>
          </p>
          <p className="text-gray-600">
            Second Dev Team Email:&nbsp;
            <a href="mailto:hwan513@aucklanduni.ac.nz" className="text-blue-500 hover:underline">
              hwan513@aucklanduni.ac.nz
            </a>
          </p>
          <p className="text-gray-600 pb-2">
            Third Dev Team Email:&nbsp;
            <a href="mailto:example@example.com" className="text-blue-500 hover:underline">
              example@aucklanduni.ac.nz
            </a>
          </p>
          <p className="text-gray-600">Office Operation Hours: 9am to 5pm, Monday to Friday</p>
          <p className="text-gray-600">3 Grafton Road</p>
          <p className="text-gray-600">Auckland CBD, Auckland 1010</p>
        </div>
        <div className="text-center mt-4">
          <br />
          <p className="text-gray-600 font-bold">
            Alternatively, please fill and submit the contact form below.
          </p>
          <br />
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

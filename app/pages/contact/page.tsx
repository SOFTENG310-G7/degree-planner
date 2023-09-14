import '../../globals.css';

export default async function About() {
  return (
    <div className="flex justify-center items-center px-8 py-8">
      <div className="flex-1 flex flex-col w-full max-w-md-custom px-8 py-8 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Contact Us</h1>
          <br />
          <p className="text-gray-600 font-bold">For any queries, feedback or bug reports, please feel free to email us or submit a contact form below.</p>
          <p className="text-gray-600 font-bold">Our team will strive to get back to you as soon as possible within 2 working days.</p>
          <br />
        </div>
        <div className="mt-4">
          <p className="text-gray-600">For any major occurrences, please contact our original development team's leader, Dana Seong.</p>
          <p className="text-gray-600">Original Dev Team Email:&nbsp;<a href="mailto:example@example.com" className="text-blue-500 hover:underline">mseo447@aucklanduni.ac.nz</a></p>
          <p className="text-gray-600">Second Dev Team Email:&nbsp;<a href="mailto:example@example.com" className="text-blue-500 hover:underline">example@aucklanduni.ac.nz</a></p>
          <p className="text-gray-600 pb-2">Third Dev Team Email:&nbsp;<a href="mailto:example@example.com" className="text-blue-500 hover:underline">example@aucklanduni.ac.nz</a></p>
          <p className="text-gray-600">Office Operation Hours: 9am to 5pm, Monday to Friday</p>
          <p className="text-gray-600">3 Grafton Road</p>
          <p className="text-gray-600">Auckland CBD, Auckland 1010</p>
        </div>
        <div className="text-center mt-4">
          <br />
          <p className="text-gray-600 font-bold">Alternatively, please fill and submit the contact form below.</p>
          <br />
          <form
            className="flex-1 flex flex-col mx-auto w-full max-w-md justify-center text-left gap-2 text-foreground"
            action=""
            method="post"
          >
            <label className="text-md" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              autoComplete="on"
              className="rounded-md px-4 py-2 bg-inherit border mb-6"
              name="email"
              placeholder="example@domain.com"
            />
            <label className="text-md" htmlFor="subject">
              Subject
            </label>
            <select
              id="subject"
              className="rounded-md px-4 py-2 bg-inherit border mb-6"
              name="Subject"
            >
              <option value="query">Query</option>
              <option value="feedback">Feedback</option>
              <option value="bug">Bug Report</option>
            </select>
            <label className="text-md" htmlFor="message">
              Description
            </label>
            <textarea
              id="message"
              className="rounded-md px-4 py-2 bg-inherit border mb-6"
              name="Message"
              placeholder="Enter your message..."
              rows={4}
              style={{ minHeight: '8rem' }}
            ></textarea>
            <button className="bg-green-700 rounded px-4 py-2 text-white mb-2">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
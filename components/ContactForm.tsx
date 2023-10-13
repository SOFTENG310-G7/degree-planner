import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [resultMessage, setResultMessage] = useState<string | null>(null);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission behavior

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Convert form data to an object
    const object: { [key: string]: string } = {};
    formData.forEach((value, key) => {
      object[key] = value as string;
    });

    const json = JSON.stringify(object);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: json,
      });

      const jsonResponse = await response.json();
      setResultMessage(jsonResponse.message);
    } catch (error) {
      console.error(error);
      setResultMessage('Something went wrong!');
    }

    form.reset();
  };

  return (
    <div className="container mx-auto">
      <div className="m-7">
        <form
          className="flex-1 flex flex-col mx-auto w-full max-w-md justify-center text-left gap-2 text-foreground"
          onSubmit={handleFormSubmit}
        >
          <input type="hidden" name="access_key" value="8347a957-fbc8-4284-9c75-27c5dbe46292" />
          <input type="hidden" name="subject" value="New Submission from Web3Forms" />
          <input type="checkbox" name="botcheck" style={{ display: 'none' }} />

          <label className="text-md" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            autoComplete="on"
            className="rounded-md px-4 py-2 bg-inherit border mb-6"
            name="email"
            placeholder="example@domain.com"
            type="email"
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

          <div className="mb-6">
            <button
              type="submit"
              className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none"
            >
              Send Message
            </button>
          </div>
          <p className="text-base text-center text-gray-400" id="result">
            {resultMessage}
          </p>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

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
    <div className="container mx-auto text-center m-7">
      <form
        className="flex-1 flex flex-col mx-auto w-full max-w-md justify-center text-left gap-2 text-foreground"
        onSubmit={handleFormSubmit}
      >
        {/* Access key for webforms sends a response to the email account degreeplanner90@gmail.com */}
        <input type="hidden" name="access_key" value="8347a957-fbc8-4284-9c75-27c5dbe46292" />
        <input type="hidden" name="subject" value="New Submission from Degree Planner" />
        <input type="checkbox" name="botcheck" style={{ display: 'none' }} />

        <label className="text-base text-slate-700 font-semibold" htmlFor="email">
          Your email
        </label>
        <input
          id="email"
          autoComplete="on"
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          name="email"
          placeholder="example@domain.com"
          type="email"
          required
        />
        <label className="text-base text-slate-700 font-semibold" htmlFor="subject">
          Subject
        </label>
        <select id="subject" className="rounded-md px-4 py-2 bg-inherit border mb-6" name="Subject">
          <option value="query">Query</option>
          <option value="bug">Bug report</option>
          <option value="feedback">Feedback</option>
        </select>
        <label className="text-base text-slate-700 font-semibold" htmlFor="message">
          Description
        </label>
        <textarea
          id="message"
          className="rounded-md px-4 py-2 bg-inherit border mb-6 min-h-[8rem]"
          name="Message"
          placeholder="Enter your message…"
          rows={4}
          required
        ></textarea>

        <div className="mb-6">
          <button
            type="submit"
            className="w-full px-3 py-4 font-medium text-slate-50 bg-cyan-700 hover:bg-cyan-600 rounded-md active:bg-cyan-700 focus:bg-cyan-600 focus:outline-none transition-colors"
          >
            Send message
          </button>
        </div>
        <p className="text-base text-center text-slate-400" id="result">
          {resultMessage}
        </p>
      </form>
    </div>
  );
};

export default ContactForm;

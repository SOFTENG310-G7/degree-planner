"use client";

import Messages from "./messages";

export default function sendResetEmail() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex-1 flex flex-col w-full max-w-md px-8 py-8 gap-2">
        <form
          className="flex-1 flex flex-col w-full justify-center gap-2 text-foreground"
          action="/auth/password-reset-email"
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
            required
          />
          <button className="bg-green-700 rounded px-4 py-2 text-white mb-2">
            Send Reset Password Email
          </button>
        </form>
        <Messages />
      </div>
    </div>
  );
}

'use client';
import Messages from './messages';

export default function resetPasswordSucess() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex-1 flex flex-col w-full max-w-md px-8 py-8 gap-2">
        <form
          className="flex-1 flex flex-col w-full justify-center gap-2 text-foreground"
          action="/auth/password-reset"
          method="post"
        >
          <label className="text-md" htmlFor="password">
            New Password
          </label>
          <input
            id="password"
            className="rounded-md px-4 py-2 bg-inherit border mb-6"
            type="password"
            name="password"
            placeholder="••••••••"
            required
          />
          <button className="bg-green-700 rounded px-4 py-2 text-white mb-2">Reset</button>
        </form>
        <Messages />
      </div>
    </div>
  );
}

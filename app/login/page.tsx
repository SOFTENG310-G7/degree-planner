'use client'

import Messages from "./messages";
import React, { useState } from 'react';

export default function Login() {
  const [showSignIn, setShowSignIn] = useState(true);

  const handleForm = () => {
    setShowSignIn(!showSignIn);
  }

  return (
    <div className="flex justify-center items-center">
      <div className="flex-1 flex flex-col w-full max-w-md px-8 py-8 gap-2">
        {showSignIn ? (
          <>
            <form
              className="flex-1 flex flex-col w-full justify-center gap-2 text-foreground"
              action="/auth/sign-in"
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
              <label className="text-md" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                className="rounded-md px-4 py-2 bg-inherit border mb-6"
                type="password"
                name="password"
                placeholder="••••••••"
                required
              />
              <button className="bg-green-700 rounded px-4 py-2 text-white mb-2">
                Sign In
              </button>
              <Messages />
            </form>
            <div className="flex-1 flex flex-col w-full items-center gap-2 text-foreground">
              <p>or</p>
            </div>
            <div className="flex-1 flex flex-col w-full items-center gap-2 text-foreground">
              {/* Obtained from https://tailwindflex.com/shakti/google-login-signup-button */}
              <button className="px-4 py-2 border flex gap-2 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
                <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo" />
                <span>Login with Google</span>
              </button>
            </div>
            <div className="flex-1 flex flex-row w-full justify-center items-center gap-2 text-foreground">
              <span>Don't have an account?</span>
              <button onClick={handleForm}><u>Sign Up</u></button>
            </div>
          </>
        ) : (
          <>
            <form
              className="flex-1 flex flex-col w-full justify-center gap-2 text-foreground"
              action="/auth/sign-up"
              method="post"
            >
              <label className="text-mid" htmlFor="username">
                Username
              </label>
              <input
                id="username"
                autoComplete="on"
                className="rounded-md px-4 py-2 bg-inherit border mb-6"
                name="username"
                placeholder="bobby123"
                required
              />
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
              <label className="text-md" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                className="rounded-md px-4 py-2 bg-inherit border mb-6"
                type="password"
                name="password"
                placeholder="••••••••"
                required
              />
              <button
                className="bg-green-700 rounded px-4 py-2 text-white mb-2"
              >
                Sign Up
              </button>
              <Messages />
            </form>
            <div className="flex-1 flex flex-col w-full items-center gap-2 text-foreground">
              <p>or</p>
            </div>
            <div className="flex-1 flex flex-col w-full items-center gap-2 text-foreground">
              {/* Obtained from https://tailwindflex.com/shakti/google-login-signup-button */}
              <button className="px-4 py-2 border flex gap-2 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
                <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo" />
                <span>Login with Google</span>
              </button>
            </div>
            <div className="flex-1 flex flex-row w-full justify-center items-center gap-2 text-foreground">
              <span>Already a user?</span>
              <button onClick={handleForm}><u>Sign In</u></button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

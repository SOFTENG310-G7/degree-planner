'use client';

import Messages from './messages';
import React, { useState } from 'react';
import Link from 'next/link';

export default function Login() {
  const [showSignIn, setShowSignIn] = useState(true);

  const handleForm = () => {
    setShowSignIn(!showSignIn);
  };

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
              <label htmlFor="email">Email</label>
              <input
                id="email"
                autoComplete="on"
                className="rounded-md px-4 py-2 bg-inherit border mb-6 focus:outline-cyan-600 focus-visible:outline-cyan-600 transition-colors"
                name="email"
                placeholder="example@domain.com"
                required
              />
              <label htmlFor="password">Password</label>
              <input
                id="password"
                className="rounded-md px-4 py-2 bg-inherit border mb-6 focus-visible:outline-cyan-600 transition-colors"
                type="password"
                name="password"
                placeholder="••••••••"
                required
              />
              <button className="btn-green mb-2">Sign in</button>
              <Messages />
            </form>
            <div className="flex-1 flex flex-row w-full justify-center items-center gap-2 text-foreground">
              <span>Don’t have an account?</span>
              <button className="text-cyan-600 hover:underline" onClick={handleForm}>
                Sign Up
              </button>
            </div>
            <div className="flex-1 flex flex-row w-full justify-center items-center gap-2 text-foreground">
              <Link className="text-cyan-600 hover:underline" href="/pages/sendResetEmail">
                Forgot password?
              </Link>
            </div>
          </>
        ) : (
          <>
            <form
              className="flex-1 flex flex-col w-full justify-center gap-2 text-foreground"
              action="/auth/sign-up"
              method="post"
            >
              <label htmlFor="username">Username</label>
              <input
                id="username"
                autoComplete="on"
                className="rounded-md px-4 py-2 bg-inherit border mb-6 focus:outline-cyan-600 focus-visible:outline-cyan-600 transition-colors"
                name="username"
                placeholder="bobby123"
                required
              />
              <label htmlFor="email">Email</label>
              <input
                id="email"
                autoComplete="on"
                className="rounded-md px-4 py-2 bg-inherit border mb-6 focus:outline-cyan-600 focus-visible:outline-cyan-600 transition-colors"
                name="email"
                placeholder="example@domain.com"
                required
              />
              <label htmlFor="password">Password</label>
              <input
                id="password"
                className="rounded-md px-4 py-2 bg-inherit border mb-6 focus:outline-cyan-600 focus-visible:outline-cyan-600 transition-colors"
                type="password"
                name="password"
                placeholder="••••••••"
                required
              />
              <button className="btn-green mb-2">Sign up</button>
              <Messages />
            </form>
            <div className="flex-1 flex flex-row w-full justify-center items-center gap-2 text-foreground">
              <p>Already a user?</p>
              <button className="underline text-cyan-600 hover:underline" onClick={handleForm}>
                Sign in
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

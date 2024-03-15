"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function SignInForm() {
  const [email, setEmail] = useState<null | string>(null);

  const SignInWithEmail = async () => {
    const signInResult = await signIn("email", {
      email: email,
      callbackUrl: `${window.location.origin}`,
    });
  };

  return (
    <form action={SignInWithEmail}>
      <input
        className="border p-2"
        name="email"
        type="email"
        placeholder="name@exmaple.com"
        onChange={(e) => setEmail(e.target.value)}
      />

      <button
        type="submit"
        className="bg-blue-500 rounded-md py-1 text-white w-1/2 mx-auto my-4"
      >
        Sign in with email
      </button>
    </form>
  );
}

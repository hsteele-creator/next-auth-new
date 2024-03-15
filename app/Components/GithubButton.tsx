"use client";

import { signIn } from "next-auth/react";

export default function GithubButton() {
  return (
    <button
      onClick={() =>
        signIn("github", {
          callbackUrl: `${window.location.origin}`,
        })
      }
      className="bg-black rounded-md py-1 text-white w-1/2 mx-auto"
    >
      Sign in with github
    </button>
  );
}

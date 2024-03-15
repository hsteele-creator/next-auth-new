"use client";

import { signOut } from "next-auth/react";

export default function SignOutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: `${window.location.origin}` })}
      className="border bg-green-500 p-1 text-white rounded-md m-4"
    >
      Sign Out
    </button>
  );
}

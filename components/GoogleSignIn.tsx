"use client";

import Image from "next/image";
import { signIn } from "next-auth/react";

const GoogleSignIn = () => {
  return (
    <button
      onClick={() => signIn("google")}
      className="flex items-center gap-4 shadow-xl rounded-lg pl-3"
    >
      <Image
        src="/google-logo.png"
        height={30}
        width={30}
        alt="google-logo"
      />
      <span className="bg-blue-500 text-white rounded-e-lg px-4 py-3">
        Sign in with Google
      </span>
    </button>
  )
}

export default GoogleSignIn
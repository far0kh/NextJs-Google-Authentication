"use client";

import { signOut } from 'next-auth/react'

const SignOutBtn = () => {
  return (
    <div>
      <button
        onClick={() => signOut()}
        className="bg-slate-900 text-white px-6 py-2 rounded-md"
      >
        Sign Out
      </button>
    </div>
  )
}

export default SignOutBtn
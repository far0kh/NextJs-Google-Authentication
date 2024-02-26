"use client";

import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import SignOutBtn from "./SignOutBtn";

const Navbar = () => {
  const { status } = useSession();

  return (
    <nav className="p-4 flex justify-between items-center shadow-md">
      <Link className="font-bold text-lg text-blue-700" href={"/"}>
        Home
      </Link>
      {status === "authenticated" ? (
        <SignOutBtn />
      ) : (
        <button
          onClick={() => signIn("google")}
          className="bg-slate-900 text-white px-6 py-2 rounded-md"
        >
          Sign In
        </button>
      )}
    </nav>
  );
}

export default Navbar;
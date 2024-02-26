"use client";

import Image from "next/image";
import GoogleSignIn from "./GoogleSignIn";
import { useSession } from "next-auth/react";

const UserInfo = () => {
  const { status, data: session } = useSession();

  if (status === "loading") {
    return (
      <div className="shadow-xl px-8 py-3 rounded-md bg-blue-500 text-white">
        <h1>Loading ...</h1>
      </div>
    )
  } else if (status === "authenticated") {
    return (
      <div className="shadow-xl p-8 rounded-md flex flex-col gap-3 bg-blue-500 text-white">
        {session?.user?.image && <Image
          src={session.user.image}
          width={60}
          height={60}
          className="rounded-full"
          alt="session?.user?.name"
        />}
        <div>
          Name: <span className="font-bold">{session?.user?.name}</span>
        </div>
        <div>
          Email: <span className="font-bold">{session?.user?.email}</span>
        </div>
      </div>
    );
  } else {
    return <GoogleSignIn />
  }
}

export default UserInfo
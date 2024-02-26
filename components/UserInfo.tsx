"use client";

import Image from "next/image";
import GoogleSignIn from "./GoogleSignIn";
import { useSession } from "next-auth/react";

const UserInfo = () => {
  // const { status, data: session } = useSession();
  const status = null;
  const session = {
    user: {
      image: null,
      name: null,
      email: null
    }
  };

  if (status === "authenticated") {
    return (
      <div className="shadow-xl p-8 rounded-md flex flex-col gap-3 bg-yellow-200">
        {session?.user?.image && <Image
          src={session?.user?.image}
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
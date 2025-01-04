"use client";

import Provider from "@/components/provider";
import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  return (
    <Provider>
      <div>
        <Test />
      </div>
    </Provider>
  );
}

function Test() {
  const { data: session } = useSession();
  return (
    <>
      {session?.user?.email ? (
        <Button onClick={() => signOut()}>sign out</Button>
      ) : (
        <Button onClick={() => signIn()}>sign in</Button>
      )}
      {session?.user?.email && (
        <>
          <div>{session?.user?.name}</div>
          <Image
            width={500}
            height={500}
            alt="user image"
            src={session?.user?.image as string}
          />
          <div>{session?.user?.email}</div>
        </>
      )}
    </>
  );
}

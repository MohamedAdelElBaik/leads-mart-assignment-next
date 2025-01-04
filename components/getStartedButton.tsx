"use client";

import { useSession } from "next-auth/react";
import LoginButton from "./loginButton";
import { Button } from "./ui/button";
import { Github } from "lucide-react";
import Link from "next/link";

export default function GetStartedButton() {
  const { data: session } = useSession();

  return (
    <>
      {session?.user?.email ? (
        <Link href="/repositories">
          <Button className="bg-gray-800 hover:bg-gray-700">
            <Github className="mr-2 h-4 w-4" />
            Get Started Now
          </Button>
        </Link>
      ) : (
        <LoginButton />
      )}
    </>
  );
}

import { Github } from "lucide-react";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";

export default function LoginButton() {
  return (
    <Button
      onClick={() => signIn("github", { callbackUrl: "/repositories" })}
      className="bg-gray-800 hover:bg-gray-700"
    >
      <Github className="mr-2 h-4 w-4" /> Login with GitHub
    </Button>
  );
}

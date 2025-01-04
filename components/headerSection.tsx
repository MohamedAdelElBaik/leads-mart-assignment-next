import { signOut, useSession } from "next-auth/react";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import UserAvatar from "./userAvatar";

export default function HeaderSection() {
  const { data: session } = useSession();

  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <h1 className="text-lg md:text-2xl font-bold">
          GitHub Repository Viewer
        </h1>
        {session?.user?.email ? <UserLoggedIN /> : <UserLoggedOut />}
      </div>
    </header>
  );
}

function UserLoggedIN() {
  const { data: session } = useSession();

  function handleLogout() {
    signOut({ callbackUrl: "/" });
  }

  return (
    <Popover>
      <PopoverTrigger>
        <UserAvatar image={session?.user?.image || "/user.jpg"} />
      </PopoverTrigger>
      <PopoverContent>
        <nav>
          <h2>{session?.user?.name}</h2>
          <p className="text-muted-foreground text-sm">
            {session?.user?.email}
          </p>
          <div>
            <Button
              variant="destructive"
              onClick={handleLogout}
              className="text-left mt-4"
            >
              log out
            </Button>
          </div>
        </nav>
      </PopoverContent>
    </Popover>
  );
}

function UserLoggedOut() {
  return <UserAvatar image="/user.jpg" />;
}

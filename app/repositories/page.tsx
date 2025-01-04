import UserProfile from "@/components/userProfileCard";
import { RepositoriesList } from "./RepositoriesList";

export default function RepositoriesPage() {
  return (
    <main className="min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-3 container mx-auto space-y-8 md:gap-4 p-4 md:py-8">
        <div>
          <UserProfile />
        </div>

        <div className="col-span-2">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Your Public Repositories
          </h2>
          <p className="mb-6 text-sm md:text-base text-muted-foreground inline-block">
            Welcome to your public repositories section! Here, you can find a
            list of all the repositories you have made publicly available on
            GitHub.
          </p>
          <RepositoriesList />
        </div>
      </div>
    </main>
  );
}

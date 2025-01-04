import UserProfile from "@/components/userProfileCard";
import { RepositoriesList } from "./RepositoriesList";
import RepositoriesHeader from "./RepositoriesHeader";

export default function RepositoriesPage() {
  return (
    <main className="min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-3 container mx-auto space-y-8 md:gap-8 p-4 md:py-8">
        <section>
          <UserProfile />
        </section>

        <RepositoriesHeader>
          <RepositoriesList />
        </RepositoriesHeader>
      </div>
    </main>
  );
}

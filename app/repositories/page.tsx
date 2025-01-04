import { RepositoriesList } from "./RepositoriesList";

export default function RepositoriesPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <RepositoriesList />
        </div>
      </main>
    </div>
  );
}

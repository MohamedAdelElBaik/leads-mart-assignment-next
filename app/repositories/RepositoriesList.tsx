"use client";

import { useState } from "react";
import {
  RepositoriesCardSkeleton,
  RepositoryCard,
} from "@/components/RepositoryCard";
import { useRepositories } from "@/hooks/useRepositories";
import { PaginationControls } from "@/components/paginationControls";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";

export function RepositoriesList() {
  const { repositories, error, status, session } = useRepositories();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const reposPerPage = 3;
  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;

  const filteredRepositories = repositories.filter((repo) =>
    repo.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentRepos = filteredRepositories.slice(
    indexOfFirstRepo,
    indexOfLastRepo
  );
  const totalPages = Math.ceil(filteredRepositories.length / reposPerPage);

  if (status === "loading") {
    return <RepositoriesListSkeleton />;
  }

  if (status === "authenticated" && !session?.accessToken) {
    return <div>Error: Access token is missing.</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!repositories.length) {
    return <section>No repositories found.</section>;
  }

  return (
    <section className="space-y-4">
      <div className="search-bar">
        <Input
          type="text"
          placeholder="Search for repositories..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>
      {currentRepos.map((repo) => (
        <RepositoryCard key={repo.id} repo={repo} />
      ))}
      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPrevious={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        onNext={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
      />
    </section>
  );
}

function RepositoriesListSkeleton() {
  return (
    <section className="space-y-4 ">
      <div>
        <Skeleton className="w-full h-6" />
      </div>
      <div className="space-y-4">
        <RepositoriesCardSkeleton />
        <RepositoriesCardSkeleton />
        <RepositoriesCardSkeleton />
      </div>
      <div className="flex gap-4 justify-center items-center">
        <Skeleton className="w-40 h-10" />
        <Skeleton className="w-40 h-10" />
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { RepositoryCard } from "@/components/RepositoryCard";
import { useRepositories } from "@/hooks/useRepositories";
import { PaginationControls } from "@/components/paginationControls";
import { Input } from "@/components/ui/input";

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
    return <div>Loading...</div>;
  }

  if (status === "authenticated" && !session?.accessToken) {
    return <div>Error: Access token is missing.</div>;
  }

  if (error) {
    return <div>{error}</div>;
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

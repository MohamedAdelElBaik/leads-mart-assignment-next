"use client";

import { useState } from "react";
import { RepositoryCard } from "@/components/RepositoryCard";
import { useRepositories } from "@/hooks/useRepositories";
import { PaginationControls } from "@/components/paginationControls";

export function RepositoriesList() {
  const { repositories, error, status, session } = useRepositories();
  const [currentPage, setCurrentPage] = useState(1);

  const reposPerPage = 3;
  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  const currentRepos = repositories.slice(indexOfFirstRepo, indexOfLastRepo);
  const totalPages = Math.ceil(repositories.length / reposPerPage);

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
    <div>
      {currentRepos.map((repo) => (
        <RepositoryCard key={repo.id} repo={repo} />
      ))}
      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPrevious={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        onNext={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
      />
    </div>
  );
}

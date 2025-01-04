"use client";

import { useState } from "react";
import { RepositoryCard } from "@/components/RepositoryCard";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const mockRepositories = [
  {
    id: 1,
    name: "Repo 1",
    description: "Description 1",
    stargazers_count: 10,
    forks_count: 5,
    html_url: "https://github.com/user/repo1",
  },
  {
    id: 2,
    name: "Repo 2",
    description: "Description 2",
    stargazers_count: 20,
    forks_count: 10,
    html_url: "https://github.com/user/repo2",
  },
  {
    id: 3,
    name: "Repo 3",
    description: "Description 3",
    stargazers_count: 30,
    forks_count: 15,
    html_url: "https://github.com/user/repo3",
  },
  {
    id: 4,
    name: "Repo 4",
    description: "Description 4",
    stargazers_count: 40,
    forks_count: 20,
    html_url: "https://github.com/user/repo4",
  },
  {
    id: 5,
    name: "Repo 5",
    description: "Description 5",
    stargazers_count: 50,
    forks_count: 25,
    html_url: "https://github.com/user/repo5",
  },
];

export function RepositoriesList() {
  const [currentPage, setCurrentPage] = useState(1);
  const reposPerPage = 3;
  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  const currentRepos = mockRepositories.slice(
    indexOfFirstRepo,
    indexOfLastRepo
  );
  const totalPages = Math.ceil(mockRepositories.length / reposPerPage);

  return (
    <div>
      {currentRepos.map((repo) => (
        <RepositoryCard key={repo.id} repo={repo} />
      ))}
      <div className="flex justify-center mt-4 space-x-2">
        <Button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          Previous
        </Button>
        <Button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          Next
          <ChevronRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  );
}

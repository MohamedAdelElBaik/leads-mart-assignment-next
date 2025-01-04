"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Star, GitFork, MessageSquare } from "lucide-react";
import { repoCardProps } from "@/types/repo";
import { useState } from "react";
import { Skeleton } from "./ui/skeleton";
import Link from "next/link";

export function RepositoryCard({ repo }: repoCardProps) {
  const storedComments = localStorage.getItem(`comments_${repo.id}`);

  const [comment, setComment] = useState<string>("");
  const [comments, setComments] = useState<string[]>(
    storedComments ? JSON.parse(storedComments) : []
  );

  function handleAddComment() {
    setComments((comments) => [...comments, comment]);
    localStorage.setItem(
      `comments_${repo.id}`,
      JSON.stringify([...comments, comment])
    );
    setComment("");
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{repo.name}</CardTitle>
        <CardDescription>{repo.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-4 text-sm text-gray-500">
          <span className="flex items-center">
            <Star className="w-4 h-4 mr-1" />
            {repo.stargazers_count}
          </span>
          <span className="flex items-center">
            <GitFork className="w-4 h-4 mr-1" />
            {repo.forks_count}
          </span>
        </div>
        <Link
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline mt-2 inline-block"
        >
          View on GitHub
        </Link>
      </CardContent>
      <CardFooter className="flex flex-col items-start">
        <h4 className="font-semibold mb-1">Comments</h4>
        <ul className="text-sm text-gray-600 mb-1">
          {comments.map((comment, idx) => (
            <li key={idx} className="mb-1">
              {comment}
            </li>
          ))}
        </ul>
        <div className="w-full mt-2">
          <Textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add a comment..."
            className="mb-2"
          />
          <Button onClick={handleAddComment}>
            <MessageSquare className="w-4 h-4 mr-2" />
            Add Comment
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

export function RepositoriesCardSkeleton() {
  return (
    <Card>
      <CardHeader className="space-y-4">
        <Skeleton className="w-[40%] h-7" />
        <Skeleton className="w-[45%] h-7" />
      </CardHeader>
      <CardContent className="space-y-4">
        <Skeleton className="w-full h-5" />
        <Skeleton className="w-[60%] h-5" />
        <Skeleton className="w-full h-5" />
      </CardContent>
      <CardFooter>
        <div className="w-full space-y-4">
          <Skeleton className="w-[80%] h-5" />
          <Skeleton className="w-[90%] h-5" />
        </div>
      </CardFooter>
    </Card>
  );
}

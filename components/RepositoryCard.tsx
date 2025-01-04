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

interface RepositoryCardProps {
  repo: {
    id: number;
    name: string;
    description: string;
    stargazers_count: number;
    forks_count: number;
    html_url: string;
  };
}

export function RepositoryCard({ repo }: RepositoryCardProps) {
  return (
    <Card className="w-full mb-4">
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
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline mt-2 inline-block"
        >
          View on GitHub
        </a>
      </CardContent>
      <CardFooter className="flex flex-col items-start">
        <h4 className="font-semibold mb-2">Comments</h4>
        <p className="text-sm text-gray-600 mb-1">commit</p>
        <div className="w-full mt-2">
          <Textarea placeholder="Add a comment..." className="mb-2" />
          <Button className="w-full">
            <MessageSquare className="w-4 h-4 mr-2" />
            Add Comment
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

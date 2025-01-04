"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { Mail, Users, BookOpen, User, ExternalLink } from "lucide-react";
import LoginButton from "./loginButton";
import ErrorMessage from "./errorMessageCard";
import { useUserProfile } from "@/hooks/useUserProfile";
import Link from "next/link";

export default function UserProfile() {
  const { user, error, status, session } = useUserProfile();

  if (status === "loading") {
    return <LoadingSkeleton />;
  }

  if (status === "authenticated" && !session?.accessToken) {
    return <ErrorMessage message="Error: Access token is missing." />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <Card className="w-full">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold">
          {!session ? "GitHub Profile" : "Your GitHub Profile"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {!session ? (
          <LoginButton />
        ) : (
          user && (
            <div className="space-y-4">
              <div className="flex justify-center">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={user.avatar_url} alt={user.login} />
                  <AvatarFallback>{user.login[0]}</AvatarFallback>
                </Avatar>
              </div>
              <h2 className="text-xl font-semibold text-center">{user.name}</h2>
              <p className="text-gray-600 text-center">{user.bio}</p>
              <div className="grid grid-cols-2  gap-4 text-sm">
                <div className="flex items-center">
                  <Mail className="mr-2 h-4 w-4" />
                  <span>{user.email || "No email provided"}</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="mr-2 h-4 w-4" />
                  <span>{user.public_repos} repositories</span>
                </div>
                <div className="flex items-center">
                  <Users className="mr-2 h-4 w-4" />
                  <span>{user.followers} followers</span>
                </div>
                <div className="flex items-center">
                  <User className="mr-2 h-4 w-4" />
                  <span>{user.following} following</span>
                </div>
              </div>
            </div>
          )
        )}
      </CardContent>
      <CardFooter className="flex justify-center">
        {session && (
          <Button variant="default" asChild>
            <Link
              href={user?.html_url || ""}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              View on GitHub
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

function LoadingSkeleton() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center">
        <Skeleton className="h-8 w-48 mx-auto" />
      </CardHeader>
      <CardContent className="space-y-4">
        <Skeleton className="h-24 w-24 rounded-full mx-auto" />
        <Skeleton className="h-6 w-3/4 mx-auto" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <div className="grid grid-cols-2 gap-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Skeleton className="h-10 w-24" />
        <Skeleton className="h-10 w-24" />
      </CardFooter>
    </Card>
  );
}

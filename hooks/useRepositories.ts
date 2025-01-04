import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";
import Repo from "@/types/repo";

export function useRepositories() {
  const { data: session, status } = useSession();
  const [repositories, setRepositories] = useState<Repo[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      if (session?.accessToken) {
        setError(null);

        try {
          const response = await axios.get<Repo[]>(
            "https://api.github.com/user/repos?type=public",
            {
              headers: {
                Authorization: `token ${session.accessToken}`,
              },
            }
          );
          setRepositories(response.data);
        } catch {
          setError("Failed to fetch repositories");
        }
      }
    };

    fetchRepos();
  }, [session]);

  return { repositories, error, status, session };
}

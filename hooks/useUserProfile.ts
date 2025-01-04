import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";
import { GitHubUser } from "@/types/githubUser";

export function useUserProfile() {
  const { data: session, status } = useSession();
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      if (session?.accessToken) {
        setLoading(true);
        setError(null);

        try {
          const response = await axios.get<GitHubUser>(
            "https://api.github.com/user",
            {
              headers: {
                Authorization: `token ${session.accessToken}`,
              },
            }
          );
          setUser(response.data);
        } catch {
          setError("Failed to fetch user data");
        } finally {
          setLoading(false);
        }
      }
    };

    fetchUserData();
  }, [session]);

  return { user, loading, error, status, session };
}

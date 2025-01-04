export default interface Repo {
  id: number;
  name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
}

export interface repoCardProps {
  repo: {
    id: number;
    name: string;
    description: string;
    stargazers_count: number;
    forks_count: number;
    html_url: string;
  };
}

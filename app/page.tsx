import GetStartedButton from "@/components/getStartedButton";

export default function Home() {
  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">
          Frontend Software Engineer Assignment
        </h1>

        <p className="mb-6 text-muted-foreground">
          Welcome to the GitHub Repository Viewer! This application allows you
          to view and interact with your public GitHub repositories.
        </p>

        <h2 className="text-base md:text-xl font-semibold mb-2">
          Key Features:
        </h2>
        <ul className="list-disc list-inside mb-6 text-sm md:text-base text-muted-foreground">
          <li>Login with your GitHub account</li>
          <li>View a paginated list of your public repositories</li>
          <li>Add comments to repositories (saved in local storage)</li>
          <li>Logout functionality</li>
        </ul>

        <div className="mb-8">
          <GetStartedButton />
        </div>

        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Technical Stack:</h3>
          <ul className="list-disc list-inside text-sm md:text-base text-muted-foreground">
            <li>React</li>
            <li>Next.js</li>
            <li>Tailwind CSS</li>
            <li>Shadcn UI</li>
            <li>Context API</li>
            <li>GitHub API</li>
            <li>Next Auth</li>
          </ul>
        </div>
      </div>
    </main>
  );
}

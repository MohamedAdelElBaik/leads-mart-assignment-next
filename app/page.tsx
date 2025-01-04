"use client";

import Provider from "@/components/provider";
import HeaderSection from "@/components/headerSection";
import GetStartedButton from "@/components/getStartedButton";

export default function Home() {
  return (
    <Provider>
      <div className="min-h-screen flex flex-col">
        <HeaderSection />

        <main className="flex-grow container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Frontend Software Engineer Assignment
            </h2>

            <p className="mb-6">
              Welcome to the GitHub Repository Viewer! This application allows
              you to view and interact with your public GitHub repositories.
            </p>

            <h3 className="text-xl font-semibold mb-2">Key Features:</h3>
            <ul className="list-disc list-inside mb-6">
              <li>Login with your GitHub account</li>
              <li>View a paginated list of your public repositories</li>
              <li>Add comments to repositories (saved in local storage)</li>
              <li>Logout functionality</li>
            </ul>

            <div className="mb-8">
              <GetStartedButton />
            </div>

            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="text-lg font-semibold mb-2">Technical Stack:</h4>
              <ul className="list-disc list-inside">
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

        <footer className="bg-gray-800 text-white py-4 mt-8">
          <div className="container mx-auto px-4 text-center">
            <p>
              &copy; 2025 GitHub Repository Viewer. All rights reserved by
              Mohamed Adel.
            </p>
          </div>
        </footer>
      </div>
    </Provider>
  );
}

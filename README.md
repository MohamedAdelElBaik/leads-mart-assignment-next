# GitHub Repository Viewer

This project is a GitHub Repository Viewer that allows you to view and interact with your public GitHub repositories.

## Demo

You can view a live demo of the project [https://leads-mart-assignment.vercel.app/](https://leads-mart-assignment.vercel.app/).

## Technologies Used

- Next
- React
- Tailwind CSS
- Axios
- NextAuth
- Shadcn UI
- Lucide React

## Getting Started

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```sh
   git clone https://github.com/MohamedAdelElBaik/leads-mart-assignment-next.git
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Create a GitHub OAuth App:**

   - Go to [GitHub Developer Settings](https://github.com/settings/developers).
   - Click on "New OAuth App".
   - Set the "Authorization callback URL" to `http://localhost:3000/api/auth/callback/github`.
   - Save the Client ID and Client Secret.

4. **Set up environment variables:**

   Create a file in the root of the project and add the following:

   ```env
   GITHUB_CLIENT_ID=your-github-client-id
   GITHUB_CLIENT_SECRET=your-github-client-secret
   NEXTAUTH_SECRET=your-nextauth-secret
   ```

5. **Run the development server:**

   ```sh
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Additional Information

- This project uses NextAuth.js for authentication with GitHub.
- The for NextAuth.js are defined in [app/api/auth/[...nextauth]/options.ts](app/api/auth/[...nextauth]/options.ts).
- The main components for displaying repositories and user profiles are located in the directory.

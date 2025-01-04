export default function RepositoriesHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="col-span-2">
      <h2 className="text-2xl md:text-3xl font-semibold">
        Your Public Repositories
      </h2>
      <p className="mb-6 text-sm md:text-base text-muted-foreground inline-block">
        Welcome to your public repositories section! Here, you can find a list
        of all the repositories you have made publicly available on GitHub.
      </p>
      {children}
    </section>
  );
}

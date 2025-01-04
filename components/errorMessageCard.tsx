import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function ErrorMessage({ message }: { message: string }) {
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-red-600">Error</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-center">{message}</p>
      </CardContent>
    </Card>
  );
}

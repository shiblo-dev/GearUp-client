import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 text-center px-4">
      <h2 className="text-2xl font-bold">404 - Not Found</h2>
      <p className="text-muted-foreground">
        Could not find the requested resource.
      </p>
      <Button variant="destructive" asChild>
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  );
}
"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 text-center px-4">
      <h2 className="text-xl font-semibold">Something went wrong!</h2>
      <p className="text-muted-foreground text-sm">
        {error.message || "An unexpected error has occurred."}
      </p>
      <Button onClick={() => reset()}>Try Again</Button>
    </div>
  );
}
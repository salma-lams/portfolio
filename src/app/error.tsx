"use client";

import React, { useEffect } from "react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global application error:", error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6 py-24 text-center">
      <div className="max-w-md space-y-6">
        <p className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
          500 Error
        </p>
        <h1 className="text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
          Something went wrong
        </h1>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
          An unexpected error occurred while loading this page. You can retry or
          contact me directly via email.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Button onClick={() => reset()} variant="primary" size="md">
            Try again
          </Button>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-sm font-mono text-neutral-600 dark:text-neutral-400 hover:text-amber-600 dark:hover:text-amber-400 underline underline-offset-4"
          >
            {siteConfig.email}
          </a>
        </div>
      </div>
    </div>
  );
}

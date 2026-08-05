"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";

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
    <div className="min-h-[70vh] flex items-center justify-center bg-brand-black text-white px-6">
      <div className="max-w-xl text-center">
        <p className="eyebrow mb-4 text-brand-accent">Bir sorun oluştu</p>
        <h1 className="mb-6 text-balance">Kısa bir pit stop</h1>
        <p className="opacity-90 mb-8">
          Bu sayfa yüklenirken beklenmeyen bir sorunla karşılaştık. Yeniden
          deneyebilir veya ana sayfaya dönebilirsiniz.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button type="button" onClick={reset}>
            Yeniden dene
          </Button>
          <Button href="/" variant="secondary">
            Ana sayfa
          </Button>
        </div>
      </div>
    </div>
  );
}

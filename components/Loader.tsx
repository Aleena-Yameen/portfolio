"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-[#050816] flex flex-col justify-center items-center">

      <h1 className="text-cyan-400 text-2xl font-bold mb-4">
        INITIALIZING SYSTEM
      </h1>

      <div className="w-72 h-2 bg-gray-800 rounded-full overflow-hidden">

        <div className="h-full bg-cyan-400 animate-pulse w-full" />

      </div>

      <p className="mt-6 text-gray-400">
        Loading Developer Profile...
      </p>

    </div>
  );
}
import React from "react";
import { ArrowLeft, TriangleAlert } from "lucide-react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="flex-1 bg-[#09090B] text-white">
      <section className="mx-auto flex min-h-[calc(100vh-72px)] max-w-4xl flex-col items-center justify-center px-6 text-center">
        {/* Badge */}
        <div className="rounded-xl border border-zinc-800 bg-zinc-900 px-3 py-2 text-xs font-medium tracking-wide text-zinc-400">
          Error 404
        </div>

        {/* Icon */}
        <div className="mt-8 rounded-full border border-zinc-800 bg-zinc-900 p-5">
          <TriangleAlert size={42} className="text-blue-500" />
        </div>

        {/* Heading */}
        <h1 className="mt-8 text-5xl font-bold tracking-tight sm:text-6xl">
          Page Not Found
        </h1>

        {/* Description */}
        <p className="mt-5 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg">
          The page you're looking for doesn't exist or may have been moved.
        </p>

        {/* Button */}
        <Link
          to="/home"
          className="mt-10 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-700"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>
      </section>
    </main>
  );
}

export default NotFound;

import React from "react";
import { Route, ArrowRight } from "lucide-react";

function About() {
  const features = [
    "createBrowserRouter()",
    "Route",
    "RouterProvider",
    "Outlet",
    "Link",
    "NavLink",
    "useNavigate()",
    "useParams()",
  ];
  return (
    <main className="flex-1 bg-[#09090B] text-white">
      <section className="mx-auto flex min-h-[calc(100vh-72px)] max-w-4xl flex-col items-center justify-center px-6 text-center">
        {/* Badge */}
        <div className="rounded-xl border border-zinc-800 bg-zinc-900 px-2 py-2 text-xs font-medium tracking-wide text-zinc-400">
          About
        </div>
        {/* Heading */}
        <h1 className="mt-8 text-4xl font-bold tracking-tight sm:text-5xl">
          A Simple React Router Showcase
        </h1>
        {/* Description */}
        <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
          This project is a collection of pages built with React Router to
          demonstrate different routing patterns and navigation structures in a
          clean and minimal way.
        </p>
        {/* Features */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {features.map((feature) => (
            <span
              key={feature}
              className="rounded-lg border border-zinc-800 bg-zinc-900/70 px-4 py-2 text-sm text-zinc-300"
            >
              {feature}
            </span>
          ))}
        </div>
        {/* CTA */}{" "}
        <a
          href="https://github.com/Rohan-Korake/react-router-foundation"
          target="_blank"
        >
          <button className="mt-12 flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-700">
            Source Code
            <ArrowRight size={18} />
          </button>
        </a>
      </section>
    </main>
  );
}

export default About;

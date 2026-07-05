import React from "react";
import { FaGithub } from "react-icons/fa";
import { ArrowRight, Route, BookOpen, Layers } from "lucide-react";

function Home() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-72px)] max-w-7xl flex-col items-center justify-center px-5 py-10 sm:px-8 lg:px-12">
      {/* Badge */}
      <div className="rounded-full border border-zinc-800 bg-zinc-900/70 px-4 py-2 text-xs font-medium tracking-wide text-zinc-400 backdrop-blur">
        React • React Router • Vite • Tailwind CSS
      </div>

      {/* Heading */}
      <h1 className="mt-8 max-w-4xl text-center text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
        Learn <span className="text-blue-500">React Router</span>
        <br />
        Through Real Projects.
      </h1>

      {/* Description */}
      <p className="mt-6 max-w-2xl text-center text-base leading-7 text-zinc-400 sm:text-lg">
        Explore React Router through simple, focused examples. Navigate basic
        routes, nested layouts, dynamic routes, protected routes, and more all
        in one place.
      </p>

      {/* Buttons */}
      <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
        <a
          href="https://github.com/Rohan-Korake/react-router-foundation"
          target="_blank"
        >
          <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-700 sm:w-auto">
            <FaGithub size={18} />
            GitHub Repository
            <ArrowRight size={18} />
          </button>
        </a>
      </div>

      {/* Feature Cards */}
      <div className="mt-20 grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40">
          <Route className="mb-5 text-blue-500" size={28} />

          <h3 className="text-lg font-semibold">Routing Concepts</h3>

          <p className="mt-3 text-sm leading-6 text-zinc-400">
            Learn routing fundamentals with clear, practical examples.
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40">
          <Layers className="mb-5 text-blue-500" size={28} />

          <h3 className="text-lg font-semibold">Clean Architecture</h3>

          <p className="mt-3 text-sm leading-6 text-zinc-400">
            Follow scalable folder structures and industry best practices.
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40 sm:col-span-2 lg:col-span-1">
          <BookOpen className="mb-5 text-blue-500" size={28} />

          <h3 className="text-lg font-semibold">Learn by Building</h3>

          <p className="mt-3 text-sm leading-6 text-zinc-400">
            Understand React Router through hands-on projects instead of theory.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home;

import { ArrowRight, Route } from "lucide-react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

function PageTemplate({ title, nextPage, nextLabel }) {
  return (
    <main className="flex-1 bg-[#09090B] text-white">
      <section className="mx-auto flex min-h-[calc(100vh-72px)] max-w-4xl flex-col items-center justify-center px-6 text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
          <Route size={16} />
          React Router Foundation
        </div>

        {/* Title */}
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          <span className="text-white">{title}</span>{" "}
          <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
            Page
          </span>
        </h1>

        {/* Description */}
        <p className="mt-4 max-w-md text-base text-zinc-400 sm:text-lg">
          A simple page to demonstrate navigation using React Router.
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
      </section>
    </main>
  );
}

export default PageTemplate;

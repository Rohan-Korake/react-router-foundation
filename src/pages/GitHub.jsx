import React from "react";
import { FaGithub } from "react-icons/fa";
import { ArrowRight, Route } from "lucide-react";

import { useLoaderData } from "react-router-dom";

function Github() {
  const response = useLoaderData();

  return (
    <main className="flex-1 bg-[#09090B] text-white">
      <section className="mx-auto max-w-5xl px-6 py-16">
        {/* Heading */}
        <div className="text-center">
          <span className="rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-xs font-medium text-zinc-400">
            React Router Loader
          </span>

          {/* Title */}
          <h1 className="mt-8 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            <span className="text-white">GitHub User</span>{" "}
            <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
              Page
            </span>
          </h1>

          <p className="mt-4 text-zinc-400">
            Fetching GitHub user data using React Router loaders.
          </p>
        </div>

        {/* Profile Card */}
        <div className="mt-14 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-8">
          <div className="flex flex-col items-center gap-6 md:flex-row md:items-center">
            {/* Avatar */}
            <div className="h-28 w-28 overflow-hidden rounded-full border border-zinc-700 bg-zinc-800">
              <img
                src={response.avatar_url}
                alt="GitHub Avatar"
                className="h-full w-full object-cover"
              />
            </div>

            {/* User Info */}
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-semibold">{response.name}</h2>

              <p className="mt-2 text-zinc-400">{response.login}</p>

              <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-500">
                {response.bio}
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="rounded-xl border border-zinc-800 p-5 text-center">
              <p className="text-2xl font-bold">{response.followers}</p>
              <p className="mt-1 text-sm text-zinc-400">Followers</p>
            </div>

            <div className="rounded-xl border border-zinc-800 p-5 text-center">
              <p className="text-2xl font-bold">{response.following}</p>
              <p className="mt-1 text-sm text-zinc-400">Following</p>
            </div>

            <div className="rounded-xl border border-zinc-800 p-5 text-center">
              <p className="text-2xl font-bold">{response.public_repos}</p>
              <p className="mt-1 text-sm text-zinc-400">Repositories</p>
            </div>

            <div className="rounded-xl border border-zinc-800 p-5 text-center">
              <p className="text-2xl font-bold">{response.public_gists}</p>
              <p className="mt-1 text-sm text-zinc-400">Gists</p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
          <a href="https://github.com/Rohan-Korake" target="_blank">
            <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-700 sm:w-auto">
              <FaGithub size={18} />
              GitHub Profile
              <ArrowRight size={18} />
            </button>
          </a>
        </div>
      </section>
    </main>
  );
}

export default Github;

// fetch the github api data
export const fetchGitData = async () => {
  try {
    const response = await fetch("https://api.github.com/users/Rohan-Korake");
    return response.json();
  } catch (error) {
    console.error(error);
  }
};

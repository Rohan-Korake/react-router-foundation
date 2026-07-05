import { useState } from "react";
import reactLogo from "./assets/react.svg";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-slate-950">
        <img
          src={reactLogo}
          alt="React Logo"
          className="w-24 sm:w-28 md:w-32 lg:w-36 animate-spin [animation-duration:15s]"
        />

        <h1 className="mt-8 max-w-4xl text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
          React + Vite + Tailwind CSS Setup
        </h1>

        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg md:text-xl">
          A modern starter template for learning{" "}
          <span className="font-semibold text-cyan-400">React Router</span>{" "}
          through hands-on examples, practical implementations, and real-world
          projects.
        </p>
      </div>
    </>
  );
}

export default App;

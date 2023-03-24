"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.log("Error: ", error);
  }, [error]);

  return (
    <div className="flex flex-col justify-center items-center pt-10">
      <h1 className="text-2xl text-gray-700 font-light mb-4 tracking-wide">Something went wrong !!!</h1>
      <button className="text-white bg-blue-600 shadow-md hover:brightness-125 transition-shadow px-5 py-1.5 rounded-md font-light tracking-wide" onClick={() => reset()}>Try again</button>
    </div>
  );
};
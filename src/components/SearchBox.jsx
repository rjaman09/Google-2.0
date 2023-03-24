"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { BsFillMicFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";

export default function SearchBox() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");
  const [term, setTerm] = useState(searchTerm || "");

  function handleSubmit(e) {
    e.preventDefault();
    if (!term.trim()) return;
    router.push(`/search/web?searchTerm=${term}`);
  };

  return (
    <form className="flex text-[15px] text-gray-800 font-light border border-gray-200 rounded-full shadow-md px-6 py-2 ml-10 mr-5 flex-grow max-w-3xl items-center" onSubmit={handleSubmit}>
      <input type="text" className="w-full focus:outline-none tracking-wider capitalize" value={term} onChange={(e) => setTerm(e.target.value)} />
      <RxCross2 className="text-2xl text-gray-500 cursor-pointer sm:mr-2" onClick={() => setTerm("")} />
      <BsFillMicFill className="hidden sm:inline-flex text-4xl text-blue-500 pl-4 border-l-2 cursor-pointer mr-3 border-gray-300" />
      <AiOutlineSearch className="text-2xl hidden text-blue-500 cursor-pointer sm:inline-flex" onClick={handleSubmit} />
    </form>
  );
};

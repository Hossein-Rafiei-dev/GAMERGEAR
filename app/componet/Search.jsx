
"use client";

import { Search as SearchIcon, ArrowRight } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const Search = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(
    searchParams.get("title") || ""
  );

  const handelClick = (e) => {
    e.preventDefault();

    const params = new URLSearchParams();

    if (search.trim()) {
      params.set("title", search.trim());
    }

    router.push(
      `/store${params.toString() ? `?${params.toString()}` : ""}`
    );
  };

  return (
    <div className="w-full max-w-7xl mx-auto mb-12">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <span className="w-2 h-2 bg-red-500 animate-pulse" />

        <p className="text-xs sm:text-sm font-mono tracking-[0.25em] text-zinc-400 uppercase">
          SYSTEM // PRODUCT SEARCH
        </p>
      </div>

      {/* Search Box */}
      <form
        onSubmit={handelClick}
        className="group relative flex items-center w-full bg-zinc-950 border border-zinc-800 transition-all duration-300 focus-within:border-red-500 focus-within:shadow-[0_0_20px_rgba(239,68,68,0.10)]"
      >
        {/* Search Icon */}
        <div className="pl-4 sm:pl-6 text-zinc-500 group-focus-within:text-red-500 transition-colors">
          <SearchIcon size={21} strokeWidth={1.5} />
        </div>

        {/* Input */}
        <input
          type="text"
          
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search gaming gear..."
          aria-label="Search products"
          className="min-w-0 flex-1 bg-transparent px-3 sm:px-5 py-4 sm:py-5 text-sm sm:text-base text-white font-mono placeholder:text-zinc-600 outline-none"
        />

        {/* Search Button */}
        <button
          type="submit"
          className="flex items-center justify-center gap-2 self-stretch px-4 sm:px-7 bg-red-600 text-white font-mono text-xs sm:text-sm tracking-wider hover:bg-red-500 transition-colors duration-300"
        >
          <span>SEARCH</span>
          <ArrowRight size={16} />
        </button>

        {/* Bottom Accent */}
        <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-red-500 group-focus-within:w-full transition-all duration-500 pointer-events-none" />
      </form>

      {/* Footer Text */}
      <div className="flex flex-wrap items-center justify-between gap-2 mt-3">
        <p className="text-[10px] sm:text-xs font-mono text-zinc-600 tracking-wider">
          // FIND YOUR NEXT GEAR
        </p>

        <p className="text-[10px] sm:text-xs font-mono text-zinc-600">
          GAMERGEAR <span className="text-red-500">_</span>
        </p>
      </div>
    </div>
  );
};

export default Search;

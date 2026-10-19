"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ pageCount }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentPage = Number(searchParams.get("_page") || 1);

  const handlePageClick = (e) => {
    const page = e.selected + 1;

    router.push(`/store?_page=${page}&_per_page=8 `);
  };

  return (
    <div className="mt-12 flex justify-center">
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        previousLabel="< previous"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        forcePage={Math.max(0, Math.min(currentPage - 1, pageCount - 1))}
        renderOnZeroPageCount={null}
        containerClassName="flex items-center gap-3"
        pageClassName="border border-zinc-700"
        pageLinkClassName="block px-4 py-2 hover:bg-red-500 hover:text-black"
        activeClassName="bg-red-500 text-black"
        previousClassName="text-red-500"
        nextClassName="text-red-500"
        disabledClassName="opacity-30 pointer-events-none"
        breakClassName="text-zinc-500"
      />
    </div>
  );
};

export default Pagination;
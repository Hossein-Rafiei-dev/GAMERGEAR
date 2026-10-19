import axios from "axios";
import Link from "next/link";
import Pagination from "../componet/pagination";
import Search from "../componet/Search";

async function Page({ searchParams }) {
  const search = await searchParams;

  const currentPage = Number(search._page || 1);
  const perPage = Number(search._per_page || 8);
    const title = (search.title ||" ");


const { data } = await axios.get(
  `http://localhost:8000/posts?title:contains=${encodeURIComponent(title)}&_page=${currentPage}&_per_page=${perPage}`
);
  const { data: allPosts } = await axios.get(
    "http://localhost:8000/posts"
  );

  const pageCount = Math.ceil(allPosts.length / perPage);

  return (
    <main className="min-h-screen bg-black text-white px-8 py-16">
      <div className="max-w-7xl mx-auto mb-12">
        <p className="text-red-500 text-sm tracking-[0.4em] uppercase mb-3">
          Mr. Robot // Shop
        </p>

        <h1 className="text-4xl md:text-5xl font-bold">
          SYSTEM <span className="text-red-500">STORE</span>
        </h1>

        <div className="mt-4 h-[2px] w-24 bg-red-500" />
      </div>
      <Search/>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.data.map((item) => (
          <div
            key={item.id}
            className="group bg-zinc-950 border border-zinc-800 hover:border-red-500 transition-all duration-300 overflow-hidden"
          >
            <div className="relative h-64 overflow-hidden bg-zinc-900">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
              />
            </div>

            <div className="p-5">
              <p className="text-red-500 text-xs tracking-[0.2em] mb-2">
                PRODUCT // {item.id}
              </p>

              <h2 className="text-xl font-bold mb-3">
                {item.title}
              </h2>

              <p className="text-zinc-400 text-sm leading-6 line-clamp-2 mb-5">
                {item.descrption}
              </p>

              <div className="flex items-center justify-between border-t border-zinc-800 pt-4">
                <span className="text-2xl font-bold">
                  ${item.price}
                </span>

                <Link
                  href={`/store/${item.id}`}
                  className="px-4 py-2 text-xs font-bold uppercase tracking-wider border border-red-500 text-red-500 hover:bg-red-500 hover:text-black transition-all"
                >
                  View
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Pagination pageCount={pageCount} />
    </main>
  );
}

export default Page;
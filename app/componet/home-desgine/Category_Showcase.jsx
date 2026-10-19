export default function CategoryShowcase({categories}) {


  return (
    <section className="w-full overflow-hidden bg-black px-6 py-24 md:px-10">
      {/* HEADER */}
      <div className="mb-16">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.45em] text-red-500">
           SYSTEM  COMPONENTS
        </p>

        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="text-5xl font-black uppercase tracking-tight text-white md:text-7xl">
            BUILD
            <span className="text-red-600"> YOUR_</span>
          </h2>

          <p className="max-w-md text-sm leading-6 tracking-wider text-zinc-500">
            SELECT THE HARDWARE YOU NEED
            <br />
            AND BUILD YOUR SYSTEM.
          </p>
        </div>
      </div>

      {/* CARDS */}
      <div className="grid w-full grid-cols-2 gap-4 md:flex md:gap-5">
        {categories.map((category, index) => (
          <div
            key={category.id}
            className={`
              group
              relative
              h-[240px]
              min-w-0
              skew-x-[-4deg]
              overflow-hidden
              border
              border-zinc-800
              bg-zinc-950
              transition-all
              duration-500
              hover:-translate-y-3
              hover:border-red-600
              hover:shadow-[0_0_35px_rgba(220,38,38,0.25)]

              sm:h-[300px]
              md:h-[360px]
              md:flex-1

              ${index === categories.length - 1 ? "col-span-2 md:col-span-1" : ""}
            `}
          >
            {/* IMAGE */}
            <img
              src={category.image}
              alt={category.title}
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                opacity-70
                transition-all
                duration-700
                group-hover:scale-110
                group-hover:opacity-100
              "
            />

            {/* DARK OVERLAY */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black
                via-black/40
                to-transparent
              "
            />

            {/* RED LINE */}
            <div
              className="
                absolute
                left-0
                top-0
                h-full
                w-[3px]
                bg-red-600
                opacity-70
                transition-all
                duration-500
                group-hover:w-[6px]
                group-hover:opacity-100
              "
            />

            {/* CONTENT */}
            <div className="absolute bottom-0 left-0 w-full p-4 md:p-6">
              <p className="mb-2 text-[10px] font-medium tracking-[0.4em] text-red-500 md:text-xs">
                {category.id}
              </p>

              <h3
                className="
                  break-words
                  text-xl
                  font-black
                  uppercase
                  tracking-[0.04em]
                  text-white

                  sm:text-2xl
                  md:text-xl
                  md:tracking-[0.02em]
                  lg:text-3xl
                  lg:tracking-[0.08em]
                  xl:text-4xl
                "
              >
                {category.title}
              </h3> 

              <div
                className="
                  mt-4
                  h-[1px]
                  w-12
                  bg-red-600
                  transition-all
                  duration-500
                  group-hover:w-full
                "
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
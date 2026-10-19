import React from "react";

export default function RoomDesgein() {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-gradient-to-b
        from-black
        via-[#160303]
        to-[#4a0505]
        px-4
        py-14
        sm:px-6
        sm:py-16
        md:px-10
        md:py-20
        lg:px-16
        lg:py-24
        xl:px-20
      "
    >
      {/* Background Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-1/3
          h-72
          w-72
          rounded-full
          bg-red-700/10
          blur-[100px]
          sm:h-96
          sm:w-96
          sm:blur-[130px]
          lg:-left-48
          lg:top-1/2
          lg:h-[500px]
          lg:w-[500px]
          lg:-translate-y-1/2
          lg:blur-[150px]
        "
      />

      {/* Main Content */}
      <div
        className="
          relative
          mx-auto
          flex
          w-full
          max-w-7xl
          flex-col
          items-center
          gap-12
          sm:gap-14
          md:gap-16
          lg:min-h-[500px]
          lg:flex-row
          lg:items-center
          lg:gap-12
          xl:gap-20
        "
      >
        {/* ================= IMAGE ================= */}

        <div
          className="
            group
            relative
            flex
            w-full
            items-center
            justify-center
            lg:w-[56%]
            xl:w-[58%]
          "
        >
          <img
            src="https://gearshop.vn/upload/images/Tin%20t%E1%BB%A9c/Gh%E1%BA%BF%20Gaming/ghe-gaming%282%29.jpg"
            alt="Gaming room setup"
            className="
              relative
              z-10
              mx-auto
              block
              h-auto
              w-full
              max-w-[520px]
              object-contain

              drop-shadow-[15px_20px_25px_rgba(0,0,0,0.75)]

              transition-all
              duration-700

              sm:max-w-[580px]
              sm:drop-shadow-[20px_25px_30px_rgba(0,0,0,0.8)]

              md:max-w-[650px]
              md:drop-shadow-[25px_30px_35px_rgba(0,0,0,0.82)]

              lg:max-w-none
              lg:drop-shadow-[35px_35px_35px_rgba(0,0,0,0.85)]

              [transform:perspective(1400px)_rotateY(3deg)_rotateX(1deg)]

              group-hover:-translate-y-2
              group-hover:drop-shadow-[30px_35px_40px_rgba(0,0,0,0.9)]

              sm:group-hover:-translate-y-3

              lg:group-hover:-translate-y-4
              lg:group-hover:drop-shadow-[45px_45px_45px_rgba(0,0,0,0.9)]

              group-hover:[transform:perspective(1400px)_rotateY(0deg)_rotateX(0deg)_scale(1.02)]

              sm:group-hover:[transform:perspective(1400px)_rotateY(0deg)_rotateX(0deg)_scale(1.03)]

              lg:group-hover:[transform:perspective(1400px)_rotateY(0deg)_rotateX(0deg)_scale(1.04)]
            "
          />
        </div>

        {/* ================= CONTENT ================= */}

        <div
          className="
            relative
            flex
            w-full
            max-w-2xl
            flex-col
            items-start
            text-left
            lg:w-[44%]
            xl:w-[42%]
          "
        >
          {/* Small Label */}

          <p
            className="
              mb-4
              border-l-2
              border-red-500
              pl-3
              text-[10px]
              font-medium
              uppercase
              tracking-[0.25em]
              text-red-400

              sm:mb-5
              sm:text-xs
              sm:tracking-[0.35em]

              md:tracking-[0.4em]
            "
          >
            ROOM DESIGN  006
          </p>

          {/* Title */}

          <h2
            className="
              mb-5
              max-w-full
              text-4xl
              font-black
              uppercase
              leading-[0.95]
              tracking-tight
              text-white

              sm:text-5xl

              md:text-6xl

              lg:mb-6
              lg:text-5xl

              xl:text-6xl
            "
          >
            DESIGN
            <span className="block">
              YOUR
            </span>

            <span className="block text-red-500">
              GAMING ROOM_
            </span>
          </h2>

          {/* Red Line */}

          <div
            className="
              mb-6
              h-[2px]
              w-16
              bg-red-500

              sm:mb-7
              sm:w-20
            "
          />

          {/* Description */}

          <p
            className="
              mb-5
              max-w-xl
              text-sm
              leading-6
              text-zinc-300

              sm:leading-7

              md:text-base
            "
          >
            Given our extensive familiarity with gaming products and the
            ability to source all necessary equipment through the Controly
            website, we can assist you in designing and setting up your gaming
            or streaming system—or even an entire gaming room.
          </p>

          {/* Small Text */}

          <span
            className="
              mb-7
              max-w-full
              text-[10px]
              uppercase
              leading-5
              tracking-[0.12em]
              text-zinc-500

              sm:mb-8
              sm:text-xs
              sm:tracking-[0.18em]

              md:tracking-[0.2em]
            "
          >
            Need consultation? Contact our team.
          </span>

          {/* Button */}

          <button
            className="
              group
              relative
              w-full
              overflow-hidden
              border
              border-red-500
              bg-red-600
              px-7
              py-3.5
              text-sm
              font-bold
              uppercase
              tracking-[0.15em]
              text-black
              transition-all
              duration-300

              hover:bg-red-500
              hover:shadow-[0_0_35px_rgba(239,68,68,0.55)]

              sm:w-auto
              sm:px-10
              sm:py-4
              sm:text-base
              sm:tracking-[0.2em]
            "
          >
            <span className="relative z-10">
              Call To Us
            </span>

            {/* Button Hover */}

            <span
              className="
                absolute
                inset-0
                -translate-x-full
                bg-white/20
                transition-transform
                duration-500
                group-hover:translate-x-0
              "
            />
          </button>
        </div>
      </div>
    </section>
  );
}
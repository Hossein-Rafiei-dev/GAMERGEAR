import {
  ShieldCheck,
  Truck,
  Headphones,
  LockKeyhole,
  Zap,
} from "lucide-react";

const features = [
  {
    id: "01",
    icon: ShieldCheck,
    title: "QUALITY GUARANTEE",
    description: "Reliable products with guaranteed quality",
  },
  {
    id: "02",
    icon: Truck,
    title: "FAST DELIVERY",
    description: "Fast and secure delivery to your door",
  },
  {
    id: "03",
    icon: Headphones,
    title: "EXPERT SUPPORT",
    description: "Professional support before and after purchase",
  },
  {
    id: "04",
    icon: LockKeyhole,
    title: "SECURE PAYMENT",
    description: "Safe and protected payment system",
  },
  {
    id: "05",
    icon: Zap,
    title: "AUTHENTIC PRODUCTS",
    description: "100% genuine and verified products",
  },
];

export default function Features() {
  return (
    <section className="relative w-full overflow-hidden bg-[#030303] px-6 pb-24 pt-20 md:px-10">
      {/* RED AMBIENT LIGHT */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[80%] -translate-x-1/2 rounded-full bg-red-600/10 blur-[120px]" />

      {/* TOP LINE */}
      <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-red-600/50 to-transparent" />

      {/* SECTION CONTENT */}
      <div className="relative mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-[10px] font-medium tracking-[0.5em] text-red-500">
            // SYSTEM // ADVANTAGES
          </p>

          <h2 className="text-3xl font-black uppercase tracking-tight text-white md:text-4xl">
            WHY
            <span className="text-red-600"> GAMERGEAR_</span>
          </h2>
        </div>

        {/* FEATURES */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5 lg:grid-cols-5">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.id}
                className="
                  group relative
                  min-h-[220px]
                  overflow-hidden
                  border border-zinc-900
                  bg-zinc-950/80
                  px-5 py-7
                  text-center
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-red-600/50
                  hover:bg-zinc-900
                  hover:shadow-[0_20px_50px_rgba(220,38,38,0.12)]
                  md:min-h-[240px]
                "
              >
                {/* CARD RED GLOW */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-10
                    -top-10
                    h-24
                    w-24
                    rounded-full
                    bg-red-600/10
                    blur-2xl
                    transition-all
                    duration-500
                    group-hover:bg-red-600/25
                  "
                />

                {/* TOP CORNER */}
                <div className="absolute right-0 top-0 h-px w-10 bg-red-600/60 transition-all duration-500 group-hover:w-20" />

                {/* LEFT LINE */}
                <div className="absolute left-0 top-0 h-0 w-[2px] bg-red-600 transition-all duration-500 group-hover:h-full" />

                {/* ICON */}
                <div
                  className="
                    relative
                    mx-auto
                    mb-6
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    border
                    border-zinc-800
                    bg-black
                    shadow-[0_10px_25px_rgba(0,0,0,0.6)]
                    transition-all
                    duration-500
                    group-hover:-translate-y-1
                    group-hover:border-red-600/70
                    group-hover:shadow-[0_10px_30px_rgba(220,38,38,0.2)]
                  "
                >
                  <Icon
                    size={27}
                    strokeWidth={1.5}
                    className="
                      text-zinc-500
                      transition-all
                      duration-500
                      group-hover:scale-110
                      group-hover:text-red-500
                    "
                  />

                  {/* ICON UNDERLINE */}
                  <div className="absolute -bottom-[1px] left-1/2 h-[2px] w-5 -translate-x-1/2 bg-red-600 transition-all duration-500 group-hover:w-10" />
                </div>

                {/* NUMBER */}
                <span className="relative mb-3 block text-[9px] font-medium tracking-[0.4em] text-red-600">
                  // {feature.id}
                </span>

                {/* TITLE */}
                <h3 className="relative text-[11px] font-bold tracking-[0.12em] text-white md:text-xs">
                  {feature.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="relative mx-auto mt-3 max-w-[190px] text-[10px] leading-5 tracking-wide text-zinc-600 transition-colors duration-500 group-hover:text-zinc-400">
                  {feature.description}
                </p>

                {/* BOTTOM STATUS */}
                <div className="absolute bottom-0 left-0 flex w-full items-center justify-between border-t border-zinc-900 px-4 py-2">
                  <span className="text-[7px] tracking-[0.3em] text-zinc-700">
                    STATUS
                  </span>

                  <span className="flex items-center gap-1.5 text-[7px] tracking-[0.2em] text-zinc-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-600 transition-all duration-300 group-hover:shadow-[0_0_8px_rgba(220,38,38,0.8)]" />
                    ACTIVE
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* BOTTOM LINE */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
    </section>
  );
}
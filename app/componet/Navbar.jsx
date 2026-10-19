"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useContext } from "react";
import { FileSliders, House, ShoppingCart, Store } from "lucide-react";

import { ShoopingContaxt } from "./contaxt/shoopingContaxt";

const Navbar = () => {
  // ================= CONTEXT =================

  const { number } = useContext(ShoopingContaxt);

  // ================= PATH =================

  const pathName = usePathname();

  // ================= NAVIGATION =================

  const tabs = [
   
    {
      title: (
        <div className="relative flex items-center justify-center">
          <House
           size={28}
            strokeWidth={1.5}
            className={`
              transition-all
              duration-300

              ${
                pathName === "/cart"
                  ? "text-red-500 drop-shadow-[0_0_8px_#ef4444]"
                  : "text-red-500 group-hover:drop-shadow-[0_0_8px_#ef4444]"
              }
            `} />
        </div>
      ),
      href: "/",
    },
    {
     title: (
        <div className="relative flex items-center justify-center">
          <Store
           size={28}
            strokeWidth={1.5}
            className={`
              transition-all
              duration-300

              ${
                pathName === "/cart"
                  ? "text-red-500 drop-shadow-[0_0_8px_#ef4444]"
                  : "text-red-500 group-hover:drop-shadow-[0_0_8px_#ef4444]"
              }
            `} />
        </div>
      ),
      href: "/store",
    },
    {
      title: (
        <div className="relative flex items-center justify-center">
          <ShoppingCart
            size={28}
            strokeWidth={1.5}
            className={`
              transition-all
              duration-300

              ${
                pathName === "/cart"
                  ? "text-red-500 drop-shadow-[0_0_8px_#ef4444]"
                  : "text-red-500 group-hover:drop-shadow-[0_0_8px_#ef4444]"
              }
            `}
          />

          {/* ================= CART BADGE ================= */}

          {number > 0 && (
            <span
              className="
                absolute
                -right-2
                -top-2

                flex
                h-4
                min-w-4
                items-center
                justify-center

                rounded-full
                bg-red-500

                px-1

                text-[9px]
                font-bold
                leading-none
                text-white

                shadow-[0_0_8px_#ef4444]

                transition-all
                duration-300
              "
            >
              {number}
            </span>
          )}
        </div>
      ),
      href: "/cart",
    },
     {
       title: (
        <div className="relative flex items-center justify-center">
          <FileSliders 
           size={28}
            strokeWidth={1.5}
            className={`
              transition-all
              duration-300

              ${
                pathName === "/cart"
                  ? "text-red-500 drop-shadow-[0_0_8px_#ef4444]"
                  : "text-red-500 group-hover:drop-shadow-[0_0_8px_#ef4444]"
              }
            `} />
        </div>
      ),
      href: "/dashboard",
    },
  ];

  // ================= UI =================

  return (
    <nav
      className="
        w-full
        overflow-hidden
        border-b
        border-zinc-800
        bg-black
        shadow-[0_0_20px_rgba(0,0,0,0.8)]
      "
    >
      <div
        className="
          mx-auto
          flex
          min-h-16
          w-full
          max-w-7xl
          items-center
          justify-between
          gap-4
          px-4

          sm:min-h-18
          sm:px-6

          md:px-8

          lg:min-h-20
          lg:px-8
        "
      >
        {/* ================= LOGO ================= */}

        <Link
          href="/"
          className="
            flex
            shrink-0
            items-center
            transition-all
            duration-300
            hover:opacity-80
          "
        >
          <img
            src="/7df670d2-c441-4384-a8a7-e3a07212b946.png"
            alt="GAMERGEAR"
            className="
              h-10
              w-auto
              object-contain

              sm:h-12

              md:h-14

              lg:h-16
            "
          />
        </Link>

        {/* ================= NAVIGATION ================= */}

        <div
          className="
            flex
            min-w-0
            items-center
            justify-end
            gap-0

            sm:gap-1

            md:gap-2
          "
        >
          {tabs.map((item) => {
            const isActive = item.href === pathName;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  group
                  relative
                  shrink-0

                  px-2
                  py-3

                  text-[10px]
                  font-bold
                  tracking-[0.04em]

                  transition-all
                  duration-300

                  sm:px-3
                  sm:text-[11px]
                  sm:tracking-[0.06em]

                  md:px-4
                  md:text-xs
                  md:tracking-[0.08em]

                  lg:px-5
                  lg:text-sm
                  lg:tracking-[0.12em]

                  ${
                    isActive
                      ? "text-red-500"
                      : "text-zinc-400 hover:text-white"
                  }
                `}
              >
                {item.title}

                {/* ================= ACTIVE / HOVER LINE ================= */}

                <span
                  className={`
                    absolute
                    bottom-0
                    left-1/2

                    h-[2px]

                    -translate-x-1/2

                    bg-red-500

                    shadow-[0_0_10px_#ef4444]

                    transition-all
                    duration-300

                    ${
                      isActive
                        ? "w-[80%]"
                        : "w-0 group-hover:w-[80%]"
                    }
                  `}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

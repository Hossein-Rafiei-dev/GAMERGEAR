
"use client";

import React, { useContext, useEffect, useState } from "react";
import { ShoopingContaxt } from "@/app/componet/contaxt/shoopingContaxt";
import { Trash } from "lucide-react";
import Link from "next/link";

const CartPage  = () => {
  // ================= CONTEXT =================

  const { cartItem , deletAll } = useContext(ShoopingContaxt);

  // ================= PRODUCTS =================

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // ================= GET PRODUCTS =================

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await fetch("http://localhost:8000/posts");

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();

        setProducts(data);
      } catch (error) {
        console.log("Error:", error);
      } finally {
        setLoading(false);
      }
    }

    getProducts();
  }, []);

  // ================= TOTAL PRICE =================

  const totalPrice = cartItem.reduce((total, item) => {
    const product = products.find(
      (product) => Number(product.id) === Number(item.id)
    );

    if (!product) {
      return total;
    }

    return total + Number(product.price) * Number(item.qyt);
  }, 0);

  // ================= LOADING =================

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#030303] text-white">
        <div className="text-center">
          <p className="text-xs tracking-[0.3em] text-red-500">
            SYSTEM // LOADING
          </p>

          <p className="mt-3 text-sm text-zinc-600">
            Loading your gear...
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#030303] px-4 py-8 text-white sm:px-6 md:px-8 lg:py-12">
      <div className="mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}

        <div className="mb-10">
          <p className="mb-2 text-xs font-medium tracking-[0.3em] text-red-500">
            SYSTEM // CART
          </p>

          <h1 className="text-3xl font-black uppercase tracking-tight sm:text-4xl md:text-5xl">
            YOUR GEAR_
          </h1>

        <p className="mt-3 text-sm text-zinc-500">
  {"// review selected equipment before checkout"}
</p>
        </div>

        {/* ================= MAIN CONTENT ================= */}

        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">

          {/* ================= PRODUCTS ================= */}

          <section className="space-y-4">

            {/* ================= EMPTY CART ================= */}

            {cartItem.length === 0 && (
              <div className="border border-dashed border-zinc-800 py-20 text-center">

                <p className="text-xs tracking-[0.3em] text-zinc-600">
                  SYSTEM // CART EMPTY
                </p>

                <h2 className="mt-3 text-xl font-bold text-zinc-400">
                  NO GEAR SELECTED_
                </h2>

                <p className="mt-2 text-sm text-zinc-600">
                  Add some equipment from the store.
                </p>

              </div>
            )}

            {/* ================= CART PRODUCTS ================= */}

            {cartItem.map((item) => {

              const product = products.find(
                (product) =>
                  Number(product.id) === Number(item.id)
              );

              // اگر محصول در API پیدا نشد
              if (!product) {
                return null;
              }

              return (
                <div
                  key={item.id}
                  className="
                    group
                    flex
                    flex-col
                    gap-5
                    border
                    border-zinc-800
                    bg-zinc-950
                    p-4
                    transition-all
                    duration-300
                    hover:border-red-500/50

                    sm:flex-row
                    sm:items-center
                    sm:p-5
                  "
                >

                  {/* ================= IMAGE ================= */}

                  <div
                    className="
                      h-40
                      w-full
                      shrink-0
                      overflow-hidden
                      bg-black

                      sm:h-28
                      sm:w-28
                    "
                  >
                    <img
                      src={product.img}
                      alt={product.title}
                      className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-500
                        group-hover:scale-105
                      "
                    />
                  </div>

                  {/* ================= PRODUCT INFO ================= */}

                  <div
                    className="
                      flex
                      flex-1
                      flex-col
                      justify-between
                      gap-5

                      sm:flex-row
                      sm:items-center
                    "
                  >

                    {/* PRODUCT NAME */}

                    <div>

                      <p className="mb-1 text-[10px] tracking-[0.2em] text-red-500">
                        GEAR // {String(product.id).padStart(3, "0")}
                      </p>

                      <h2 className="text-lg font-bold uppercase">
                        {product.title}
                      </h2>

                      <p className="mt-1 text-sm text-zinc-500">
                        Gaming equipment
                      </p>

                    </div>

                    {/* ================= QUANTITY ================= */}

                    <div className="flex items-center gap-3">

                      <button
                        className="
                          flex
                          h-8
                          w-8
                          items-center
                          justify-center
                          border
                          border-zinc-700
                          bg-zinc-900
                          text-zinc-400
                          transition
                          hover:border-red-500
                          hover:text-red-500
                        "
                      >
                        -
                      </button>

                      <span className="min-w-6 text-center text-sm font-bold">
                        {item.qyt}
                      </span>

                      <button
                        className="
                          flex
                          h-8
                          w-8
                          items-center
                          justify-center
                          border
                          border-zinc-700
                          bg-zinc-900
                          text-zinc-400
                          transition
                          hover:border-red-500
                          hover:text-red-500
                        "
                      >
                        +
                      </button>
                  <button
            onClick={() => deletAll(item.id)}
            className="
              ml-2
              flex
              h-10
              w-10
              items-center
              justify-center
              text-red-500
              transition-all
              duration-300
              hover:scale-110
              hover:text-red-400
            "
          >
            <Trash
              size={24}
              strokeWidth={1.5}
            />
          </button>   

                    </div>

                    {/* ================= PRICE ================= */}

                    <div className="text-left sm:text-right">

                      <p className="text-lg font-bold text-white">
                        $
                        {Number(product.price) * Number(item.qyt)}
                      </p>

                      <p className="mt-1 text-xs text-zinc-600">
                        ${product.price} × {item.qyt}
                      </p>

                    </div>

                  </div>
                </div>
              );
            })}

          </section>

          {/* ================= SETTLEMENT ================= */}

          <aside
            className="
              h-fit
              border
              border-zinc-800
              bg-zinc-950
              p-5

              sm:p-6

              lg:sticky
              lg:top-6
            "
          >

            {/* ================= HEADER ================= */}

            <div className="mb-6 border-b border-zinc-800 pb-4">

              <p className="text-[10px] tracking-[0.25em] text-red-500">
                SYSTEM // SETTLEMENT
              </p>

              <h2 className="mt-2 text-xl font-bold uppercase">
                ORDER SUMMARY_
              </h2>

            </div>

            {/* ================= PRICES ================= */}

            <div className="space-y-4">

              <div className="flex items-center justify-between text-sm">

                <span className="text-zinc-500">
                  Total price
                </span>

                <span className="font-semibold text-white">
                  ${totalPrice}
                </span>

              </div>

              <div className="flex items-center justify-between text-sm">

                <span className="text-zinc-500">
                  Discount
                </span>

                <span className="font-semibold text-red-500">
                  0%
                </span>

              </div>

              <div className="my-4 border-t border-zinc-800" />

              <div className="flex items-center justify-between">

                <span className="text-sm font-bold uppercase">
                  Final price
                </span>

                <span className="text-2xl font-black text-red-500">
                  ${totalPrice}
                </span>

              </div>

            </div>

            {/* ================= DISCOUNT ================= */}

            <div className="mt-7">

              <label
                htmlFor="discount"
                className="
                  mb-2
                  block
                  text-[10px]
                  font-bold
                  tracking-[0.2em]
                  text-zinc-500
                "
              >
                DISCOUNT CODE
              </label>

              <div className="flex">

                <input
                  id="discount"
                  type="text"
                  placeholder="ENTER CODE"
                  className="
                    min-w-0
                    flex-1
                    border
                    border-zinc-800
                    bg-black
                    px-3
                    py-3
                    text-xs
                    uppercase
                    text-white
                    outline-none

                    placeholder:text-zinc-700

                    focus:border-red-500
                  "
                />

                <button
                  className="
                    border
                    border-red-500
                    bg-red-500
                    px-4
                    text-xs
                    font-bold
                    text-black
                    transition
                    hover:bg-red-400
                  "
                >
                  APPLY
                </button>

              </div>

            </div>

            {/* ================= SHOPPING ================= */}

      <Link href={'/shopAddres'}>
            <button
              disabled={cartItem.length === 0}
              className="
                mt-6
                w-full
                bg-red-500
                px-6
                py-4
                text-sm
                font-black
                uppercase
                tracking-[0.15em]
                text-black
                shadow-[0_0_20px_rgba(239,68,68,0.15)]
                transition-all
                duration-300

                hover:bg-red-400
                hover:shadow-[0_0_30px_rgba(239,68,68,0.3)]

                active:scale-[0.98]

                disabled:cursor-not-allowed
                disabled:bg-zinc-800
                disabled:text-zinc-600
                disabled:shadow-none
              "
            >
              SHOPPING
            </button>
      </Link>

          </aside>

        </div>
      </div>
    </main>
  );
};

export default CartPage;

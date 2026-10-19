
"use client";

import axios from "axios";
import { useState } from "react";

const Page = () => {
  const [product, setProduct] = useState({
    title: "",
    img: "",
    price: "",
    descrption: "",
  });

  const handelclick = (e) => {
    const { value, name } = e.target;

    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handelSubmit = async () => {
    try {
      await axios.post("http://localhost:8000/posts", product);

      setProduct({
        title: "",
        img: "",
        price: "",
        descrption: "",
      });
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <main className="min-h-screen bg-[#030303] px-4 py-12 text-white sm:px-6 lg:py-20">
      <div className="mx-auto max-w-2xl">

        {/* Header */}
        <div className="mb-8 border-b border-red-600/30 pb-6">
          <p className="mb-3 text-xs font-medium tracking-[0.3em] text-red-500">
            SYSTEM // ADMIN PANEL
          </p>

          <h1 className="text-3xl font-black tracking-wide sm:text-5xl">
            ADD PRODUCT<span className="text-red-600">_</span>
          </h1>

          <p className="mt-4 text-sm leading-6 text-gray-500">
            // Enter the product details to expand your gear collection.
          </p>
        </div>

        {/* Form Card */}
        <div className="rounded-xl border border-white/10 bg-[#0a0a0a] p-5 shadow-2xl shadow-red-950/10 sm:p-8">

          <div className="mb-7 flex items-center gap-3">
            <div className="h-8 w-1 bg-red-600" />
            <h2 className="text-sm font-bold tracking-[0.15em] sm:text-base">
              PRODUCT INFORMATION
            </h2>
          </div>

          <div className="space-y-6">

            {/* Title */}
            <div>
              <label
                htmlFor="title"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Product Title
              </label>

              <input
                id="title"
                onChange={handelclick}
                value={product.title}
                type="text"
                placeholder="Enter product title..."
                name="title"
                className="w-full rounded-lg border border-white/10 bg-[#050505] px-4 py-3.5 text-sm text-white outline-none transition duration-300 placeholder:text-gray-600 focus:border-red-600 focus:ring-1 focus:ring-red-600/40"
              />
            </div>

            {/* Image URL */}
            <div>
              <label
                htmlFor="img"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Image URL
              </label>

              <input
                id="img"
                onChange={handelclick}
                value={product.img}
                type="url"
                placeholder="https://example.com/image.png"
                name="img"
                className="w-full rounded-lg border border-white/10 bg-[#050505] px-4 py-3.5 text-sm text-white outline-none transition duration-300 placeholder:text-gray-600 focus:border-red-600 focus:ring-1 focus:ring-red-600/40"
              />
            </div>

            {/* Price */}
            <div>
              <label
                htmlFor="price"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Product Price
              </label>

              <div className="relative">
                <input
                  id="price"
                  onChange={handelclick}
                  value={product.price}
                  type="number"
                  min="0"
                  placeholder="Enter product price..."
                  name="price"
                  className="w-full rounded-lg border border-white/10 bg-[#050505] px-4 py-3.5 pr-20 text-sm text-white outline-none transition duration-300 placeholder:text-gray-600 focus:border-red-600 focus:ring-1 focus:ring-red-600/40"
                />

                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs tracking-wider text-gray-500">
                  TOMAN
                </span>
              </div>
            </div>

            {/* Description */}
            <div>
              <label
                htmlFor="descrption"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Product Description
              </label>

              <textarea
                id="descrption"
                onChange={handelclick}
                value={product.descrption}
                name="descrption"
                rows={5}
                placeholder="Describe your product..."
                className="w-full resize-y rounded-lg border border-white/10 bg-[#050505] px-4 py-3.5 text-sm leading-6 text-white outline-none transition duration-300 placeholder:text-gray-600 focus:border-red-600 focus:ring-1 focus:ring-red-600/40"
              />
            </div>

            {/* Submit Button */}
            <button
              onClick={handelSubmit}
              className="group flex w-full items-center justify-center gap-3 rounded-lg border border-red-600 bg-red-600 px-5 py-4 text-sm font-bold tracking-[0.2em] text-white transition duration-300 hover:bg-transparent hover:text-red-500 active:scale-[0.98]"
            >
              <span>ADD PRODUCT</span>

              <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>

          {/* Footer */}
          <div className="mt-7 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-5 text-[10px] tracking-wider text-gray-600 sm:text-xs">
            <span>SYSTEM // PRODUCT CREATION</span>

            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-red-600" />
              READY TO DEPLOY
            </span>
          </div>
        </div>

        <p className="mt-5 text-center text-xs text-gray-700">
          GAMERGEAR © 2026 — GEAR UP. LEVEL UP.
        </p>
      </div>
    </main>
  );
};

export default Page;

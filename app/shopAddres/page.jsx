
"use client";

import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ShoopingContaxt } from "../componet/contaxt/shoopingContaxt";

const ShopAddres = () => {
  const { cartItem: data } = useContext(ShoopingContaxt);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    province: "",
    city: "",
    address: "",
  });

  // دریافت اطلاعات کامل محصولات از API
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get("http://localhost:8000/posts");
        setProducts(res.data);
      } catch (error) {
        console.error("Error fetching products:", error);
        setMessage("دریافت اطلاعات محصولات با خطا مواجه شد.");
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  // تطبیق محصولات سبد خرید با اطلاعات API
  const cartItems = Array.isArray(data) ? data : [];

  const checkoutItems = cartItems
    .map((cartItem) => {
      const product = products.find(
        (product) => String(product.id) === String(cartItem.id)
      );

      if (!product) return null;

      return {
        ...product,
        qyt: Number(cartItem.qyt) > 0 ? Number(cartItem.qyt) : 1,
      };
    })
    .filter(Boolean);

  // محاسبه مبلغ کل با درنظرگرفتن تعداد
  const totalPrice = checkoutItems.reduce(
    (total, item) =>
      total + Number(item.price || 0) * item.qyt,
    0
  );

  const handelClick = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ثبت سفارش
  const handelSumbit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (checkoutItems.length === 0) {
      setMessage("سبد خرید خالی است یا اطلاعات محصولات بارگذاری نشده‌اند.");
      return;
    }

    if (
      !formData.name.trim() ||
      !formData.lastName.trim() ||
      !formData.phone.trim() ||
      !formData.country.trim() ||
      !formData.province.trim() ||
      !formData.city.trim() ||
      !formData.address.trim()
    ) {
      setMessage("لطفاً تمام اطلاعات ضروری را تکمیل کنید.");
      return;
    }

    setSubmitting(true);

    try {
      const order = {
        ...formData,
        data: checkoutItems.map((item) => ({
          id: item.id,
          title: item.title,
          img: item.img,
          price: Number(item.price),
          qyt: item.qyt,
        })),
        totalPrice,
        status: "pending",
        createdAt: new Date().toISOString(),
      };

      await axios.post("http://localhost:8000/order", order);

      setMessage("سفارش با موفقیت ثبت شد.");

      setFormData({
        name: "",
        lastName: "",
        email: "",
        phone: "",
        country: "",
        province: "",
        city: "",
        address: "",
      });

      console.log("Order added successfully:", order);

      // توجه: اینجا سبد خرید پاک نمی‌شود.
      // بعدا می‌توانیم پاک‌کردن سبد را به Context اضافه کنیم.
    } catch (error) {
      console.error("Error adding order:", error);
      setMessage("ثبت سفارش ناموفق بود. اتصال JSON Server را بررسی کنید.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputStyle =
    "w-full rounded-lg border border-zinc-800 bg-[#080808] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-red-600 focus:ring-1 focus:ring-red-600/30";

  return (
    <main className="min-h-screen bg-[#030303] px-4 py-12 text-white sm:px-6 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <header className="mb-10 border-b border-red-600/30 pb-6">
          <p className="mb-3 text-xs font-medium tracking-[0.3em] text-red-500">
            SYSTEM // CHECKOUT
          </p>

          <h1 className="text-3xl font-black tracking-wide sm:text-5xl">
            COMPLETE YOUR ORDER
            <span className="text-red-600">_</span>
          </h1>

          <p className="mt-4 text-sm leading-6 text-zinc-500">
            /Enter your information and review your gear before payment.
          </p>
        </header>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-5">
          {/* CUSTOMER FORM */}
          <section className="space-y-8 lg:col-span-3">
            <form onSubmit={handelSumbit} className="space-y-8">
              {/* PERSONAL INFORMATION */}
              <div className="rounded-xl border border-zinc-800 bg-[#090909] p-5 sm:p-8">
                <div className="mb-7 flex items-center gap-3">
                  <div className="h-8 w-1 bg-red-600" />
                  <div>
                    <p className="text-xs tracking-[0.2em] text-red-500">
                      STEP // 01
                    </p>
                    <h2 className="mt-1 text-lg font-bold sm:text-xl">
                      PERSONAL INFORMATION
                    </h2>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm text-zinc-400">
                      First Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handelClick}
                      placeholder="Enter your name"
                      autoComplete="given-name"
                      required
                      className={inputStyle}
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="mb-2 block text-sm text-zinc-400">
                      Last Name *
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handelClick}
                      placeholder="Enter your last name"
                      autoComplete="family-name"
                      required
                      className={inputStyle}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm text-zinc-400">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handelClick}
                      placeholder="example@email.com"
                      autoComplete="email"
                      className={inputStyle}
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm text-zinc-400">
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handelClick}
                      placeholder="Your phone number"
                      autoComplete="tel"
                      required
                      className={inputStyle}
                    />
                  </div>
                </div>
              </div>

              {/* SHIPPING ADDRESS */}
              <div className="rounded-xl border border-zinc-800 bg-[#090909] p-5 sm:p-8">
                <div className="mb-7 flex items-center gap-3">
                  <div className="h-8 w-1 bg-red-600" />
                  <div>
                    <p className="text-xs tracking-[0.2em] text-red-500">
                      STEP // 02
                    </p>
                    <h2 className="mt-1 text-lg font-bold sm:text-xl">
                      SHIPPING ADDRESS
                    </h2>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="country" className="mb-2 block text-sm text-zinc-400">
                      Country *
                    </label>
                    <input
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handelClick}
                      placeholder="Country"
                      autoComplete="country-name"
                      required
                      className={inputStyle}
                    />
                  </div>

                  <div>
                    <label htmlFor="province" className="mb-2 block text-sm text-zinc-400">
                      Province / State *
                    </label>
                    <input
                      id="province"
                      name="province"
                      value={formData.province}
                      onChange={handelClick}
                      placeholder="Province"
                      required
                      className={inputStyle}
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="city" className="mb-2 block text-sm text-zinc-400">
                      City *
                    </label>
                    <input
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handelClick}
                      placeholder="City"
                      autoComplete="address-level2"
                      required
                      className={inputStyle}
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="address" className="mb-2 block text-sm text-zinc-400">
                      Full Address *
                    </label>
                    <textarea
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handelClick}
                      rows={4}
                      placeholder="Street, building, unit and other details..."
                      autoComplete="street-address"
                      required
                      className={`${inputStyle} resize-y`}
                    />
                  </div>
                </div>
              </div>

              {message && (
                <p
                  role="status"
                  className={`rounded-lg border p-4 text-sm ${
                    message.includes("موفقیت")
                      ? "border-green-800 bg-green-950/30 text-green-400"
                      : "border-red-800 bg-red-950/30 text-red-400"
                  }`}
                >
                  {message}
                </p>
              )}

              <button
                type="submit"
                disabled={submitting || loading || checkoutItems.length === 0}
                className="group flex w-full items-center justify-center gap-3 rounded-lg border border-red-600 bg-red-600 px-5 py-4 text-sm font-bold tracking-[0.15em] text-white transition duration-300 hover:bg-transparent hover:text-red-500 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {submitting ? "SUBMITTING..." : "SUBMIT ORDER"}
                <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </form>
          </section>

          {/* ORDER SUMMARY */}
          <aside className="lg:sticky lg:top-8 lg:col-span-2">
            <div className="overflow-hidden rounded-xl border border-zinc-800 bg-[#090909]">
              <div className="border-b border-zinc-800 p-5 sm:p-6">
                <p className="mb-2 text-xs tracking-[0.2em] text-red-500">
                  STEP // 03
                </p>

                <h2 className="text-xl font-black tracking-wide">
                  YOUR GEAR<span className="text-red-600">_</span>
                </h2>

                <p className="mt-2 text-sm text-zinc-500">
                  {checkoutItems.length} product(s) in your order
                </p>
              </div>

              <div>
                {loading ? (
                  <p className="p-8 text-center text-sm text-zinc-500">
                    Loading products...
                  </p>
                ) : checkoutItems.length === 0 ? (
                  <div className="p-8 text-center">
                    <p className="text-sm text-zinc-500">
                      No matching products found in your cart.
                    </p>
                  </div>
                ) : (
                  checkoutItems.map((item) => (
                    <div
                      key={item.id}
                      className="group flex gap-4 border-b border-zinc-800/80 p-4 transition hover:bg-zinc-900/50 sm:p-5"
                    >
                      <div className="h-24 w-24 shrink-0 overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950 sm:h-28 sm:w-28">
                        <img
                          src={item.img}
                          alt={item.title || "Product"}
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        />
                      </div>

                      <div className="flex min-w-0 flex-1 flex-col justify-between py-1">
                        <div>
                          <p className="mb-2 text-[10px] tracking-[0.15em] text-red-500">
                            PRODUCT // {item.id}
                          </p>

                          <h3 className="line-clamp-2 text-sm font-bold leading-5 sm:text-base">
                            {item.title}
                          </h3>
                        </div>

                        <p className="mt-3 text-sm text-zinc-400">
                          Quantity: {item.qyt}
                        </p>

                        <p className="mt-2 text-lg font-bold text-white">
                          ${Number(item.price || 0).toLocaleString("en-US")}
                        </p>
                      </div>
                    </div>
                  ))
                )}
              </div>

              <div className="space-y-4 p-5 sm:p-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-zinc-400">Subtotal</span>
                  <span className="font-medium text-white">
                    ${totalPrice.toLocaleString("en-US")}
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-zinc-400">Shipping</span>
                  <span className="text-xs text-zinc-500">
                    Calculated later
                  </span>
                </div>

                <div className="border-t border-zinc-800 pt-4">
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-bold">TOTAL</span>
                    <span className="text-2xl font-black text-red-500">
                      ${totalPrice.toLocaleString("en-US")}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-lg border border-zinc-800 bg-black p-3">
                  <span className="text-red-500">◆</span>
                  <p className="text-xs leading-5 text-zinc-500">
                    Review your products and shipping details before submitting
                    your order.
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-4 text-center text-[10px] tracking-[0.15em] text-zinc-600">
              GAMERGEAR // GEAR UP. LEVEL UP.
            </p>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default ShopAddres;

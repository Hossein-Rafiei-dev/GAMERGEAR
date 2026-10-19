
"use client";

import { useContext } from "react";
import { Trash } from "lucide-react";
import { ShoopingContaxt } from "@/app/componet/contaxt/shoopingContaxt";

const CartButton = ({ id }) => {
  const {
    cartItem,
    actives,
    handelincreseproduct,
    handelDecresproduct,
    deletAll,
  } = useContext(ShoopingContaxt);

  // پیدا کردن محصول فعلی در سبد
  const currentItem = cartItem.find(
    (item) => Number(item.id) === Number(id)
  );

  // تعداد محصول
  const quantity = currentItem?.qyt || 0;

  // آیا محصول داخل سبد هست؟
  const active = quantity > 0;

  return (
    <div className="w-full">
      {active ? (
        // -----------------------------
        // محصول داخل سبد است
        // -----------------------------
        <div className="flex items-center gap-3">

          {/* MINUS */}
          <button
            onClick={() => handelDecresproduct(id)}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              border
              border-red-500
              text-xl
              font-bold
              text-red-500
              transition-all
              duration-300
              hover:bg-red-500
              hover:text-black
              hover:shadow-[0_0_20px_rgba(239,68,68,0.5)]
            "
          >
            -
          </button>

          {/* QUANTITY */}
          <span
            className="
              min-w-[30px]
              text-center
              text-lg
              font-bold
              text-white
            "
          >
            {quantity}
          </span>

          {/* PLUS */}
          <button
            onClick={() => handelincreseproduct(id)}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              border
              border-red-500
              text-xl
              font-bold
              text-red-500
              transition-all
              duration-300
              hover:bg-red-500
              hover:text-black
              hover:shadow-[0_0_20px_rgba(239,68,68,0.5)]
            "
          >
            +
          </button>

          {/* DELETE */}
          <button
            onClick={() => deletAll(id)}
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
      ) : (
        // -----------------------------
        // محصول هنوز داخل سبد نیست
        // -----------------------------
        <button
          onClick={() => actives(id)}
          className="
            w-full
            bg-red-600
            px-8
            py-4
            text-sm
            font-bold
            uppercase
            tracking-[0.2em]
            text-black
            transition-all
            duration-300
            hover:bg-red-500
            hover:shadow-[0_0_25px_rgba(239,68,68,0.5)]
            md:w-fit
          "
        >
          Add To Cart
        </button>
      )}
    </div>
  );
};

export default CartButton;
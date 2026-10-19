
"use client";

import { createContext, useEffect, useState } from "react";

export const ShoopingContaxt = createContext(null);

const ShoopingContaxtProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);

  // -----------------------------
  // تعداد کل محصولات داخل سبد
  // -----------------------------
  const number = cartItem.reduce((total, item) => {
    return total + item.qyt;
  }, 0);

  // -----------------------------
  // اضافه کردن محصول به سبد
  // -----------------------------
  function actives(id) {
    setCartItem((prev) => {
      // بررسی می‌کنیم محصول قبلاً داخل سبد هست یا نه
      const existingItem = prev.find(
        (item) => Number(item.id) === Number(id)
      );

      // اگر قبلاً وجود داشت، دوباره اضافه نکن
      if (existingItem) {
        return prev;
      }

      // محصول جدید با تعداد 1
      return [
        ...prev,
        {
          id: id,
          qyt: 1,
        },
      ];
    });
  }

  // -----------------------------
  // افزایش تعداد محصول
  // -----------------------------
  function handelincreseproduct(id) {
    setCartItem((prev) => {
      return prev.map((item) => {
        if (Number(item.id) === Number(id)) {
          return {
            ...item,
            qyt: item.qyt + 1,
          };
        }

        return item;
      });
    });
  }

  // -----------------------------
  // کاهش تعداد محصول
  // -----------------------------
  function handelDecresproduct(id) {
    setCartItem((prev) => {
      return prev
        .map((item) => {
          if (Number(item.id) === Number(id)) {
            return {
              ...item,
              qyt: item.qyt - 1,
            };
          }

          return item;
        })
        // اگر تعداد محصول صفر شد، حذفش کن
        .filter((item) => item.qyt > 0);
    });
  }

  // -----------------------------
  // حذف کامل محصول
  // -----------------------------
  function deletAll(id) {
    setCartItem((prev) => {
      return prev.filter(
        (item) => Number(item.id) !== Number(id)
      );
    });
  }
 
const [isLoaded, setIsLoaded] = useState(false);

// ابتدا اطلاعات قبلی را بازیابی کن
useEffect(() => {
  try {
    const stored = localStorage.getItem("cartitem");

    if (stored) {
      setCartItem(JSON.parse(stored));
    }
  } catch (error) {
    console.error("خطا در خواندن سبد خرید:", error);
  } finally {
    setIsLoaded(true);
  }
}, []);

// بعد از بازیابی، اطلاعات را ذخیره کن
useEffect(() => {
  if (!isLoaded) return;

  localStorage.setItem("cartitem", JSON.stringify(cartItem));
}, [cartItem, isLoaded]);

  

  return (
    <ShoopingContaxt.Provider
      value={{
        cartItem,
        number,

        actives,
        handelincreseproduct,
        handelDecresproduct,
        deletAll,
      }}
    >
      {children}
    </ShoopingContaxt.Provider>
  );
};

export default ShoopingContaxtProvider;

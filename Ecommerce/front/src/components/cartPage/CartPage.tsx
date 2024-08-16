/* eslint-disable @next/next/no-img-element */
"use client";

import { createOrder } from "@/helpers/orders.helper";
import { IProduct } from "@/interfaces/IProduct";
import { IUserSession } from "@/interfaces/IValidate";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const CartPage = () => {
  const router = useRouter();
  const [userSession, setUserSession] = useState<IUserSession>();
  const [cart, setCart] = useState<IProduct[]>([]);
  const [totalCart, setTotalCart] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const userData = localStorage.getItem("userSession");
      setUserSession(JSON.parse(userData!));
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
      if (storedCart) {
        let totalCart = 0;
        storedCart.map((item: IProduct) => {
          totalCart = totalCart + item.price;
        });
        setTotalCart(totalCart);
        setCart(storedCart);
      }
    }
  }, []);

  useEffect(() => {
    if (userSession?.user.name) {
      userSession?.user.name === undefined && router.push("/login");
    }
  }, [userSession?.user]);

  const clearCart = () => {
    localStorage.removeItem("cart");
    Swal.fire("Your cart has been cleared");
    router.push("/dashboard");
  };

  const handleCheckout = async () => {
    const idProducts = new Set(cart?.map((product) => product.id));
    await createOrder(Array.from(idProducts), userSession?.token!);
    Swal.fire("Thanks for your order!");
    localStorage.removeItem("cart");
    router.push("/dashboard");
  };

  return (
    <div className="flex flex-row items-center justify-around w-96 m-auto h-screen">
      <div>
        {cart && cart.length > 0 ? (
          cart?.map((cart) => {
            return (
              <div key={cart.id}>
                <div className="border m-12 bg-white text-black rounded-xl p-4">
                  <img
                    src={cart.image}
                    alt="productImage"
                    className="w-40 rounded-xl"
                  />
                  <p>Name: {cart.name}</p>
                  <p>Price: ${cart.price}</p>
                </div>
              </div>
            );
          })
        ) : (
          <div>
            <p className="p-12">Cart is empty</p>
          </div>
        )}
      </div>

      {cart.length > 0 && (
        <div>
          <p>Total: ${totalCart}</p>
          <button
            onClick={handleCheckout}
            className="border rounded-xl p-1 my-4"
          >
            Checkout
          </button>
          <button onClick={clearCart} className="border rounded-xl p-1 my-4">
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;

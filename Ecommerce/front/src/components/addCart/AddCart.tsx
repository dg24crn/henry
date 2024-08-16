"use client";
import React, { useEffect, useState } from "react";
import styles from "./AddCart.module.css";
import { IUserSession } from "@/interfaces/IValidate";
import Swal from "sweetalert2";
import { IProduct } from "@/interfaces/IProduct";

const AddCart: React.FC<IProduct> = ({
  name,
  image,
  description,
  price,
  stock,
  id,
}) => {
  const [userSession, setUserSession] = useState<IUserSession>();

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const userData = localStorage.getItem("userSession");
      setUserSession(JSON.parse(userData!));
    }
  }, []);

  const handleClick = () => {
    if (userSession && userSession.token) {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      const productExist = cart.some((product: IProduct) => {
        if (product.id == id) return true;
        return false;
      });
      if (productExist) {
        Swal.fire("This product is already in your cart");
      } else {
        cart.push({ name, image, price, description, stock, id });
        localStorage.setItem("cart", JSON.stringify(cart));
        Swal.fire("Added to Cart!");
      }
    } else {
      Swal.fire("You must log in first");
    }
  };

  return (
    <div className="text-center">
      <button className={styles.addToCartButton} onClick={handleClick}>
        Add To Cart
      </button>
    </div>
  );
};

export default AddCart;

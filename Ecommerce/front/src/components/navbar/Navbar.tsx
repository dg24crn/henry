/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { IUserSession } from "@/interfaces/IValidate";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [userSession, setUserSession] = useState<IUserSession>();

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const userData = localStorage.getItem("userSession");
      setUserSession(JSON.parse(userData!));
    }
  }, [pathname]);

  const handleLogout = () => {
    localStorage.clear();
  };

  return (
    <div>
      <div className="h-12 py-12 flex justify-around items-center">
        <Link href="/" className="flex items-center">
          <img className="w-24" src="/assets/img/Logo.png" alt="Logo" />
          <p>Home</p>
        </Link>
        {userSession && userSession.token ? (
          <div>
            <div className="flex mx-24">
              <Link className="mx-6" href="/dashboard">
                Dashboard
              </Link>
              <p>|</p>
              <Link className="ms-6" href="/cart">
                My Cart
              </Link>
              <Link className="ms-12" href="/login" onClick={handleLogout}>
                Log Out
              </Link>
            </div>
          </div>
        ) : (
          <div className="flex mx-24">
            <Link className="mx-6" href="/login">
              👤 Login
            </Link>
            <p>|</p>
            <Link className="ms-6" href="/register">
              👤 Register
            </Link>
          </div>
        )}
      </div>
      <hr />
    </div>
  );
}

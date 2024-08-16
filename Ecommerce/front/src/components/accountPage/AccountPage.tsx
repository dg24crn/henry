/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { IUserSession } from "@/interfaces/IValidate";
import React, { useEffect, useState } from "react";
import Orders from "../orders/Orders";

const AccountPage = () => {
  const [userSession, setUserSession] = useState<IUserSession>();

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const userData = localStorage.getItem("userSession");
      setUserSession(JSON.parse(userData!));
    }
  }, []);

  return (
    <div id="dashboardContainer" className="h-screen">
      <div>
        <h1 className="text-4xl text-center m-8">Dashboard</h1>
      </div>
      <div
        id="userInfoContainer"
        className="border border-black rounded-2xl w-fit h-fit m-auto"
      >
        <h1 className="text-4xl text-center m-4">
          Welcome, {userSession?.user.name}
        </h1>
        <h2 className="text-2xl text-center m-4">
          Your Current Address:
          <br />
          {userSession?.user.address}
        </h2>
      </div>
      <div
        id="userOrdersContainer"
        className="border border-black rounded-xl w-8/12 h-fit m-auto my-12"
      >
        <h1 className="text-4xl text-center m-4">Your Orders:</h1>
        <div className="border p-8">
          <Orders />
        </div>
      </div>
    </div>
  );
};

export default AccountPage;

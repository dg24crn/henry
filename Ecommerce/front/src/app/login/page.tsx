"use client";

import { login } from "@/helpers/auth.helper";
import { validateLoginForm } from "@/helpers/validate";
import { ILoginErrors, ILoginProps } from "@/interfaces/IValidate";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Login = () => {
  const router = useRouter();

  const initialState = {
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState<ILoginProps>(initialState);
  const [errors, setErrors] = useState<ILoginErrors>(initialState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await login(formData);
      const { token, user } = response;
      localStorage.setItem("userSession", JSON.stringify({ token, user }));
      Swal.fire("Logged Succesfully");
      router.push("/dashboard");
    } catch (error: any) {
      Swal.fire("Cannot find user");
    }
  };

  useEffect(() => {
    const errors = validateLoginForm(formData);
    setErrors(errors);
  }, [formData]);

  return (
    <div className="text-center m-8 h-screen">
      <form
        className="border-2 border-black rounded-xl p-6 m-auto h-fit w-fit"
        onSubmit={handleSubmit}
      >
        <h1 className="m-2 px-28 font-oswald text-4xl">Sign In</h1>
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input
          className="border-2 border-black rounded-xl text-black"
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        {errors.email && <span>{errors.email}</span>}
        <br />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input
          className="border-2 border-black rounded-xl text-black"
          id="password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
        />
        <br /> <br />
        <button className="border rounded border-white p-2">Sign In</button>
      </form>
      <Link className="underline" href="/register">
        Dont have an account?
      </Link>
    </div>
  );
};

export default Login;

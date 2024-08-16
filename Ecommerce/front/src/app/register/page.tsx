"use client";
import { register } from "@/helpers/auth.helper";
import { validateRegisterForm } from "@/helpers/validate";
import { IRegisterErrors, IRegisterProps } from "@/interfaces/IValidate";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const Register = () => {
  const router = useRouter();

  const initialState = {
    email: "",
    password: "",
    name: "",
    address: "",
    phone: "",
  };

  const [formData, setFormData] = useState<IRegisterProps>(initialState);
  const [errors, setErrors] = useState<IRegisterErrors>(initialState);

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
      await register(formData);
      Swal.fire("Registered Succesfully");
      router.push("/login");
    } catch (error: any) {
      Swal.fire("Please complete the fields")
      throw new Error(error);
    }
  };

  useEffect(() => {
    const errors = validateRegisterForm(formData);
    setErrors(errors);
  }, [formData]);

  return (
    <div className="text-center m-8 h-screen">
      <form
        className="border-2 border-black rounded-xl p-6 m-auto h-fit w-fit"
        onSubmit={handleSubmit}
      >
        <h1 className="m-2 px-28 font-oswald text-4xl">Sign Up</h1>
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
        <br />
        {errors.password && <span>{errors.password}</span>}
        <br />
        <label htmlFor="name">Name</label>
        <br />
        <input
          className="border-2 border-black rounded-xl text-black"
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        {errors.name && <span>{errors.name}</span>}
        <br />
        <label htmlFor="address">Address</label>
        <br />
        <input
          className="border-2 border-black rounded-xl text-black"
          id="address"
          name="address"
          type="text"
          value={formData.address}
          onChange={handleChange}
        />
        <br />
        {errors.address && <span>{errors.address}</span>}
        <br />
        <label htmlFor="phone">Phone</label>
        <br />
        <input
          className="border-2 border-black rounded-xl text-black"
          id="phone"
          name="phone"
          type="text"
          value={formData.phone}
          onChange={handleChange}
        />
        <br />
        {errors.phone && <span>{errors.phone}</span>}
        <br />
        <button className="border rounded border-white p-2">Sign Up</button>
      </form>
    </div>
  );
};

export default Register;

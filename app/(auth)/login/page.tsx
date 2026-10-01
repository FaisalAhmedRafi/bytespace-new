"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import facebook from "../../../assets/Icon/facebook.png";
import google from "../../../assets/Icon/google.png";

export default function LoginPage() {
  const [error, setError] = useState("");
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    if (String(d.get("password")).length < 8) return setError("Password must be at least 8 characters.");
    setError("");
    // TODO: signIn("credentials", { email, password }) from Auth.js, or POST to your NestJS API.
  }
  return (
    <div className="w-full max-w-xl rounded-[2rem] bg-white p-6 shadow-2xl sm:p-8 lg:flex lg:h-full lg:flex-col lg:justify-center">
      <p className="text-brand">Sign In</p>
      <h1 className="font-heading text-2xl lg:text-4xl font-semibold">Welcome Back</h1>
      <form onSubmit={onSubmit} className="mt-6 space-y-4">
        <label className="block"><span className="mb-1 block">Email</span><input name="email" type="email" required placeholder="designer@example.com" className="input !py-3 !text-base" /></label>
        <label className="block"><span className="mb-1 block">Password</span><input name="password" type="password" required placeholder="********" className="input !py-3 !text-base" /></label>
        {error && <p role="alert" className="text-sm text-red-600">{error}</p>}
        <div className="flex justify-end"><button className="btn-lime">Sign In</button></div>
      </form>
      <div className="my-5 flex items-center gap-4 text-gray-500"><hr className="flex-1" />or<hr className="flex-1" /></div>
      <div className="flex justify-center gap-4">
        <span className="p-2 border border-gray-300 rounded-xl"><Image src={facebook} alt="Facebook Logo" width={24} height={24} className="h-6 w-6" /></span>
        <span className="p-2 border border-gray-300 rounded-xl"><Image src={google} alt="Google Logo" width={24} height={24} className="h-6 w-6" /></span>
      </div>
      <p className="mt-6 text-center text-gray-500">New user? <Link href="/register" className="text-brand">Create an account</Link></p>
    </div>
  );
}

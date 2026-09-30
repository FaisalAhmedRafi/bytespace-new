"use client";
import Link from "next/link";
import { useState } from "react";

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
    <div className="w-full max-w-xl rounded-[2rem] bg-white p-10 shadow-2xl">
      <p className="text-brand">Sign In</p>
      <h1 className="font-heading text-5xl font-semibold">Welcome Back</h1>
      <form onSubmit={onSubmit} className="mt-10 space-y-6">
        <label className="block"><span className="mb-2 block">Email</span><input name="email" type="email" required placeholder="designer@example.com" className="input" /></label>
        <label className="block"><span className="mb-2 block">Password</span><input name="password" type="password" required placeholder="********" className="input" /></label>
        {error && <p role="alert" className="text-sm text-red-600">{error}</p>}
        <div className="flex justify-end"><button className="btn-lime">Sign In</button></div>
      </form>
      <div className="my-8 flex items-center gap-4 text-gray-500"><hr className="flex-1" />or<hr className="flex-1" /></div>
      <div className="flex justify-center gap-4">
        {["Facebook", "Google"].map((p) => (
          <button key={p} aria-label={`Continue with ${p}`} className="flex h-16 w-16 items-center justify-center rounded-2xl border border-gray-200 font-heading text-xl font-bold hover:border-brand">{p[0]}</button>
        ))}
      </div>
      <p className="mt-10 text-center text-gray-500">New user? <Link href="/register" className="text-brand">Create an account</Link></p>
    </div>
  );
}

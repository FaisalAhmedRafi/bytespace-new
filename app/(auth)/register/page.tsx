"use client";
import Link from "next/link";

export default function RegisterPage() {
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: POST FormData to your register endpoint, then redirect to /login.
  }
  return (
    <div className="w-full max-w-xl rounded-[2rem] bg-white p-6 shadow-2xl sm:p-8 lg:flex lg:h-full lg:flex-col lg:justify-center">
      <p className="text-brand">Create an Account</p>
      <h1 className="font-heading text-4xl font-semibold leading-tight">Welcome to ByteSpace</h1>
      <form onSubmit={onSubmit} className="mt-6 space-y-4">
        <label className="block"><span className="mb-1 block">Full Name</span><input name="name" required placeholder="Jamie Davis" className="input !py-3 !text-base" /></label>
        <label className="block"><span className="mb-1 block">Email</span><input name="email" type="email" required placeholder="designer@example.com" className="input !py-3 !text-base" /></label>
        <label className="block"><span className="mb-1 block">Password</span><input name="password" type="password" minLength={8} required placeholder="********" className="input !py-3 !text-base" /></label>
        <div className="flex justify-end"><button className="btn-lime">Continue</button></div>
      </form>
      <p className="mt-6 text-center text-gray-500">Already have an account? <Link href="/login" className="text-brand">Login</Link></p>
    </div>
  );
}

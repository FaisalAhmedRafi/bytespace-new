"use client";
import { useState, type CSSProperties } from "react";
import Image from "next/image";
import Navbar from "./Navbar";
import AutoLayoutHorizontal from "../assets/AutoLayoutHorizontal.png";

// Hero is laid out on the 2284x1624 design frame: positions are % of that frame,
// and text sizes use cqw so everything scales with the hero width.
const fs = (cqw: number, min: number): CSSProperties => ({ fontSize: `max(${cqw}cqw, ${min}px)` });
const orn = "pointer-events-none absolute hidden md:block";

export default function Hero({ onSearch }: { onSearch: (q: string) => void }) {
  const [q, setQ] = useState("");
  return (
    <section className="bg-grid-blue relative overflow-hidden md:aspect-[2284/1624]" style={{ containerType: "inline-size" }}>
      <Navbar />

      <div className="relative z-10 px-6 pb-8 pt-10 text-center text-white md:absolute md:inset-x-0 md:top-[15.5%] md:p-0">
        <h1 className="font-heading font-semibold leading-[1.15]" style={fs(5, 34)}>
          Get Access to Hundreds<br className="hidden md:block" /> Courses Available
        </h1>
        <p className="mt-5 md:mt-[3.2cqw]" style={fs(1.25, 14)}>Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.</p>
        <form
          onSubmit={(e) => { e.preventDefault(); onSearch(q); document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" }); }}
          className="mx-auto mt-8 flex max-w-xl items-center gap-3 md:mt-[4.4cqw] md:w-[40.3%] md:max-w-none md:gap-[1.1cqw]">
          <label className="flex flex-1 items-center gap-3 rounded-full bg-white px-5 text-gray-400 md:px-[1.8cqw]" style={{ height: "max(3.6cqw, 52px)" }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><circle cx="11" cy="11" r="7" /><path d="M20 20l-3.5-3.5" /></svg>
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Course, topic, creator" aria-label="Search courses" className="w-full bg-transparent text-ink outline-none placeholder:text-gray-400" style={fs(1.25, 16)} />
          </label>
          <button type="submit" className="btn-lime !px-[1.7cqw] !py-0" style={{ ...fs(1.25, 16), height: "max(3.2cqw, 48px)", paddingInline: "max(1.7cqw, 24px)" }}>Search</button>
        </form>
      </div>

      {/* mobile: simple student block */}
      <div className="relative mx-auto -mb-1 h-100 w-72 overflow-hidden rounded-t-full bg-lime md:hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/hero/student.png" alt="Smiling student with headphones and a laptop" className="absolute -left-6 top-8 w-[130%] max-w-none" />
      </div>

      {/* ornaments (sliced from 3d_ornament.png + Cone.png) */}
      {/* eslint-disable @next/next/no-img-element */}
      <img src="/hero/spring-lime.png" alt="" className={`${orn} left-0 top-[27.7%] w-[13.6%]`} />
      <img src="/hero/spring-white-sm.png" alt="" className={`${orn} left-[14.9%] top-[49.3%] w-[8.1%]`} />
      <img src="/hero/cylinder.png" alt="" className={`${orn} left-[88.7%] top-[24.9%] w-[11.3%]`} />
      <img src="/hero/cone.png" alt="" className={`${orn} left-[76.9%] top-[45.5%] w-[13.1%]`} />
      <img src="/hero/arc.png" alt="" className={`${orn} left-[10.8%] top-[58%] w-[78.4%]`} />
      <img src="/hero/torus.png" alt="" className={`${orn} left-[4.7%] top-[72.4%] w-[16.5%]`} />
      <img src="/hero/spring-white-lg.png" alt="" className={`${orn} left-[83.1%] top-[69.3%] w-[13.2%]`} />
      <img src="/hero/student.png" alt="Smiling student with headphones and a laptop" className={`${orn} left-[30.5%] top-[52%] w-[48%]`} />

      {/* floating cards */}
      <div className={`${orn} left-[28%] top-[62.4%] w-[14.4%] rounded-[1.4cqw] bg-white p-[1.1cqw]`}>
        <p className="font-medium" style={fs(1.2, 12)}>UI/UX Design</p>
        <p className="text-gray-500" style={fs(0.85, 10)}>200 Courses &nbsp;•&nbsp; 1000+ Students</p>
      </div>
      <div className={`${orn} left-[58.5%] top-[63.5%] w-[16%] rounded-[1.4cqw] bg-white p-[1.1cqw]`}>
        <p style={fs(1.05, 11)}>Learning Progress</p>
        <p className="font-heading font-semibold leading-tight" style={fs(3.4, 28)}>55%</p>
        <div className="mt-[0.5cqw] h-[0.6cqw] rounded-full bg-gray-100"><div className="h-full w-[55%] rounded-full bg-lime" /></div>
      </div>
      <div className={`${orn} left-[22.8%] top-[81.7%] w-[17.9%] rounded-[1.4cqw] bg-white p-[1.1cqw]`}>
        <p style={fs(1.2, 12)}>Happy Students</p>
        <p style={fs(0.85, 10)}><b>4.5</b> <span className="text-gray-400">(240)</span> <span className="text-brand">★</span></p>
        <div className="mt-[0.6cqw]"><Image src={AutoLayoutHorizontal} alt="Happy students" className="w-full" /></div>
      </div>
    </section>
  );
}

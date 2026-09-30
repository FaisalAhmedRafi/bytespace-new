"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Hero from "./Hero";
import CourseBrowser from "./CourseBrowser";
import { paths, testimonials, shapes } from "@/lib/data";
import logo1 from "../assets/Logoipsum/1.png";
import logo2 from "../assets/Logoipsum/2.png";
import logo3 from "../assets/Logoipsum/3.png";
import logo4 from "../assets/Logoipsum/4.png";
import logo5 from "../assets/Logoipsum/5.png";

import ad1 from "../assets/Ads/1.png";
import ad2 from "../assets/Ads/2.png";

const logoImages = [logo1, logo2, logo3, logo4, logo5];
const orn = "pointer-events-none absolute hidden md:block select-none";

export default function HomeClient() {
  const [query, setQuery] = useState("");
  return (
    <>
      <Hero onSearch={setQuery} />
      <div className="flex flex-wrap items-center justify-around gap-6 bg-gray-100 px-6 py-12 text-gray-400">
        {logoImages.map((logo, index) => (
          <div key={index} className="flex items-center justify-center">
            <Image src={logo} alt={`Logo ${index + 1}`} className="h-10 w-auto opacity-80" />
          </div>
        ))}
      </div>

      <section id="courses" className="mx-auto max-w-6xl scroll-mt-8 px-6 py-20">
        <h2 className="text-center font-heading text-3xl font-semibold">Discover Your Passion,<br />Build Your Skills</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-gray-500">At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.</p>
        <CourseBrowser query={query} />
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <h2 className="text-center font-heading text-2xl font-semibold">Explore Diverse Learning Paths at Bytespace</h2>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-6">
          {paths.map((p) => (
            <Link key={p.title} href={`/#courses`} className="flex flex-col items-center gap-3 rounded-2xl border border-gray-200 p-6 text-sm font-medium transition hover:border-brand">
              <Image src={p.image} alt={p.title} className="h-12 w-auto" />
              <span>{p.title}</span>
            </Link>
          ))}
        </div>
      </section>

      <div className="growth-gradient">
      
      <section className="px-6 pt-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-heading text-3xl font-semibold">Your Path to Professional Growth Starts Here!</h2>
            <p className="mt-5 text-sm text-gray-600">Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.</p>
            <dl className="mt-8 flex gap-10">
              {[["12K", "Students"], ["70+", "Courses"], ["16", "Creators"]].map(([n, l]) => (
                <div key={l}><dt className="font-heading text-2xl font-semibold text-brand">{n}</dt><dd className="text-sm text-gray-500">{l}</dd></div>
              ))}
            </dl>
          </div>
              <Image src={ad1} alt="Advertisement" className="h-auto w-full" />
        </div>
      </section>

      <section id="creators" className="mx-auto grid max-w-6xl scroll-mt-8 items-center gap-10 px-6 py-5 md:grid-cols-2">
        <Image src={ad2} alt="Advertisement" className="h-auto w-full" />
        <div>
          <h2 className="font-heading text-3xl font-semibold">Create &amp; Manage Courses Easily.</h2>
          <p className="mt-4 text-sm text-gray-600"><b>ByteSpace</b> supports individuals or entities in the creation, publication, and administration of educational courses.</p>
          <ul className="mt-6 space-y-3 text-sm">
            {["Share Your Expertise", "Monetize Your Passion", "Flexibility and Autonomy", "Build a Community"].map((t) => (
              <li key={t} className="flex items-center gap-3"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand text-xs text-white">✓</span>{t}</li>
            ))}
          </ul>
        </div>
      </section>
      </div>
      
      <section className="relative overflow-hidden bg-grid-blue px-6 py-20 text-center text-white">
        <div className="relative z-10">
          <h2 className="mx-auto max-w-xl font-heading text-3xl font-semibold">Unlock Your Potential as a Creator with ByteSpace</h2>
          <p className="mx-auto mt-5 max-w-3xl text-sm text-white/80">Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.</p>
          <Link href="/register" className="btn-lime mt-8">Join as Creator</Link>
        </div>

        {shapes.map((s, i) => (
          <img key={i} src={s.src} alt="" aria-hidden className={`${orn} z-0`} style={s.style} />
        ))}
      </section>

      <section className="testimonial-gradient relative overflow-hidden bg-white px-6 py-20">
        
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2">
            <h2 className="font-heading text-3xl font-semibold">Discover What Our Community Is Saying</h2>
            <p className="text-sm text-gray-600">At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform.</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <Image src={t.image} alt={t.name} className="h-10 w-10 rounded-full" />
                  <figcaption>
                    <b>{t.name}</b>
                    <br />
                    <span className="text-xs text-brand">{t.role}</span>
                  </figcaption>
                </div>
                <blockquote className="mt-4 text-sm text-gray-600">&ldquo;{t.text}&rdquo;</blockquote>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

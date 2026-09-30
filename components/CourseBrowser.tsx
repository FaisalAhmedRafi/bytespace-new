"use client";
import { useMemo, useState } from "react";
import CourseCard from "./CourseCard";
import { categories, courses } from "@/lib/data";

export default function CourseBrowser({ query = "" }: { query?: string }) {
  const [active, setActive] = useState("Featured");
  // Demo data has no per-category field yet; swap this for an API call filtered by `active`.
  const list = useMemo(
    () => courses.filter((c) => c.title.toLowerCase().includes(query.toLowerCase())),
    [query]
  );
  return (
    <>
      <div className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-3">
        {categories.map((c) => (
          <button key={c} onClick={() => setActive(c)} aria-pressed={active === c}
            className={`rounded-full px-4 py-1.5 text-sm transition ${active === c ? "bg-lime font-semibold" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>
            {c}
          </button>
        ))}
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.length ? list.map((c) => <CourseCard key={c.id} course={c} />) : <p className="col-span-full text-center text-gray-500">No courses match your search. Try a different keyword.</p>}
      </div>
    </>
  );
}

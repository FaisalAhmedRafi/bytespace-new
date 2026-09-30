import type { Course } from "@/lib/data";
import Image from "next/image";
import AutoLayoutHorizontalCard from "../assets/AutoLayoutHorizontalCard.png";
import signal from "../assets/signal.png";

export default function CourseCard({ course }: { course: Course }) {
  const pill = "rounded-full bg-white/70 px-3 py-1 text-[11px] font-medium text-gray-700 backdrop-blur";

  return (
    <article className="rounded-2xl border border-gray-300 bg-white p-3 shadow-sm">
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br">
        <div className="relative h-44">
          <Image src={course.image} alt={course.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
        </div>
        <div className="absolute inset-x-3 bottom-3 flex flex-wrap gap-2">
          <span className={pill}>{course.lessons} Lessons</span>
          <span className={pill}>{course.duration}</span>
          <span className={pill}>{course.comments} Comments</span>
        </div>
      </div>

      <div className="px-1 pt-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-heading text-lg font-semibold leading-snug">{course.title}</h3>
          <span className="flex shrink-0 items-center gap-1 text-md text-gray-500">
            {course.rating}
            <span className="text-gray-300 text-lg">★</span>
          </span>
        </div>

        <p className="mt-1 text-sm text-gray-500">
          by <span className="text-brand">{course.author}</span>
        </p>

        <div className="mt-3 flex items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1.5 text-sm">
            <Image src={signal} alt="" width={16} height={16} className="h-4 w-4" />
            Beginner
          </span>
          <div className="overflow-hidden">
            <Image src={AutoLayoutHorizontalCard} alt="Happy students" width={120} height={24} className="h-6 w-auto" />
          </div>
        </div>

        <p className="mt-4 pb-1 text-brand">
          <span className="text-2xl font-bold">${course.price}</span>
          <span className="text-sm text-gray-500">/lifetime</span>
        </p>
      </div>
    </article>
  );
}

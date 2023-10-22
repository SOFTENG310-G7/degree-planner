'use client';
import { CourseDTO } from '@/types/CourseDTO';

export function DegreePlanCard(c: CourseDTO, handleRemoveCourse: (course_code: string) => Promise<void>) {
  return (
    <div
      key={c.course_code}
      className="flex flex-row justify-between rounded-md p-5 border-2 border-black gap-8"
    >
      <p className="font-size text-xl">
        {c.course_code} - {c.title}
      </p>
      <button
        className="text-slate-100 bg-red-500 hover:bg-red-700 transition-colors px-4 py-2 rounded-lg -m-2"
        onClick={() => handleRemoveCourse(c.course_code)}
      >
        Remove
      </button>
    </div>
  );
}

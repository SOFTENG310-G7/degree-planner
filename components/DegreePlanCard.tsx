'use client';
import { CourseDTO } from '@/types/CourseDTO';
import { AiOutlineClose } from 'react-icons/ai';

export function DegreePlanCard(
  c: CourseDTO,
  handleRemoveCourse: (course_code: string) => Promise<void>,
  openPopup: (course: any) => void
) {
  return (
    <div
      key={c.course_code}
      onClick={() => openPopup(c)}
      className="flex flex-row justify-between rounded-md p-5 border-2 border-slate-500 gap-8
      hover:cursor-pointer shadow hover:shadow-lg transition-shadow bg-white"
    >
      <div className="text-slate-600 text-xl">
        <span className="font-semibold text-slate-800">{c.course_code}</span> {c.title}
      </div>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          handleRemoveCourse(c.course_code);
        }}
        className="hover:cursor-pointer"
      >
        <AiOutlineClose size={20} className="hover:fill-cyan-600" />
      </button>
    </div>
  );
}

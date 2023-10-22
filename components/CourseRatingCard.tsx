'use client';
import { FaStar } from 'react-icons/fa';
import { CourseRating } from '../app/pages/profile/page';

export function CourseRatingCard(c: Readonly<CourseRating>, openPopup: (course: any) => void) {
  return (
    <div
      key={c.courses.id}
      onClick={() => openPopup(c.courses)}
      className="flex flex-row justify-between rounded-md p-5 border-2 border-black 
      hover:cursor-pointer shadow hover:shadow-lg transition-shadow bg-white"
    >
      <p className="font-size text-xl">
        {c.courses.course_code} - {c.courses.title}
      </p>
      <div className="flex">
        {[...Array(5)].map((star, index) => {
          const id = index;
          const ratingValue = index + 1;
          return (
            <FaStar
              key={id}
              className="star"
              color={ratingValue <= (c.rating ?? 0) ? '#ffc107' : '#e4e5e9'}
              size={30}
            />
          );
        })}
      </div>
    </div>
  );
}

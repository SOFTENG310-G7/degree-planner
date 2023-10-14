'use client';
import { useState, useEffect } from 'react';
import LogoutButton from '@/components/LogoutButton';
import { CourseDTO } from '@/types/CourseDTO';
import { FaStar } from 'react-icons/fa';

interface CourseRating {
  courses: CourseDTO;
  rating: number;
}

export default function Profile() {
  const [courses, setCourses] = useState<CourseRating[]>([]);

  useEffect(() => {
    // Fetching data from API
    fetchUserCourses();
  }, []);

  const fetchUserCourses = async () => {
    const response = await fetch(
      `http://localhost:3000/api/ratings/GET_user`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (response.ok) {
      // Storing the ratings associated with the user
      const ratingData = await response.json();
      setCourses(ratingData.ratings);
      console.log(ratingData);
    }
  }

  return (
    <div className="flex flex-col text-3xl">
      <div className="mt-12 font-bold text-center">
        <p>Welcome to your profile page.</p>
      </div>
      {courses.length !== 0 ? (
        <div className="mt-12 text-left ml-12">
          <p className="mb-5 font-bold">Courses Ratings</p>
          {courses.map((c) => (
            <div key={c.courses.id} className="flex flex-row mt-4 mb-4">
              <p className='pr-6 '>{c.courses.title}</p>
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
          ))}
        </div>
      ) : null}
      <div className="flex justify-center pb-[100px]">
        <div className="mt-12">
          <LogoutButton />
        </div>
      </div>
    </div>
  );
}

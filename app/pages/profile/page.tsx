'use client';
import { useState, useEffect, useRef } from 'react';
import LogoutButton from '@/components/LogoutButton';
import { CourseDTO } from '@/types/CourseDTO';
import { FaStar } from 'react-icons/fa';

interface CourseRating {
  courses: CourseDTO;
  rating: number;
}

interface SavedCourse {
  course: CourseDTO[];
}

export default function Profile() {
  const [courses, setCourses] = useState<CourseRating[]>([]);
  const [savedCourses, setSavedCourses] = useState<SavedCourse>({
    course: [],
  });

  const prevSavedCourses = useRef(savedCourses);

  useEffect(() => {
    // Fetching data from API
    fetchUserCourses();
    handleGetCourses();
  }, []);

  useEffect(() => {
    if (prevSavedCourses.current !== savedCourses) {
      handleCourseUpdate();
      prevSavedCourses.current = savedCourses;
    }
  }, [savedCourses]);

  const fetchUserCourses = async () => {
    const response = await fetch(`http://localhost:3000/api/ratings/GET_user`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      // Storing the ratings associated with the user
      const ratingData = await response.json();
      setCourses(ratingData.ratings);
    }
  };

  const handleGetCourses = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/saveCourses/GET', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const courses = await response.json();
        setSavedCourses({ course: courses.courses[0].saved_courses });
      }
    } catch (error) {
      console.error('Error while getting saved courses:', error);
    }
  };

  const handleRemoveCourse = async (course_code: string) => {
    const updatedCourses = savedCourses.course.filter((c) => c.course_code !== course_code);
    setSavedCourses({ course: updatedCourses });
  };

  const handleCourseUpdate = async () => {
    try {
      const data = {
        courses: savedCourses.course,
      };

      const response = await fetch('http://localhost:3000/api/saveCourses/PUT', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Successfully updated the review
        console.log('Courses updated successfully');
      } else {
        console.error('Failed to update courses');
      }
    } catch (error) {
      console.error('Error while saving:', error);
    }
  };

  return (
    <main className="flex flex-col items-center mb-12">
      <h1 className="text-4xl text-medium font-bold my-16">Profile</h1>
      <div className="flex flex-col w-1/2 mr-10">
        {courses.length !== 0 ? (
          <div className="mt-12 text-left ml-12">
            <p className="mb-5 font-bold text-2xl">Courses Ratings</p>
            {courses.map((c) => (
              <div
                key={c.courses.id}
                className="flex flex-row justify-between mt-4 mb-4 rounded-md py-5 px-5 border-2 border-black"
              >
                <p className="pr-6 font-size text-xl">
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
            ))}
          </div>
        ) : null}
      </div>
      <div className="flex flex-col w-1/2 mr-12">
        {savedCourses ? (
          <div className="mt-12 text-left ml-12">
            <p className="mb-5 font-bold text-2xl">Degree Plan</p>

            {savedCourses.course.map((c) => (
              <div
                key={c.course_code}
                className="flex flex-row justify-between mt-4 mb-4 rounded-md py-5 px-5 border-2 border-black"
              >
                <p className="pr-6 font-size text-xl">
                  {c.course_code} - {c.title}
                </p>
                <button onClick={() => handleRemoveCourse(c.course_code)}>Remove</button>
              </div>
            ))}
          </div>
        ) : null}
      </div>
      <LogoutButton />
    </main>
  );
}

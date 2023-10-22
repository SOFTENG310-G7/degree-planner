'use client';
import { useState, useEffect, useRef } from 'react';
import LogoutButton from '@/components/LogoutButton';
import Popup from '@/components/Popup';
import { CourseDTO } from '@/types/CourseDTO';
import { DegreePlanCard } from '../../../components/DegreePlanCard';
import { CourseRatingCard } from '../../../components/CourseRatingCard';

export interface CourseRating {
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
  const [opened, setOpened] = useState(false);
  const [openedData, setOpenedData] = useState<CourseDTO>();

  const openPopup = (course: any) => {
    setOpenedData(course);
    setOpened(true);
  };

  const closePopup = () => {
    fetchUserCourses();
    setOpened(false);
    document.body.style.overflow = ''; // Enable scrolling
  };

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

  // Controlling scrolling depending on if the popup is open
  useEffect(() => {
    if (opened) {
      document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
      document.body.style.overflow = ''; // Enable scrolling
    }
  }, [opened]);

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
    <main className="flex flex-col items-center py-16 px-8 gap-8">
      {opened && openedData != null && (
        <>
          {/* Overlay */}
          <div
            className="fixed left-0 right-0 top-0 bottom-0 bg-black opacity-50"
            onClick={closePopup}
          ></div>

          {/* Popup */}
          <Popup openedData={openedData} closePopup={closePopup} />
        </>
      )}
      <h1 className="text-4xl font-bold">Profile</h1>
      <div className="flex flex-col w-full max-w-4xl gap-5">
        <h2 className="font-bold text-2xl">Courses Ratings</h2>
        {courses.length !== 0 ? (
          <>{courses.map((c) => CourseRatingCard(c, openPopup))}</>
        ) : (
          <p className="text-l">You have not rated any courses yet</p>
        )}
      </div>
      <div className="flex flex-col w-full max-w-4xl gap-5">
        <h2 className="font-bold text-2xl">Degree Plan</h2>
        {savedCourses.course.length !== 0 ? (
          <>{savedCourses.course.map((c) => DegreePlanCard(c, handleRemoveCourse, openPopup))}</>
        ) : (
          <p className="text-l">You have not added any courses yet</p>
        )}
      </div>
      <div className="flex flex-col w-full max-w-4xl gap-5">
        <h2 className="font-bold text-2xl">Profile Actions</h2>
        <LogoutButton />
      </div>
    </main>
  );
}
